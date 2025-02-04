export default function sitemap() {
  const siteUrl = "https://harshchopra.com";

  const pages = [
      "/", 
      "/about", 
      "/portfolio", 
      "/contact"
  ];

  return pages.map((page) => ({
      url: `${siteUrl}${page}`,
      lastModified: new Date().toISOString(),
  }));
}
