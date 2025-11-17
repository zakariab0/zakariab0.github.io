export const baseUrl = "https://zakariab0.github.io";
export const dynamic = 'force-static';

export default async function sitemap() {
  let routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
