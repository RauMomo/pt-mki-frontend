import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, e as renderHead, f as renderSlot, d as createAstro } from './astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { s as styles } from './consulting.7a7741ac_Blqh4XAA.mjs';

var PrimaryButton = ({
  title,
  primary,
  icon,
  action,
  params
}) => {
  const contactWhatsapp = () => {
    const title2 = params["title"];
    const encodedTitle = encodeURIComponent(title2);
    console.log(encodedTitle);
    const url = `https://wa.me/6281381884838?text=Halo,%20saya%20ingin%20mendaftar%20${encodedTitle},%20apakah%20training%20ini%20masih%20tersedia?`;
    window.open(url, "_blank");
  };
  const downloadFile = () => {
    const url = params["url"];
    const title2 = params["title"];
    const formattedTitle = title2.replaceAll(" ", "_");
    const link = document.createElement("a");
    link.href = url;
    console.log(url);
    link.download = formattedTitle;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleAction = (e) => {
    console.log(action);
    switch (action) {
      case "downloadFile":
        return downloadFile();
      case "contactWhatsapp":
        return contactWhatsapp();
      default:
        return console.log("test 3");
    }
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: !primary ? styles.button : styles.secondaryButton,
      onClick: handleAction,
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: primary ? styles.icon : styles.altIcon, children: /* @__PURE__ */ jsx("img", { src: icon, width: 40 }) }),
        title
      ]
    }
  );
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="bg-primary text-white h-84 justify-center"> <section> <div class="flex flex-col gap-8 pb-8"> <h6>Transformasi Bisnis Anda Bersama Kami</h6> <p class="text-lg tracking-wide mb-4">Kami hadir untuk mendukung setiap langkah Anda, dari ide hingga implementasi. Mari wujudkan visi besar Anda dengan strategi yang tepat dan dukungan penuh dari tim ahli kami.</p> <div class="flex-grow"> ${renderComponent($$result, "PrimaryButton", PrimaryButton, { "title": "Mulai Transformasi Anda", "primary": false })} </div> </div> </section> </div> <div class="bg-bgComplement flex flex-row text-black py-16 h-[430px] justify-center"> <section class="flex flex-row justify-center gap-64 items-center"> <div class="flex flex-col flex-grow gap-16 w-1/3"> <img src="../../public/images/logo_mki.png" width="200" height="100"> <p class="max-w-2xl ">Perusahaan konsultansi dan training yang akan membantu organisasi dalam melakukan transformasi bisnis dengan sukses</p> </div> <div class="flex flex-col flex-grow w-1/3 justify-start items-center"> <h5 class="font-semibold pb-8 text-left -translate-x-8">Menu</h5> <ul> <li class="li-spacing">Home</li> <li class="li-spacing">Tentang Kami</li> <li class="li-spacing">Layanan</li> <li class="li-spacing">Klien</li> </ul> </div> <div class="flex flex-col flex-grow w-1/3 gap-8"> <h4 class="font-semibold">Alamat Kantor:</h4> <address> <strong>PT Manajemen Kinerja Indonesia</strong><br>
Gedung Menara 165, 4th Floor,<br>
Jl. TB Simatupang Kav. 1, Cilandak Timur,<br>
Pasar Minggu, Jakarta Selatan
</address> <div class="w-auto"> ${renderComponent($$result, "PrimaryButton", PrimaryButton, { "title": "Hubungi Kami", "primary": true })} </div> </div> </section> </div> </footer>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Footer.astro", void 0);

const Header = () => {
  const handleClick = () => {
    console.log("handleClick");
  };
  return /* @__PURE__ */ jsxs("header", { className: "flex justify-between flex-row items-center w-full h-[90px] border-b-2 shadow-md px-20", children: [
    /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "../../public/images/logo_mki.png", className: "w-20 block" }) }),
    /* @__PURE__ */ jsx("nav", { className: "inline-block", children: /* @__PURE__ */ jsxs("ul", { className: "flex space-x-4", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/public-training/1",
          className: "text-black no-underline mx-5",
          children: "Public Training"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/consulting", className: "text-black no-underline mx-5", children: "Consulting" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/our-team", className: "text-black no-underline mx-5", children: "Our Team" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/contact-us", className: "text-black no-underline mx-5", children: [
        " ",
        "Contact Us",
        " "
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://wa.me/6281381884838?",
          className: "bg-primary p-4 text-red-50 rounded-lg font-semibold no-underline",
          onClick: handleClick,
          children: "Hubungi Kami"
        }
      ) })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Manajemen Kinerja Indonesia",
    image = "../../public/images/logo_mki.png"
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="text-black"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:image"${addAttribute(image, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen font-sans overflow-scroll"> ${renderComponent($$result, "Header", Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/layouts/Layout.astro", void 0);

export { $$Layout as $, PrimaryButton as P };
