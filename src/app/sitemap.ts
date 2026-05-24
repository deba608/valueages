import type { MetadataRoute } from "next";

const SITE_URL = "https://valueages.com";
const LAST_MODIFIED = new Date("2026-05-24T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
