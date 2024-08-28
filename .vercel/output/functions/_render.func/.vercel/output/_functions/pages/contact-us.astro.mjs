import '../chunks/consulting.7a7741ac_Blqh4XAA.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_DoFgB1gW.mjs';
import { $ as $$Customers } from '../chunks/Customers_Cz5TmGVl.mjs';
import { $ as $$Layout } from '../chunks/Layout_DWP4yPAZ.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  const customCrumbs = [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Contact Us",
      href: "/contact-us",
      title: "Contact Us"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col flex-1"> <div class="bg-bannerOt h-[360px] bg-cover b-gcenter flex items-center"> <section> <div class="flex flex-col justify-center mt-auto mb-auto gap-8"> <h2 class="text-white tracking-wide font-normal text-4xl">Contact Us</h2> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "customCrumbs": customCrumbs })} </div> </section> </div> <div class="bg-white my-8"> <section> <div class="flex flex-row flex-1 gap-64 basis-full justify-end items-center"> <div class="w-full flex flex-col gap-8"> <div> <h4>PT Manajemen Kinerja Indonesia</h4> <br> <p>Gedung Menara 165, 4th Floor,
              Jl. TB Simatupang Kav. 1, Cilandak Timur, Pasar Minggu, Jakarta Selatan</p> </div> <div class="flex flex-col gap-0"> <h4>Contact Person:</h4> <p>Ibu Siti Insaroh</p> </div> <div id="contact-direct" class="flex flex-col gap-4"> <div class="flex flex-row gap-3 basis-3 items-center"> <img${addAttribute("../../public/icons/icon-whatsapp.png", "src")} width="50"> <a href="#">081381884838</a> </div> <div class="flex flex-row gap-3 basis-3 items-center"> <img${addAttribute("../../public/icons/icon-gmail.png", "src")} width="50"> <a href="#">manajemenkinerjaindonesia@gmail.com</a> </div> </div> </div> <div class="w-full flex-shrink-1"> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9962.160262310113!2d106.807622254973!3d-6.289330460913237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1fa5b9f59a3%3A0x772f6f7bc1fbc6c0!2sMenara%20165!5e0!3m2!1sen!2sid!4v1724732174196!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> </section> ${renderComponent($$result2, "Customers", $$Customers, {})} </div> </div> ` })}`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/contact-us.astro", void 0);

const $$file = "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
