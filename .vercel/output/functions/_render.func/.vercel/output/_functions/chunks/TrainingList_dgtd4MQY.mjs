import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro } from './astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { a as apiConfig } from './api_24DmY3bN.mjs';
import { $ as $$TrainingCard } from './TrainingCard_WKMha60-.mjs';

const $$Astro = createAstro();
const $$TrainingList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrainingList;
  var { predefinedTrainingLists } = Astro2.props;
  console.log("predefinedTraining" + predefinedTrainingLists);
  var allTrainingList = [];
  if (predefinedTrainingLists === void 0 || predefinedTrainingLists.length === 0) {
    const response = await fetch(`${apiConfig.baseUrl}/trainings?populate=image`, {
      headers: {
        "Authorization": `Bearer ${apiConfig.lifetimeToken}`,
        "Content-Type": "application/json"
      },
      method: "GET"
    });
    var json = await response.json();
    var jsonTrainingList = json.data.map((value) => {
      var attr = value.attributes;
      var imgUrl = attr.image.data.attributes.formats.small.url;
      console.log(imgUrl);
      return {
        id: value.id,
        title: attr.title,
        description: attr.description,
        category: attr.category,
        image: imgUrl,
        is_online: true,
        date_list: attr.date.all,
        price: {
          price_online: attr.price?.online ?? 0,
          price_offline: attr.price?.offline ?? 0,
          discount: 0
        }
      };
    });
    allTrainingList = jsonTrainingList.slice(0, 10);
  } else {
    allTrainingList = predefinedTrainingLists.map((value) => {
      var attr = value.attributes;
      var imgUrl = attr.image.data.attributes.formats.small.url;
      return {
        id: value.id,
        title: attr.title,
        description: attr.description,
        category: attr.category,
        image: imgUrl,
        is_online: true,
        date_list: attr.date.all,
        price: {
          price_online: attr.price?.online ?? 0,
          price_offline: attr.price?.offline ?? 0,
          discount: 0
        }
      };
    });
    console.log("hah" + predefinedTrainingLists.length);
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex whitespace-nowrap overflow-x-auto"> <div class="flex flex-row gap-8"> ${allTrainingList.map((training) => {
    console.log(training);
    return renderTemplate`${renderComponent($$result, "TrainingCard", $$TrainingCard, { "title": training.title, "bgColor": "bg-bgCardAlt", "body": training.description, "href": "", "image": training.image, "category": training.category, "id": training.id, "onlinePrice": training.price.price_online, "offlinePrice": training.price.price_offline, "isOnline": training.is_online, "date_list": training.date_list })}`;
  })} </div></div>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/TrainingList.astro", void 0);

export { $$TrainingList as $ };
