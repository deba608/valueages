import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "Google-Extended",
          "ClaudeBot",
          "CCBot",
          "Bytespider",
          "Amazonbot",
          "Applebot-Extended",
          "meta-externalagent",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://valueages.com/sitemap.xml",
    host: "https://valueages.com",
  };
}
