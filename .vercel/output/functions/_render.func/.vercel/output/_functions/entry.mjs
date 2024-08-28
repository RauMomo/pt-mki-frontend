import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DmWQ2vk6.mjs';
import { manifest } from './manifest_B5lDJMNs.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/consulting.astro.mjs');
const _page2 = () => import('./pages/contact-us.astro.mjs');
const _page3 = () => import('./pages/our-team.astro.mjs');
const _page4 = () => import('./pages/public-training/_page_.astro.mjs');
const _page5 = () => import('./pages/training/_id_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["../../../.nvm/versions/node/v21.2.0/lib/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/consulting.astro", _page1],
    ["src/pages/contact-us.astro", _page2],
    ["src/pages/our-team.astro", _page3],
    ["src/pages/public-training/[page].astro", _page4],
    ["src/pages/training/[id].astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "95035a17-9e75-4da3-b137-93a3d65a7661",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
