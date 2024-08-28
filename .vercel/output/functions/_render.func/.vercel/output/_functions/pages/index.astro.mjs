import '../chunks/consulting.7a7741ac_Blqh4XAA.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent } from '../chunks/astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Chip } from '../chunks/Chip_rLTjdKls.mjs';
import { $ as $$Customers } from '../chunks/Customers_Cz5TmGVl.mjs';
import { P as PrimaryButton, $ as $$Layout } from '../chunks/Layout_DWP4yPAZ.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { a as selectedTab } from '../chunks/HomeStore_DyAm_8zC.mjs';
import { $ as $$TrainingList } from '../chunks/TrainingList_dgtd4MQY.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, icon, bgColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`link-card ${bgColor}`, "class")} data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <img${addAttribute(icon, "src")} data-astro-cid-dohjnao5> <h2 class="text-primary font-semibold my-4" data-astro-cid-dohjnao5> ${title} </h2> <p class="font-normal text-sm leading-7" data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Card.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="block relative"> <div class="h-auto w-full py-16 px-16"> <div class="flex flex-col relative"> <div class="flex flex-row"> <div class="flex-[40%] gap-10 flex-col flex"> ${renderComponent($$result, "Chip", $$Chip, {})} <h1 class="text-3xl font-semibold">Tentang Kami</h1> </div> <div class="flex-[60%]"> <p class="text-[1rem] font-extralight tracking-normal leading-8">PT Manajemen Kinerja Indonesia (MKI Consulting) merupakan perusahaan konsultansi dan training yang akan membantu organisasi dalam melakukan transformasi bisnis dengan sukses. Mulai dari menyusun blueprint transformasi organisasi hingga membantu organisasi melaksanakan transformasi organisasi dan mengembangkan pengetahuan, keahlian, sikap, dan perilaku sumber daya manusia yang tepat sebagai kunci sukses utama dari keberhasilan organisasi.</p> </div> </div> <div class="grid grid-flow-row grid-cols-3 justify-start gap-6 mt-16"> ${renderComponent($$result, "Card", $$Card, { "title": "Visi Kami", "body": "Menjadi mitra pilihan utama dalam transformasi organisasi.", "href": "", "icon": "./icons/icon-vision.svg", "bgColor": "bg-bgComplement" })} ${renderComponent($$result, "Card", $$Card, { "title": "Misi Kami", "body": "Membantu organisasi bisnis maupun pemerintah dalam melakukan transformasi organisasi dengan solusi yang tepat.", "href": "", "icon": "./icons/icon-mission.svg", "bgColor": "bg-bgComplement" })} ${renderComponent($$result, "Card", $$Card, { "title": "Tujuan Kami", "body": "Dikenal luas sebagai mitra handal transformasi organisasi sebelum 2035..", "href": "", "icon": "./icons/icon-goal.svg", "bgColor": "bg-bgComplement" })} </div> </div> </div> </section>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/AboutUs.astro", void 0);

const $$Background = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex flex-col justify-center items-center gap-8"> ${renderComponent($$result, "Chip", $$Chip, { "title": "Backgrounds" })} <h2>Partner in Transformation</h2> <div class="grid grid-rows-4 grid-flow-row row-gap-16"> <div class="grid grid-cols-2 grid-flow-col justify-self-center gap-16 mb-8"> <div class="flex flex-col gap-8 flex-1 col-start-1 mt-8"> <h4>Era Digital: Transformasi Bisnis atau Tertinggal</h4> <p>
Transformasi bisnis semakin menjadi kebutuhan perusahaan untuk sukses di era digital. Transformasi digital telah mengubah budaya global, terutama dengan munculnya generasi konsumen yang sangat menyukai  segala sesuatu yang serba digital. Konsumen yang mencari segala sesuatu dan berinteraksi satu sama lain secara digital. Dalam kondisi seperti ini, organisasi harus beradaptasi untuk bisa memenuhi keinginan dan kebutuhan pelanggan serta berbicara dengan bahasa mereka.
</p> </div> <div class="flex flex-col gap-8 flex-1 col-start-2"> <img${addAttribute("../../public/images/content/background-section-image1.png", "src")} alt="A description of my image." class="object-cover w-full h-auto bg-cover rounded-md"> </div> </div> <div class="grid grid-cols-2 grid-flow-col justify-self-center mb-8 gap-16"> <div class="flex flex-col gap-8 flex-1 col-start-1"> <img${addAttribute("../../public/images/content/background-section-image2.png", "src")} alt="A description of my image." class="object-cover w-full h-auto bg-cover rounded-md"> </div> <div class="flex flex-col gap-8 flex-1 col-start-2 mt-8"> <h4>Perjalanan Transformasi Digital: Evolusi Menuju Masa Depan yang Cerah</h4> <p>
Transformasi digital tidak bisa sekali jalan. Organisasi harus mengembangkan mentalitas dan budaya untuk terus mau berkembang, adaptasikan pelayanan dan sistem yang lebih cepat dan lebih sering, kontinu menerapkan teknologi baru untuk memenuhi kebutuhan pelanggan secara lebih baik. Apapun proses transformasi bisnis yang harus dilakukan organisasi, kunci utamanya tetap pada sumber daya manusia yang berkualitas.
</p> </div> </div> <div class="grid grid-cols-2 grid-flow-col justify-self-center content-center place-content-center mb-8 gap-16"> <div class="flex flex-col gap-8 flex-1 col-start-1 mt-8"> <h4>Membangun SDM Unggul: Fondasi Transformasi Digital yang Kokoh</h4> <p>
Manusia merupakan sumber daya terpenting dalam organisasi sekaligus juga sebagai tiang penyangga dalam organisasi, seperti dikemukakan Martin Yates dalam bukunya “Keeping the Best: and Other Thoughts on Building a Super Competitive Workforce”: “The most valuable capital is human capital; the most powerful technology is people”. Sumber daya manusia yang kompeten merupakan asset kritis organisasi dalam melakukan transformasi dan meraih kesuksesan secara berkelanjutan.
</p> </div> <div class="flex flex-col gap-8 flex-1 col-start-2"> <img${addAttribute("../../public/images/content/background-section-image3.png", "src")} alt="A description of my image." class="object-cover w-full h-auto bg-cover rounded-md"> </div> </div> <div class="grid grid-cols-2 grid-flow-col justify-self-center content-center place-content-center gap-16 mb-8"> <div class="flex flex-col gap-8 flex-1 col-start-1"> <img${addAttribute("../../public/images/content/background-section-image4.png", "src")} alt="A description of my image." class="object-cover w-full h-auto bg-cover rounded-md"> </div> <div class="flex flex-col gap-8 flex-1 col-start-2 mt-8"> <h4>MKI Consulting: Solusi Transformasi Bisnis Digital Terpercaya</h4> <p>
PT Manajemen Kinerja Indonesia (MKI Consulting) merupakan perusahaan konsultansi dan training yang akan membantu organisasi dalam melakukan transformasi bisnis dengan sukses. Mulai dari menyusun blueprint transformasi organisasi hingga membantu organisasi melaksanakan transformasi organisasi dan mengembangkan pengetahuan, keahlian, sikap, dan perilaku sumber daya manusia yang tepat sebagai kunci sukses utama dari keberhasilan organisasi.
</p> </div> </div> </div> </div> </section>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Background.astro", void 0);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-white dark:bg-gray-900 bg-banner bg-[50%] bg-cover"> <!-- Backdrop --> <div class="absolute inset-0 bg-black bg-opacity-50 z-0"></div> <!-- Content --> <div class="relative py-24 mx-auto max-w-screen-xl text-left lg:py-44 z-10"> <h1 class="mb-4 text-4xl tracking-tight font-medium leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
Partner in Transformation
</h1> <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
Transformasi bisnis untuk sukses di era digital
</p> <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 text-left justify-start"> <p id="demo" onclick="myFunction()" class="inline-flex justify-center items-center px-5 text-base font-medium text-center text-white rounded-lg bg-primary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 py-5 cursor-pointer">
Mulai Transformasi Anda
</p> </div> </div> </div> `;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Banner.astro", void 0);

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const importAll = async (r) => {
    const imports = Object.keys(r).map((key) => r[key]().then((mod) => mod.default));
    return await Promise.all(imports);
  };
  const images = await importAll(/* #__PURE__ */ Object.assign({"../content/gallery/gallery-activity-1.png": () => import('../chunks/gallery-activity-1_DH28P-80.mjs'),"../content/gallery/gallery-activity-2.png": () => import('../chunks/gallery-activity-2_B5HEtmbk.mjs'),"../content/gallery/gallery-activity-3.png": () => import('../chunks/gallery-activity-3_BScFp2GH.mjs'),"../content/gallery/gallery-activity-4.png": () => import('../chunks/gallery-activity-4_D88F4WsB.mjs'),"../content/gallery/gallery-activity-5.png": () => import('../chunks/gallery-activity-5_CrG-73iC.mjs'),"../content/gallery/gallery-activity-6.png": () => import('../chunks/gallery-activity-6_BoYN_l6g.mjs')}));
  var result = [];
  await Promise.all(images).then((value) => {
    console.log("ada" + value[0].src);
    result = value;
  });
  return renderTemplate`${maybeRenderHead()}<section> <div class="h-auto w-full py-16 text-center"> <div class="flex flex-col gap-8 items-start"> <div class="flex-1 justify-center"> ${renderComponent($$result, "Chip", $$Chip, { "title": "Our Activity", "bgColor": "" })}</div> <div class="flex-1 justify-center"> <h1>Event Gallery</h1> </div> <div class="grid grid-cols-3 gap-4 "> ${result.map((image, index) => renderTemplate`<div class="group transition-all mb-4"> <img${addAttribute(image.src, "src")}${addAttribute(image.height, "height")}${addAttribute(image.width, "width")}${addAttribute(`Gallery Image ${index + 1}`, "alt")} class="rounded-lg transition-all group-hover:shadow-lg group-hover:opacity-90 object-[10%] object-scale-down"> </div>`)} </div> </div> </div> </section>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Gallery.astro", void 0);

const CustomButton = ({ onClick, title, index }) => {
  var indexTab = selectedTab;
  return /* @__PURE__ */ jsx(
    "button",
    {
      id: "demo",
      onClick,
      className: "relative flex h-12 w-auto items-center sm:w-max cursor-pointer hover:text-complementary",
      children: /* @__PURE__ */ jsx("div", { className: `text-base font-semibold text-center min-w-auto ${indexTab.get() !== index ? "text-black" : "text-secondary"}`, children: title })
    }
  );
};

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(selectedTab?.get() ?? "Public Training");
  const handleClick = (index) => {
    selectedTab.set(index);
    setCurrentTab(index);
  };
  const tabs = [
    "Public Training",
    "Learning Services",
    "Assessment Center"
  ];
  return /* @__PURE__ */ jsx("div", { className: "h-auto flex flex-row w-full justify-center", children: tabs.map((value, index) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        id: "demo",
        className: `border-b-4 relative flex-[33%] flex justify-center ${currentTab === index ? "border-secondary text-secondary" : "border-black"} hover:text-complementary`,
        children: /* @__PURE__ */ jsx(CustomButton, { title: value, onClick: () => handleClick(index), index })
      }
    );
  }) });
};

const $$Service = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="h-auto w-full py-8 text-center"> <div class="flex flex-col gap-8"> <div class="flex-1 items-center justify-center"> ${renderComponent($$result, "Chip", $$Chip, { "title": "Services", "bgColor": "" })}</div> <div class="flex-1 items-center justify-center"> <h2>Layanan Kami</h2> </div> ${renderComponent($$result, "Tabs", Tabs, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Tabs.tsx", "client:component-export": "default" })} ${renderComponent($$result, "TrainingList", $$TrainingList, {})} <div class="mr-auto ml-auto"> ${renderComponent($$result, "PrimaryButton", PrimaryButton, { "client:load": true, "title": "Lihat Event Lainnya \u2192", "primary": false, "client:component-hydration": "load", "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Button.tsx", "client:component-export": "PrimaryButton" })} </div> </div> </div> </section>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Service.astro", void 0);

const $$VisionMission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-4"> <div> ${renderComponent($$result, "Chip", $$Chip, { "title": "Visi Kami", "fontSize": 14, "bgColor": "bg-bgLightSkyBlue", "textColor": "text-altPrimary" })} <h3 class="font-normal">“Menjadi Mitra Pilihan Utama Dalam <span class="text-altPrimary bg-bgLightSkyBlue ">Transformasi</span> Organisasi"</h3> </div> <div> ${renderComponent($$result, "Chip", $$Chip, { "title": "Misi Kami", "fontSize": 14, "bgColor": "bg-bgLightSkyBlue", "textColor": "text-altPrimary" })} <h3 class="font-normal">“Membantu Organisasi Bisnis Maupun Pemerintah Dalam Melakukan <span class="text-altPrimary bg-bgLightSkyBlue ">Transformasi</span> Organisasi Dengan Solusi yang Tepat"</h3> </div> </section>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/VisionMission.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Banner", $$Banner, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "VisionMission", $$VisionMission, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Background", $$Background, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "AboutUs", $$AboutUs, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Service", $$Service, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Customers", $$Customers, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Gallery", $$Gallery, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/index.astro", void 0);

const $$file = "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
