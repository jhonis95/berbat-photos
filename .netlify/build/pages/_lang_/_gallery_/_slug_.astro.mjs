import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CboteeAh.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getCollection } from '../../../chunks/Layout_aq5S9g19.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://berbatphotos.com");
async function getStaticPaths() {
  const galeryPageEnData = await getCollection("gallery_page_en");
  const galeryPageFrData = await getCollection("gallery_page_fr");
  const navBarEnData = await getCollection("navigation_bar_en");
  const navBarFrData = await getCollection("navigation_bar_fr");
  const footerEnData = await getCollection("footer_bar_en");
  const footerFrData = await getCollection("footer_bar_fr");
  return [
    {
      params: { lang: "en", gallery: "gallery", slug: "my-work" },
      props: {
        pageData: galeryPageEnData[1].data,
        navBarData: navBarEnData[0].data,
        footerData: footerEnData[0].data,
        gallery: "mywork"
      }
    },
    {
      params: { lang: "en", gallery: "gallery", slug: "landscape" },
      props: {
        pageData: galeryPageEnData[0].data,
        navBarData: navBarEnData[0].data,
        footerData: footerEnData[0].data,
        gallery: "landscape"
      }
    },
    {
      params: { lang: "fr", gallery: "galerie", slug: "mon-travail" },
      props: {
        pageData: galeryPageFrData[1].data,
        navBarData: navBarFrData[0].data,
        footerData: footerFrData[0].data,
        gallery: "mywork"
      }
    },
    {
      params: { lang: "fr", gallery: "galerie", slug: "paysage" },
      props: {
        pageData: galeryPageFrData[0].data,
        navBarData: navBarFrData[0].data,
        footerData: footerFrData[0].data,
        gallery: "landscape"
      }
    }
  ];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { pageData, navBarData, footerData, gallery } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "NavBarData": navBarData, "FootData": footerData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="bottonToTopAnimation flex flex-col justify-center items-center w-full my-5 sm:my-9 gap-5 font-lora text-darker2"> <h1 class=" text-center text-2xl md:text-4xl xl:text-5xl">${pageData.header.title}</h1> <h2 class="text-center text-lg md:text-2xl xl:text-3xl">${pageData.header.subtitle}</h2> <p class="text-center text-lg md:text-2xl xl:text-3xl">${pageData.gallery_name}</p> </header> <main> <section class="flex w-full justify-center gap-2"> <div x-data="gallery"${addAttribute(`fetchGalleryImages('${gallery}')`, "x-init")} class="flex w-full justify-center"> <div x-cloak x-transition x-show="isLoading" class="flex flex-wrap gap-2 mx-4 w-full max-w-[95dvw] 2xl:max-w-[1538px] justify-center"> <template x-for="n in 6" :key="n"> <div class="animate-pulse bg-gray-300 min-h-[146px] min-w-[150px] h-[45vw] w-[44vw] sm:h-[27vw] sm:w-[26vw] flex justify-center items-center"> <svg class="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round"></path> </svg> </div> </template> </div> <div x-cloak x-transition:enter="transform transition duration-500 ease-[cubic-bezier(0.250,0.460,0.450,0.940)]" x-transition:enter-start="scale-50 opacity-0" x-transition:enter-end="scale-100 opacity-100" x-transition:leave="transform transition duration-300 ease-in" x-transition:leave-start="scale-100 opacity-100" x-transition:leave-end="scale-50 opacity-0" x-show="!isLoading" class="flex flex-wrap gap-2 mx-4 w-full max-w-[95dvw] 2xl:max-w-[1438px] justify-center"> <template x-for="image in images" :key="image.public_id"> <div class="grow min-w-0 min-h-[146px] h-[168px] sm:h-[300px] lg:h-[450px] overflow-hidden"> <picture class="imageContainer w-full h-full flex"> <source x-bind:srcset="image.webpUrl" type="image/webp"> <img x-on:click="handleModal" loading="lazy" x-bind:src="image.webpUrl" role="presentation" sizes="(max-width: 640px) 168px, (max-width: 1024px) 300px, 450px" :srcset="\`\${image.url.replace('/upload/', '/upload/w_400,f_auto,q_auto/')} 400w,\${image.url.replace('/upload/', '/upload/w_800,f_auto,q_auto/')} 800w,\${image.url.replace('/upload/', '/upload/w_1200,f_auto,q_auto/')} 1200w\`" class=" rounded-lg h-auto w-auto object-cover flex-grow basis-0 min-w-0"> </picture> </div> </template> </div> <div id="modalContainer" class=" fixed inset-0 z-40 flex justify-center items-center" x-show="showModal"> <div id="modalOverlay" x-cloak x-transition x-on:click="showModal = false" class="absolute inset-0 bg-gray-400 opacity-75"></div> <img id="modalImage" x-cloak x-transition class="z-50 max-h-[80vh] w-auto rounded-lg shadow-lg" x-bind:src="modalImage" alt="" x-on:click.stop> </div> </div> </section> </main> ` })}`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[gallery]/[slug].astro", void 0);

const $$file = "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[gallery]/[slug].astro";
const $$url = "/[lang]/[gallery]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
