import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./pages/Home";
import { ROICalculator } from "./pages/ROICalculator";
import { Platform } from "./pages/Platform";
import { Solutions } from "./pages/Solutions";
import { Evidence } from "./pages/Evidence";
import { About } from "./pages/About";
import { News } from "./pages/News";
import { NewsArticle } from "./pages/NewsArticle";
import { Contact } from "./pages/Contact";
import { SchedulePilot } from "./pages/SchedulePilot";
import { RootLayout } from "./components/RootLayout";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "platform", Component: Platform },
      { path: "solutions", Component: Solutions },
      { path: "evidence", Component: Evidence },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "roi-calculator", Component: ROICalculator },
      { path: "schedule-pilot", Component: SchedulePilot },
      { path: "news", Component: News },
      { path: "news/:slug", Component: NewsArticle },
      // Redirect old routes to new consolidated pages
      { path: "research", element: <Navigate to="/evidence" replace /> },
      { path: "research/*", element: <Navigate to="/evidence" replace /> },
      { path: "products", element: <Navigate to="/platform" replace /> },
      { path: "products/*", element: <Navigate to="/platform" replace /> },
      { path: "services", element: <Navigate to="/solutions" replace /> },
      { path: "services/*", element: <Navigate to="/solutions" replace /> },
      { path: "company/*", element: <Navigate to="/about" replace /> },
      { path: "leadership", element: <Navigate to="/about" replace /> },
      // 404 catch-all - redirect to home
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
], { basename });