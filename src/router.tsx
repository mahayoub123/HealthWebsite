import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import ProcessPage from "./pages/ProcessPage";
import TeamPage from "./pages/TeamPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/process",
    element: <ProcessPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
]);
