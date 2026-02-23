import type { MetadataRoute } from "next";

const baseUrl = "https://booknote.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/auth", "/book/", "/library", "/review", "/statistics", "/profile", "/dashboard", "/search", "/reminder"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/home"],
        disallow: ["/api/", "/auth", "/book/", "/library", "/review", "/statistics", "/profile", "/dashboard", "/search", "/reminder"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
