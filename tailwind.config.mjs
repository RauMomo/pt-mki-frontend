/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"], // Adding Poppins as the main font
      },
      backgroundImage: {
        logo: "url('/images/logo_mki.png')",
        banner: "url('/images/bg_overlay_img.jpeg')",
        bannerOt: "url('/images/banner-our-team.png')",
        backdrop: "url('/images/banner-training-list.png')",
        contact: "url('/images/banner-background.png')",
      },
      colors: {
        chip: "#89CAF5",
        primary: "#335AA7",
        altPrimary: "#4772C7",
        secondary: "#5C47C7",
        bgSecondary: "#E7E4F7",
        complementary: "#3394A7",
        bgComplement: "#E4F4F7",
        bgCardAlt: "#F2F2F2",
        bgLightSkyBlue: "#ECF7FD",
        captionText: "#A3A3A3",
        dimGray: "#6B6B6B",
        customWhite: "#F5F5F5",
        bgCard: "#FBF9F9",
      },
    },
  },
  plugins: [],
};
