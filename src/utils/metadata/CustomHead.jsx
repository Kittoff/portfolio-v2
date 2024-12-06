import Head from "next/head";

export default function CustomHead({
  title = "Christophe Lozano • Freelance Developer",
  content,
  pageSlug,
  pageType = "website",
  ogImage = `${process.env.NEXT_PUBLIC_BASE_URL}/layout/og-image.png`,
}) {
  const ogTitle = title.replace("Christophe Lozano • Freelance Developer", "");
  const pageURL = `${process.env.NEXT_PUBLIC_BASE_URL}${pageSlug}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="canonical" href={pageURL} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={content} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
}
