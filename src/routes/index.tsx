import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Jahwanth Pulugujju — Brand Strategy & Creative Direction" },
      { name: "description", content: "Portfolio of Jahwanth Pulugujju — Creative Strategist, Brand Designer & Content Marketer based in Hyderabad." },
      { property: "og:title", content: "Jahwanth Pulugujju — Portfolio 2026" },
      { property: "og:description", content: "Brand Strategy · Content Systems · Creative Direction" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" },
    ],
  }),
});
