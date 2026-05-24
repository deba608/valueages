import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Valueages",
    short_name: "Valueages",
    description:
      "India enterprise GTM advisory for global SaaS and product companies.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbfcf8",
    theme_color: "#109B82",
    icons: [
      {
        src: "/Nav_logo1.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
