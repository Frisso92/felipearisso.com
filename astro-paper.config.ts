import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://felipearisso.com/",
    title: "Felipe A. Risso",
    description: "Personal portfolio and resume of an Electronic Engineering student and certified Electromechanical Technician. Showcasing technical projects, experience, and background.",
    author: "Felipe A. Risso",
    profile: "https://felipearisso.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Argentina/Buenos_Aires",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/Frisso92" },
    { name: "tryhackme",        url: "https://tryhackme.com/p/Frisso92" },
    { name: "linkedin", url: "https://www.linkedin.com/in/felipe-risso-974249300/" },
    { name: "mail",     url: "mailto:felipearisso2005@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});