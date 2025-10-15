import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://i.postimg.cc/dVbNPq2y/Untitled-design.png",
        type: "image/svg+xml+png",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "https://i.postimg.cc/dVbNPq2y/Untitled-design.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "https://i.postimg.cc/dVbNPq2y/Untitled-design.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "https://i.postimg.cc/dVbNPq2y/Untitled-design.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "https://i.postimg.cc/BZxHXsHv/Screenshot-2025-10-15-at-7-43-55-PM.png",
        type: "image/webp+png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://i.postimg.cc/BnyXmwHt/Screenshot-2025-10-15-at-7-43-44-PM.png",
        type: "image/webp+png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://i.postimg.cc/d372xTD8/Screenshot-2025-10-15-at-7-43-08-PM.png",
        type: "image/webp+png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "https://i.postimg.cc/gjc5XsMD/Screenshot-2025-10-15-at-7-43-34-PM.png",
        type: "image/webp+png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
