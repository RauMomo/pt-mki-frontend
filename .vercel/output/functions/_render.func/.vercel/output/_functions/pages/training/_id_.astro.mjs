import '../../chunks/consulting.7a7741ac_Blqh4XAA.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, b as addAttribute } from '../../chunks/astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_DoFgB1gW.mjs';
import { a as apiConfig } from '../../chunks/api_24DmY3bN.mjs';
import { $ as $$Chip } from '../../chunks/Chip_rLTjdKls.mjs';
import { $ as $$TrainingList } from '../../chunks/TrainingList_dgtd4MQY.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DWP4yPAZ.mjs';
import { f as formatPrice } from '../../chunks/TrainingCard_WKMha60-.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
async function fetchOtherTrainingSuggestions(params) {
  const res = await fetch(
    `${apiConfig.baseUrl}/trainings?pagination[page]=1&pagination[pageSize]=10&filters[id][$ne]=${params}&populate[image]=*`,
    {
      headers: {
        "Authorization": `Bearer ${apiConfig.lifetimeToken}`,
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  );
  const training = await res.json();
  const data = training.data;
  return {
    props: { data }
  };
}
const $$OtherTrainings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OtherTrainings;
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  var { id } = Astro2.params;
  const resp = await fetchOtherTrainingSuggestions(id);
  const trainingSuggestions = resp.props.data;
  var randomizedTrainingSuggestions = shuffleArray(trainingSuggestions);
  console.log(randomizedTrainingSuggestions.length);
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex flex-col gap-8 h-full py-16 justify-center items-start"> ${renderComponent($$result, "Chip", $$Chip, { "title": "Pelatihan", "fontSize": 10 })} <h1 class="font-semibold text-3xl">Pelatihan Lainnya </h1> <div class="whitespace-nowrap overflow-y-auto w-full"> ${renderComponent($$result, "TrainingList", $$TrainingList, { "predefinedTrainingLists": randomizedTrainingSuggestions })} </div> </div> </section>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/OtherTrainings.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await fetch(`${apiConfig.baseUrl}/trainings`, {
    headers: {
      "Authorization": `Bearer ${apiConfig.lifetimeToken}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  });
  const json = await res.json();
  const trainings = json.data;
  const paths = trainings.map((training) => ({
    params: { id: training.id.toString(), fallback: "blocking" }
  }));
  return paths;
}
async function fetchTraining(params) {
  const res = await fetch(
    `${apiConfig.baseUrl}/trainings/${params}?populate[profiles][populate]=image&populate[image]=*&populate[outlines]=*&populate[flyer]=*`,
    {
      headers: {
        "Authorization": `Bearer ${apiConfig.lifetimeToken}`,
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  );
  const training = await res.json();
  const data = training.data;
  return {
    props: { data }
  };
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const training = await fetchTraining(id);
  const allImages = training.props.data.attributes.image;
  var urlImage = `http://0.0.0.0:1337${allImages.data.attributes.url}`;
  var trainingInfo = training.props.data;
  var listFacilitators = training.props.data.attributes.profiles.data.map((profile) => {
    var largeImageUrl = `http://0.0.0.0:1337${profile.attributes.image.data.attributes.url}` ?? "";
    var smallImageUrl = `http://0.0.0.0:1337${profile.attributes.image.data.attributes.formats.small.url}` ?? "";
    var facilitator = {
      description: profile.attributes.description,
      image: smallImageUrl,
      largeImage: largeImageUrl,
      name: profile.attributes.name,
      role: profile.attributes.role
    };
    return facilitator;
  });
  trainingInfo.attributes.outlines.map((value) => {
    return value.outline;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Training Info", "data-astro-cid-sbe4tmfz": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8" data-astro-cid-sbe4tmfz><div class="h-100 bg-bgSecondary w-full flex flex-row flex-auto p-8" data-astro-cid-sbe4tmfz><div class="w-3/5 flex flex-col p-16 ml-28" data-astro-cid-sbe4tmfz><div class="translate-x-8" data-astro-cid-sbe4tmfz>${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "title": trainingInfo.attributes.title, "isArrow": false, "data-astro-cid-sbe4tmfz": true })}</div><h1 class="flex-grow flex items-center justify-center p-8" data-astro-cid-sbe4tmfz>${trainingInfo.attributes.title}</h1></div><div class="w-2/5 flex flex-col justify-center items-center" data-astro-cid-sbe4tmfz><img${addAttribute(urlImage, "src")} alt="A description of my image."${addAttribute({ width: "600px", height: "auto", backgroundSize: "cover", borderRadius: "16px" }, "style")} class="object-cover" data-astro-cid-sbe4tmfz></div></div><section data-astro-cid-sbe4tmfz><div class="flex flex-row" data-astro-cid-sbe4tmfz><div class="flex flex-col flex-1 flex-grow" data-astro-cid-sbe4tmfz><div class="w-4/5" data-astro-cid-sbe4tmfz><article data-astro-cid-sbe4tmfz><h3 data-astro-cid-sbe4tmfz>Deskripsi Pelatihan</h3><br data-astro-cid-sbe4tmfz><p data-astro-cid-sbe4tmfz>${trainingInfo.attributes.description}</p></article><article class="mt-12" data-astro-cid-sbe4tmfz><h3 data-astro-cid-sbe4tmfz>Proses Pelatihan dan Sertifikasi</h3><br data-astro-cid-sbe4tmfz><p data-astro-cid-sbe4tmfz>${trainingInfo.attributes.explanation}</p></article><article class="mt-12 bg-bgLightSkyBlue p-8" data-astro-cid-sbe4tmfz><h3 class="text-complementary font-normal" data-astro-cid-sbe4tmfz>Outline Materi</h3><br data-astro-cid-sbe4tmfz><div class="px-2" data-astro-cid-sbe4tmfz>${trainingInfo.attributes.outlines.map((value, index) => {
    return renderTemplate`<p data-astro-cid-sbe4tmfz>${index + 1}. ${value.outline}</p>`;
  })}</div><p class="italic text-complementary mt-2" data-astro-cid-sbe4tmfz><b class="text-complementary font-bold" data-astro-cid-sbe4tmfz>Note: </b>Fasilitator akan membimbing penyiapan dan penyaringan evidence (portofolio)
</p></article><article class="mt-12" data-astro-cid-sbe4tmfz><h3 data-astro-cid-sbe4tmfz>Fasilitator</h3><br data-astro-cid-sbe4tmfz><div class="flex flex-row gap-16" data-astro-cid-sbe4tmfz>${listFacilitators.map((profile) => {
    return renderTemplate`<div class="flex flex-col gap-8" data-astro-cid-sbe4tmfz><a href="https://twitter.com/twcloudchen" class="circle" data-astro-cid-sbe4tmfz><img height="128" width="128"${addAttribute(profile.image, "src")}${addAttribute(profile.name, "alt")} data-astro-cid-sbe4tmfz></a><div class="relative flex-grow flex flex-col gap-4" data-astro-cid-sbe4tmfz><h4 data-astro-cid-sbe4tmfz>${profile.name}</h4><subtitle data-astro-cid-sbe4tmfz>${profile.role}</subtitle><a href="" data-astro-cid-sbe4tmfz>Preview Profil</a></div></div>`;
  })}</div></article><article class="mt-12" data-astro-cid-sbe4tmfz><h3 data-astro-cid-sbe4tmfz>Biaya Investasi</h3><br data-astro-cid-sbe4tmfz><div class="flex flex-col gap-8" data-astro-cid-sbe4tmfz><div class="flex flex-col gap-3" data-astro-cid-sbe4tmfz><h5 data-astro-cid-sbe4tmfz>Offline + Bimbingan Portofolio Online 1 x</h5><div class="subtitle-alt" data-astro-cid-sbe4tmfz>Sudah termasuk PPN, materi pelatihan, goodie bag, sertifikat kepersertaan, dan biaya ujian sertifikasi</div><div data-astro-cid-sbe4tmfz><span class="font-semibold text-primary text-2xl" data-astro-cid-sbe4tmfz>${formatPrice(trainingInfo.attributes.price.offline ?? 0)},-</span> /peserta</div></div><div class="flex flex-col gap-3" data-astro-cid-sbe4tmfz><h5 data-astro-cid-sbe4tmfz>Online + Bimbingan Portofolio Online 1 x</h5><div class="subtitle-alt" data-astro-cid-sbe4tmfz>Sudah termasuk PPN, materi pelatihan, goodie bag, sertifikat kepersertaan, dan biaya ujian sertifikasi</div><div data-astro-cid-sbe4tmfz><span class="font-semibold text-primary text-2xl" data-astro-cid-sbe4tmfz>${formatPrice(trainingInfo.attributes.price.online ?? 0)},-</span> /peserta</div></div></div></article></div></div><div class="w-2/5 flex flex-col h-auto mb-auto pb-4 box-border justify-start items-center bg-bgCard text-white text-start rounded-xl" data-astro-cid-sbe4tmfz><div class="bg-secondary w-full p-6 rounded-t-xl flex flex-col gap-4" data-astro-cid-sbe4tmfz><div class="text-sm" data-astro-cid-sbe4tmfz>${trainingInfo.attributes.category}</div><h5 class="text-2xl" data-astro-cid-sbe4tmfz>Deskripsi Program</h5></div><div class="text-black" data-astro-cid-sbe4tmfz><div class="p-6 rounded-t-xl flex flex-row gap-4 flex-shrink min-w-10 items-center" data-astro-cid-sbe4tmfz><div class="flex flex-col basis-20" data-astro-cid-sbe4tmfz><img src="../../../public/icons/program/icon-type.png" data-astro-cid-sbe4tmfz></div><div class="flex flex-col gap-2" data-astro-cid-sbe4tmfz><subtitle class="text-sm" data-astro-cid-sbe4tmfz>Tipe Kelas</subtitle><h4 data-astro-cid-sbe4tmfz>Online & Offline</h4></div></div><div class="p-6 rounded-t-xl flex flex-row gap-4 flex-shrink min-w-10 items-start" data-astro-cid-sbe4tmfz><div class="flex flex-col basis-20" data-astro-cid-sbe4tmfz><img src="../../../public/icons/program/icon-date-alt.png" data-astro-cid-sbe4tmfz></div><div class="flex flex-col gap-2" data-astro-cid-sbe4tmfz><subtitle class="text-sm" data-astro-cid-sbe4tmfz>Diselenggarakan Pada</subtitle>${trainingInfo.attributes.date.all.map((value, index) => {
    return renderTemplate`<h4 data-astro-cid-sbe4tmfz>${value}</h4>`;
  })}</div></div><div class="p-6 rounded-t-xl flex flex-row gap-4 flex-shrink min-w-10 items-start" data-astro-cid-sbe4tmfz><div class="flex flex-col basis-20" data-astro-cid-sbe4tmfz><img src="../../../public/icons/program/icon-price.png" data-astro-cid-sbe4tmfz></div><div class="flex flex-col gap-2" data-astro-cid-sbe4tmfz><subtitle class="text-sm" data-astro-cid-sbe4tmfz>Harga / Peserta</subtitle><div class="block relative" data-astro-cid-sbe4tmfz><h5 data-astro-cid-sbe4tmfz>
Online:
</h5><h4 data-astro-cid-sbe4tmfz>${formatPrice(trainingInfo.attributes.price.online ?? 0)},-
</h4></div><div class="block relative" data-astro-cid-sbe4tmfz><h5 data-astro-cid-sbe4tmfz>
Offline:
</h5><h4 data-astro-cid-sbe4tmfz>${formatPrice(trainingInfo.attributes.price.offline ?? 0)},-
</h4></div></div></div><div class="flex flex-auto flex-col gap-4 mt-8" data-astro-cid-sbe4tmfz>${renderComponent($$result2, "PrimaryButton", null, { "client:only": "react", "title": "Download Flyer", "primary": false, "icon": "../../../public/icons/icon-download.png", "action": "downloadFile", "params": {
    "url": `${apiConfig.fileBaseUrl}${trainingInfo?.attributes.flyer.data.attributes.url}`,
    "title": trainingInfo?.attributes.title
  }, "client:component-hydration": "only", "data-astro-cid-sbe4tmfz": true, "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Button.tsx", "client:component-export": "PrimaryButton" })}${renderComponent($$result2, "PrimaryButton", null, { "client:only": "react", "title": "Hubungi Kami", "primary": true, "icon": "../../../public/icons/icon-message.png", "action": "contactWhatsapp", "params": { "title": trainingInfo.attributes.title }, "client:component-hydration": "only", "data-astro-cid-sbe4tmfz": true, "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Button.tsx", "client:component-export": "PrimaryButton" })}</div></div></div></div></section></div>${renderComponent($$result2, "OtherTrainings", $$OtherTrainings, { "data-astro-cid-sbe4tmfz": true })}` })}`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/training/[id].astro", void 0);

const $$file = "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/training/[id].astro";
const $$url = "/training/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  fetchTraining,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
