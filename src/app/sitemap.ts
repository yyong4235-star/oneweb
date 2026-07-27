import type { MetadataRoute } from "next";

const routes = ["", "/about", "/products", "/services", "/news", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lanyao-energy.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.3 : 0.8,
  }));
}
