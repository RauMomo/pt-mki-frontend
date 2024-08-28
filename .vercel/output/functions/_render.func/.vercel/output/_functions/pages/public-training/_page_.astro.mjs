import '../../chunks/consulting.7a7741ac_Blqh4XAA.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent } from '../../chunks/astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_DoFgB1gW.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$TrainingCard } from '../../chunks/TrainingCard_WKMha60-.mjs';
import { a as apiConfig } from '../../chunks/api_24DmY3bN.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DWP4yPAZ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { s as searchParams } from '../../chunks/HomeStore_DyAm_8zC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { length, currentUrl, currentPage, firstUrl, prevUrl, nextUrl, lastUrl, baseUrl } = Astro2.props;
  const paginationList = Array.from({ length: Number(length) }, (_, i) => i + 1);
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Blog pages" class="pagination pagination-default flex flex-row flex-auto justify-center items-center" data-astro-cid-d776pwuy> ${firstUrl == currentUrl ? renderTemplate`<span class="pagination__link disabled" data-astro-cid-d776pwuy> <i class="pi-angle-left" data-astro-cid-d776pwuy></i> <i class="pi-angle-left" data-astro-cid-d776pwuy></i> </span>` : renderTemplate`<a${addAttribute(firstUrl, "href")} class="pagination__link" data-astro-cid-d776pwuy> <i class="pi-angle-left" data-astro-cid-d776pwuy></i> <i class="pi-angle-left" data-astro-cid-d776pwuy></i> </a>`} <!-- Previous page link --> ${prevUrl ? renderTemplate`<button class="pagination_button" data-astro-cid-d776pwuy> <a${addAttribute(prevUrl, "href")} class="pagination__link" data-astro-cid-d776pwuy>
&#x2190; Previous
</a> </button>` : renderTemplate`<button class="pagination_button" data-astro-cid-d776pwuy> <a class="pagination__link disabled" data-astro-cid-d776pwuy>
&#x2190; Previous
</a> </button>`} <!-- Pagination List --> <div class="flex flex-row flex-auto gap-2 mx-4" data-astro-cid-d776pwuy>${paginationList.map((num) => renderTemplate`<div${addAttribute(`rounded-xl w-8 text-center py-2 ${currentPage !== num ? "bg-customWhite" : "bg-primary"}`, "class")} data-astro-cid-d776pwuy> <a${addAttribute(`${num == 1 ? "1" : num}`, "href")}${addAttribute(`pagination__link ${currentPage === num ? "disabled active text-white" : "text-captionText"}`, "class")} data-astro-cid-d776pwuy> ${num} </a> </div>`)} </div> ${nextUrl ? renderTemplate`<button class="pagination_button" data-astro-cid-d776pwuy> <a${addAttribute(nextUrl, "href")} class="pagination__link" data-astro-cid-d776pwuy>
Next &#x2192;
</a> </button>` : renderTemplate`<button class="pagination_button" data-astro-cid-d776pwuy> <a${addAttribute(nextUrl, "href")} class="pagination__link disabled" data-astro-cid-d776pwuy>
Next &#x2192;
</a> </button>`} ${lastUrl == currentUrl ? renderTemplate`<span class="pagination__link disabled" data-astro-cid-d776pwuy> <i class="pi-angle-right" data-astro-cid-d776pwuy></i> <i class="pi-angle-right" data-astro-cid-d776pwuy></i> </span>` : renderTemplate`<a${addAttribute(lastUrl, "href")} class="pagination__link" data-astro-cid-d776pwuy> <i class="pi-angle-right" data-astro-cid-d776pwuy></i> <i class="pi-angle-right" data-astro-cid-d776pwuy></i> </a>`} </nav>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Pagination.astro", void 0);

const Search = () => {
  const handleClick = () => {
    var inputElement = document.getElementById(
      "searchInput"
    );
    const inputValue = inputElement?.value;
    searchParams.set(inputValue);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("query", inputValue || "");
    window.location.search = queryParams.toString();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-1", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-bgCard p-2 rounded-l-lg", children: /* @__PURE__ */ jsx("button", { id: "search", onClick: handleClick, children: /* @__PURE__ */ jsx("img", { src: "../../public/icons/icon-search.svg" }) }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        id: "searchInput",
        placeholder: "Cari di sini...",
        className: "form-control border-dimGray p-2 w-80 rounded-r-lg bg-bgCard focus:outline-none"
      }
    )
  ] });
};

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const response = await fetch(`${apiConfig.baseUrl}/trainings?pagination[pageSize]=1`, {
    headers: {
      Authorization: `Bearer ${apiConfig.lifetimeToken}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  });
  const json = await response.json();
  const totalItems = json.meta.pagination.total;
  const pageSize = 10;
  const totalPages = Math.ceil(totalItems / pageSize);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString(), totalPage: json.meta.pagination.pageCount }
  }));
  return paths;
}
async function get({ params }) {
  const currPage = params.page ? parseInt(params.page, 10) : 1;
  const localQuery = params.query;
  const searchQuery = localQuery ?? "";
  const extraParams = searchQuery.length > 0 ? `&filters[title][$contains]=${searchQuery}` : "";
  const response = await fetch(`${apiConfig.baseUrl}/trainings?populate=image&pagination[page]=${currPage}&pagination[pageSize]=10${extraParams}`, {
    headers: {
      Authorization: `Bearer ${apiConfig.lifetimeToken}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  });
  console.log("response" + response.status);
  console.log("responseUrl" + response.url);
  const json = await response.json();
  const meta = json.meta;
  const totalPage = meta.pagination.pageCount;
  const currentUrl = `${currPage}`;
  const prevUrl = currPage - 1 === 0 ? "" : `${currPage - 1}`;
  const nextUrl = currPage + 1 > totalPage ? "" : `${currPage + 1}`;
  const firstUrl = `1`;
  const lastUrl = `${totalPage}`;
  const baseUrl = ``;
  const jsonTrainingList = json.data.map((value) => {
    const attr = value.attributes;
    const imgUrl = attr.image.data.attributes.formats.small.url;
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
  return {
    props: {
      jsonTrainingList,
      currPage,
      totalPage,
      currentUrl,
      prevUrl,
      nextUrl,
      firstUrl,
      lastUrl,
      baseUrl
    }
  };
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  var { page } = Astro2.params;
  var url = Astro2.request.url;
  var params = url.substring(url.indexOf("=") + 1, url.length);
  var result = await get({ params: {
    page,
    query: params
  } });
  const allTrainingList = result.props.jsonTrainingList;
  const {
    currPage,
    totalPage,
    currentUrl,
    prevUrl,
    nextUrl,
    firstUrl,
    lastUrl,
    baseUrl
  } = result.props;
  const customCrumbs = [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Public Training",
      href: "#",
      title: "Public Training"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Public Training" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col flex-1"> <div class="bg-black bg-cover py-16"> <section> <div class="flex flex-col gap-8 flex-auto"> <div class="w-3/5 flex flex-col p-8 justify-start items-start gap-16"> <h1 class="flex-grow flex items-center justify-center text-white">Public Training</h1> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "customCrumbs": customCrumbs })}</div> </div> </section> </div> <div class="py-8"> <section> <div class="flex flex-col flex-1 gap-4"> <div class="flex flex-row justify-start items-center"> <div class="mr-8">Cari Public Training di sini</div> ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Search", "client:component-export": "Search" })} </div> <div class="grid grid-cols-4 gap-4 grid-rows-1 grid-flow-row"> ${allTrainingList.map((training) => {
    console.log(training);
    return renderTemplate`<div class="m-2"> ${renderComponent($$result2, "TrainingCard", $$TrainingCard, { "title": training.title, "bgColor": "bg-bgCardAlt", "body": training.description, "href": "", "image": training.image, "category": training.category, "id": training.id, "onlinePrice": training.price.price_online, "offlinePrice": training.price.price_offline, "isOnline": training.is_online, "date_list": training.date_list })} </div>`;
  })} </div> <div class="self-center"> ${renderComponent($$result2, "Pagination", $$Pagination, { "length": totalPage, ",": true, "currentUrl": currentUrl, ",": true, "currentPage": currPage, ",": true, "firstUrl": firstUrl, ",": true, "prevUrl": prevUrl, ",": true, "nextUrl": nextUrl, ",": true, "lastUrl": lastUrl, ",": true, "baseUrl": baseUrl })} </div> </div> </section> </div> </div> ` })} `;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/public-training/[page].astro", void 0);

const $$file = "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/public-training/[page].astro";
const $$url = "/public-training/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  get,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
