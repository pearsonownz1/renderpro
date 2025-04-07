import { Suspense, lazy } from "react"; // Added lazy
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
const GetAQuotePage = lazy(() => import("./pages/GetAQuote")); // Lazy load the new page
const ServicesPage = lazy(() => import("./pages/Services"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorks"));
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/get-a-quote" element={<GetAQuotePage />} /> {/* Added route */}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
