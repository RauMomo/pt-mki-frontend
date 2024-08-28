import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from './astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { $ as $$Chip } from './Chip_rLTjdKls.mjs';
import { jsx } from 'react/jsx-runtime';
/* empty css                        */

function formatPrice(number) {
  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}

const Divider = () => {
  return /* @__PURE__ */ jsx("hr", { className: "border-0 my-4 bg-gray-300 min-h-0.5" });
};

const $$Astro = createAstro();
const $$TrainingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrainingCard;
  const { href, title, body, bgColor, image, category, onlinePrice, offlinePrice, isOnline, id, date_list } = Astro2.props;
  const timeDifference = 10;
  var urlImage = `http://0.0.0.0:1337${image}`;
  console.log(urlImage);
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`link-card ${bgColor}`, "class")} data-astro-cid-zuhowx7m> <div class="flex flex-col relative gap-8" data-astro-cid-zuhowx7m> <!-- <div class=\`bg-[url(\${optimizedBackground.src})]\`/> --> <div class="min-h-max" data-astro-cid-zuhowx7m> <img${addAttribute(urlImage, "src")} alt="A description of my image."${addAttribute({ width: "400px", height: "200px", backgroundSize: "cover" }, "style")} class="object-cover rounded-t-xl" data-astro-cid-zuhowx7m> <div class="absolute -translate-y-20 left-0 z-10 mt-6" data-astro-cid-zuhowx7m> <div class="flex flex-row gap-2" data-astro-cid-zuhowx7m> <a class="py-2 px-2 rounded-lg relative flex items-center gap-2" data-astro-cid-zuhowx7m> <div class="bg-bgComplement rounded-xl text-complementary font-normal px-4 py-0.5 leading-2 flex items-center" data-astro-cid-zuhowx7m> ${isOnline ? renderTemplate`<p class="mb-1 flex items-center text-sm" data-astro-cid-zuhowx7m> <span class="px-2 py-[8px] rounded-full bg-complementary align-middle mr-1.5" data-astro-cid-zuhowx7m></span>Online
</p>` : renderTemplate`<p class="bg-bgSecondary text-secondary text-sm" data-astro-cid-zuhowx7m>Offline</p>`} </div> <div class="bg-bgComplement rounded-xl text-complementary font-normal px-4 py-0.5 text-sm leading-2 flex items-center" data-astro-cid-zuhowx7m> <p class="mb-1 text-sm" data-astro-cid-zuhowx7m>${timeDifference} Hari</p> </div> </a> </div> </div> </div> <div class="flex flex-col px-4 justify-start content-start text-left" data-astro-cid-zuhowx7m> <div class="text-left mt-0 -translate-x-4" data-astro-cid-zuhowx7m> ${renderComponent($$result, "Chip", $$Chip, { "title": category, "bgColor": "bg-bgLightSkyBlue", "textColor": "text-secondary", "data-astro-cid-zuhowx7m": true })} </div> <a${addAttribute(`/training/${id}`, "href")} data-astro-cid-zuhowx7m> <h2 class="font-normal mt-0 text-black text-left break-words max-w-full h-24 self-center" data-astro-cid-zuhowx7m> ${title} </h2> </a> ${renderComponent($$result, "Divider", Divider, { "data-astro-cid-zuhowx7m": true })} <div class="mb-4" data-astro-cid-zuhowx7m> <subtitle class="text-dimGray text-base font-extralight opacity-70" data-astro-cid-zuhowx7m>Diselenggarakan oleh:</subtitle> ${date_list.map((value, index) => {
    return renderTemplate`<div class="flex flex-row" data-astro-cid-zuhowx7m> <img${addAttribute("../../public/icons/icon-date.svg", "src")} alt="Date Icon" class="object-cover w-8 h-auto bg-cover rounded-md mr-3" data-astro-cid-zuhowx7m> <p data-astro-cid-zuhowx7m> ${value} </p> </div>`;
  })} </div> <div class="flex flex-col gap-2 mt-4" data-astro-cid-zuhowx7m> <span class="text-[1.25rem] text-primary" data-astro-cid-zuhowx7m><span class="text-dimGray" data-astro-cid-zuhowx7m>Offline:</span> ${formatPrice(offlinePrice)},-</span> <span class="text-[1.25rem] text-primary" data-astro-cid-zuhowx7m><span class="text-dimGray" data-astro-cid-zuhowx7m>Online:</span> ${formatPrice(onlinePrice)},-</span> </div> </div> </div> </li> `;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/TrainingCard.astro", void 0);

export { $$TrainingCard as $, formatPrice as f };
