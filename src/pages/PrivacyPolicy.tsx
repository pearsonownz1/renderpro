import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet

const PrivacyPolicy: React.FC = () => {
  const companyName = "RenderSnap"; // Note: Text uses RenderSnap, title/desc use RenderPro
  const contactEmail = "info@rendersnap.com";
  const effectiveDate = "April 7, 2025"; // Update as needed

  return (
    <div className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Privacy Policy | RenderPro</title>
        <meta name="description" content="Read the RenderPro privacy policy to understand how we collect, use, and protect your personal information when you use our website and services." />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-muted-foreground text-center mb-8">Effective Date: {effectiveDate}</p>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">1. Introduction</h2>
            <p>
              Welcome to {companyName}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at {contactEmail}.
            </p>
            <p className="mt-2">
              This privacy notice describes how we might use your information if you visit our website at [Your Website URL], engage with us in other related ways ― including any sales, marketing, or events.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
            </p>
            <p className="mt-2">
              The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Email Address, Phone Number, Company Name, Project Details.
            </p>
            <p className="mt-2">
              We also automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>To facilitate account creation and logon process.</li>
              <li>To post testimonials (with your consent).</li>
              <li>Request feedback.</li>
              <li>To enable user-to-user communications (with consent).</li>
              <li>To manage user accounts.</li>
              <li>To send administrative information to you.</li>
              <li>To protect our Services.</li>
              <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
              <li>To respond to legal requests and prevent harm.</li>
              <li>Fulfill and manage your orders/requests.</li>
              <li>To deliver and facilitate delivery of services to the user.</li>
              <li>To respond to user inquiries/offer support to users.</li>
              <li>To send you marketing and promotional communications (with consent).</li>
              <li>Deliver targeted advertising to you (with consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">4. Will Your Information Be Shared With Anyone?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, Vital Interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">5. Cookies and Other Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice [Link to Cookie Policy if applicable].
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">6. How Long Do We Keep Your Information?</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">7. How Do We Keep Your Information Safe?</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">8. Do We Collect Information From Minors?</h2>
            <p>
              We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">9. What Are Your Privacy Rights?</h2>
            <p>
              In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">10. Controls for Do-Not-Track Features</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">11. Do We Make Updates to This Notice?</h2>
            <p>
              Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">12. How Can You Contact Us About This Notice?</h2>
            <p>
              If you have questions or comments about this notice, you may email us at {contactEmail} or by post to:
            </p>
            <p className="mt-2">
              {companyName}
              <br />
              [Your Company Address Line 1]
              <br />
              [Your Company Address Line 2]
              <br />
              [City, State, Zip Code]
              <br />
              [Country]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
