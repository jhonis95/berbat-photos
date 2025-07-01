import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DZ9qs2RM.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/api/landscapeimages.json.astro.mjs');
const _page3 = () => import('./pages/api/myworkimages.json.astro.mjs');
const _page4 = () => import('./pages/api/services.json.astro.mjs');
const _page5 = () => import('./pages/_lang_/_gallery_/_slug_.astro.mjs');
const _page6 = () => import('./pages/_lang_/_slugbooking_.astro.mjs');
const _page7 = () => import('./pages/_lang_/_slugreview_.astro.mjs');
const _page8 = () => import('./pages/_lang_/_slugservices_.astro.mjs');
const _page9 = () => import('./pages/_lang_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin.html", _page1],
    ["src/pages/api/landscapeImages.json.ts", _page2],
    ["src/pages/api/myworkImages.json.ts", _page3],
    ["src/pages/api/services.json.ts", _page4],
    ["src/pages/[lang]/[gallery]/[slug].astro", _page5],
    ["src/pages/[lang]/[slugBooking].astro", _page6],
    ["src/pages/[lang]/[slugReview].astro", _page7],
    ["src/pages/[lang]/[slugServices].astro", _page8],
    ["src/pages/[lang]/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "59a067a3-b72d-48a0-afe9-4da5b4cdbc67"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
