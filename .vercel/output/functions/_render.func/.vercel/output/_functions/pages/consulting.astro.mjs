import '../chunks/consulting.7a7741ac_Blqh4XAA.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_DoFgB1gW.mjs';
import { $ as $$Layout } from '../chunks/Layout_DWP4yPAZ.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Consulting = createComponent(($$result, $$props, $$slots) => {
  const customCrumbs = [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Consulting",
      href: "#",
      title: "Consulting"
    }
  ];
  const listAssessmentCenter = [
    "Jasa Assessment Center",
    "Jasa pengembangan tools Assessment Center",
    "Sertifikasi Certified Assessment Center Assessor (CACA)",
    "Sertifikasi Certified Behavioral Event Interviewer (CBEI)"
  ];
  function generateTextMessage(classTitle) {
    const encodedTitle = encodeURIComponent(classTitle);
    const templateMessage = `Saya%20tertarik%20untuk%20menggunakan%20jasa%20${encodedTitle}%20yang%20Anda%20tawarkan.%20Bisakah%20Anda%20membantu%20saya%20dengan%20informasi%20lebih%20lanjut%20mengenai%20layanan%20ini%2C%20termasuk%20harga%2C%20metode%20pelaksanaan%2C%20dan%20jadwal%20yang%20tersedia%3F`;
    return `${templateMessage}%20${encodedTitle}`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Consulting", "data-astro-cid-35nblzrv": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8" data-astro-cid-35nblzrv><div class="bg-backdrop bg-cover py-16 h-full" data-astro-cid-35nblzrv><section data-astro-cid-35nblzrv><div class="flex flex-col gap-8" data-astro-cid-35nblzrv><div class="w-3/5 flex flex-col p-8 justify-start items-start gap-16" data-astro-cid-35nblzrv><h1 class="flex-grow flex items-center justify-center text-white" data-astro-cid-35nblzrv>Consulting</h1>${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "customCrumbs": customCrumbs, "data-astro-cid-35nblzrv": true })}</div></div></section><div class="py-8 bg-white min-h-50" data-astro-cid-35nblzrv><section data-astro-cid-35nblzrv><div class="flex flex-col flex-1 gap-4" data-astro-cid-35nblzrv><h5 data-astro-cid-35nblzrv>Consulting & Assessment Center</h5><table class="table-fixed border-collapse box-border border-2 align-middle text-center" data-astro-cid-35nblzrv><tr data-astro-cid-35nblzrv><th data-astro-cid-35nblzrv>Nomor</th><th data-astro-cid-35nblzrv>Nama Layanan</th><th data-astro-cid-35nblzrv>Kontak Kami</th></tr>${listAssessmentCenter.map((value, index) => {
    var url = `https://wa.me/6281381884838?text=${generateTextMessage(value)}`;
    return renderTemplate`<tr data-astro-cid-35nblzrv><td data-astro-cid-35nblzrv>${index + 1}</td><td class="text-start translate-x-4" data-astro-cid-35nblzrv>${value}</td><td class="text-center table-cell ml-auto mr-auto align-middle" data-astro-cid-35nblzrv><div class="grid place-content-center place-items-center my-2" data-astro-cid-35nblzrv><a${addAttribute(url, "href")} data-astro-cid-35nblzrv><img${addAttribute("../../public/icons/icon-whatsapp.png", "src")} width="40" data-astro-cid-35nblzrv></a></div></td></tr>`;
  })}</table></div></section></div></div></div>` })}`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/consulting.astro", void 0);

const $$file = "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/consulting.astro";
const $$url = "/consulting";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consulting,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
