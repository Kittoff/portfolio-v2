export default function sitemap() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/experience`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
    },
  ];
}
