import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import * as z from 'zod';

// Initialize Resend client with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the expected shape of the incoming request body using Zod
// This should match the frontend form schema
const requestBodySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  companyName: z.string().optional(),
  projectType: z.string(),
  projectDetails: z.string().min(10),
});

// Define the target email addresses
const TO_EMAILS = ['staffan@gcs.org', 'guy@gcs.org'];
// Define the sender email address (Must be a verified domain in Resend)
// Define the sender email address (Must be a verified domain in Resend)
const FROM_EMAIL = 'noreply@mail.rendersnap.co';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Validate the request body against the schema
    const formData = requestBodySchema.parse(req.body);

    // Construct email content
    const subject = `New Quote Request: ${formData.projectType} - ${
      formData.companyName || `${formData.firstName} ${formData.lastName}`
    }`;
    const textBody = `
      New Quote Request Received:

      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Company: ${formData.companyName || 'N/A'}
      Project Type: ${formData.projectType}

      Details:
      ${formData.projectDetails}
    `;
    const htmlBody = `
      <h1>New Quote Request Received</h1>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
      <p><strong>Company:</strong> ${formData.companyName || 'N/A'}</p>
      <p><strong>Project Type:</strong> ${formData.projectType}</p>
      <hr>
      <h2>Details:</h2>
      <p>${formData.projectDetails.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      subject: subject,
      text: textBody,
      html: htmlBody,
      replyTo: formData.email, // Set reply-to for easy response (Corrected typo)
    });

    // Handle Resend API errors
    if (error) {
      // Log the detailed error object from Resend
      console.error('Detailed Resend Error:', JSON.stringify(error, null, 2));
      return res.status(500).json({
        message: 'Error sending email via Resend.',
        // Provide more context if available in the error object
        details: error.message || 'Unknown Resend error',
        resendErrorName: error.name, // e.g., 'missing_required_fields'
      });
    }

    // Success response
    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Quote request sent successfully.' });

  } catch (error) {
    // Handle validation errors or other unexpected errors
    if (error instanceof z.ZodError) {
      console.error('Validation Error:', error.errors);
      return res.status(400).json({ message: 'Invalid form data.', errors: error.errors });
    }
    console.error('Server Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return res.status(500).json({ message: 'Internal Server Error.', details: errorMessage });
  }
}
