/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "WA Helper",
  description: "Send Whastapp message without saving the contact first.",
  canonical: "https://bantuwa.netlify.app",
  openGraph: {
    url: "https://bantuwa.netlify.app",
    title: "WA Helper",
    description: "Send Whastapp message without saving the contact first.",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=Send%20WhatsApp%20message%20without%20saving%20the%20contact%20first.&logo=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F408%2F408708.png%3Fw%3D740&siteName=bantuwa.netlify.app&templateTitle=WhatsApp%20Helper&theme=dark",
        alt: "bantuwa.netlify.app whatsapp-helper",
        width: 800,
        height: 600,
      },
    ],
    site_name: "bantuwa.netlify.app",
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
