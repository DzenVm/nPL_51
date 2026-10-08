import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/gra", "/jak-grac", "/o-grze", "/faq", "/kontakt", "/polityka-prywatnosci", "/warunki"];
  return paths.map((path) => ({ url: `https://terqovunax.quest${path}`, lastModified: new Date("2026-10-08"), changeFrequency: path === "" || path === "/gra" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/gra" ? 0.9 : 0.5 }));
}
