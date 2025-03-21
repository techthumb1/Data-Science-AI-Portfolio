import { MetadataRoute } from "next";
/*import siteConfig from "@/data/site-config.json";*/

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/projects`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/skills`, lastModified: new Date().toISOString() }
  ];
}
