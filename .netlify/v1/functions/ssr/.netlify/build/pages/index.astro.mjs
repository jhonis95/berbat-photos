import { a as createComponent, d as addAttribute, b as renderTemplate } from '../chunks/astro/server_CboteeAh.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const defaultLang = "fr";
  const url = `/${defaultLang}/`;
  if (typeof window !== "undefined") {
    window.location.href = url;
  }
  return renderTemplate`<meta http-equiv="refresh"${addAttribute(`0; url=${url}`, "content")}>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/index.astro", void 0);

const $$file = "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
