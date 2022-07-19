/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "WA Helper",
  description: "Send Whastapp message without saving the contact first.",
  canonical: "https://bantuwa.netlify.app/",
  openGraph: {
    url: "https://bantuwa.netlify.app/",
    title: "WA Helper",
    description: "Send Whastapp message without saving the contact first.",
    type: "website",

    site_name: "https://bantuwa.netlify.app/",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://cdn-icons-png.flaticon.com/512/408/408708.png?w=740",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export default defaultSEOConfig;
