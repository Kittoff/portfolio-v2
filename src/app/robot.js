export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/experience", "/contact"],
      disallow: "/private/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
