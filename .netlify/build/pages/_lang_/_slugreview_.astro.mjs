import { c as createAstro, a as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CboteeAh.mjs';
import 'kleur/colors';
import { $ as $$Herosection } from '../../chunks/herosection_UkPBToTZ.mjs';
import { $ as $$Layout, g as getCollection } from '../../chunks/Layout_BcwVWzYi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://berbatphotos.com");
async function getStaticPaths() {
  const reviewPageEnData = await getCollection("review_page_en");
  const reviewPageFrData = await getCollection("review_page_fr");
  const navBarEnData = await getCollection("navigation_bar_en");
  const navBarFrData = await getCollection("navigation_bar_fr");
  const footerEnData = await getCollection("footer_bar_en");
  const footerFrData = await getCollection("footer_bar_fr");
  return [
    {
      params: { lang: "en", slugReview: "review" },
      props: {
        pageData: reviewPageEnData[0].data,
        navBarData: navBarEnData[0].data,
        footerData: footerEnData[0].data
      }
    },
    {
      params: { lang: "fr", slugReview: "revoir" },
      props: {
        pageData: reviewPageFrData[0].data,
        navBarData: navBarFrData[0].data,
        footerData: footerFrData[0].data
      }
    }
  ];
}
const $$slugReview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slugReview;
  const { pageData, navBarData, footerData } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "NavBarData": navBarData, "FootData": footerData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=" flex flex-col gap-12 lg:gap-[90px] items-center"> ${renderComponent($$result2, "Herosection", $$Herosection, { "title": pageData.header.title, "subtitle": pageData.header.subtitle, "image": pageData.header.image })} <section class="bottonToTopAnimation w-full flex justify-center items-center"> <div class="flex flex-col md:flex-row gap-9 xl:gap-24 w-full h-fit bg-brighter1 justify-center items-center py-10"> <div class="flex flex-col gap-4 md:gap-7 max-w-[450px] md:max-w-[336px] xl:max-w-[470px] font-lora mx-3 md:mx-0"> <h3 class="text-reddarker text-center md:text-start text-3xl xl:text-5xl italic">${pageData.review_card.title}</h3> ${pageData.review_card.description.map((content) => {
    return renderTemplate`<p class=" text-darker2 text-sm xl:text-base text-justify">${content.text}</p>`;
  })} </div> <form class="flex flex-col gap-5 xl:gap-8 font-lora italic text-base w-[95dvw] max-w-[450px] md:w-[284px] xl:w-[695px]"> <div> <label class="text-darker2 text-base " for="">${pageData.review_card.label_name}</label> <div class="bg-brighter2 w-full h-[46px] rounded-sm flex justify-center items-center"> <input id="name" class=" px-2.5 w-full outline-none" size="16" type="text" name="name" id=""> </div> </div> <div> <label class="text-darker2 text-base " for="">${pageData.review_card.label_email}</label> <div class="bg-brighter2 w-full h-[46px] rounded-sm flex justify-center items-center"> <input id="reviewEmail" class=" px-2.5 w-full outline-none" size="16" type="text" name="" id="client_email"> </div> </div> <div> <label class="text-darker2 text-base " for="">${pageData.review_card.label_resume}</label> <div class="bg-brighter2 w-full h-[46px] rounded-sm flex justify-center items-center"> <input id="resume" class=" px-2.5 w-full outline-none" size="16" type="text" name="resume" id=""> </div> </div> <div> <label class="text-darker2 text-base " for="">${pageData.review_card.label_message}</label> <div class="bg-brighter2 w-full h-[129px] rounded-sm"> <textarea id="message" class="p-2.5 w-full h-full outline-none resize-none" name="message" id=""></textarea> </div> </div> <div class="font-lora w-full flex justify-center"> <div id="reviewForm" class=" flex justify-center items-center rounded-lg bg-brighter2 w-auto min-w-[223px] h-[46px]"> <button class="cursor-pointer text-darker2 text-xl xl:text-2xl not-italic">${pageData.review_card.button_text}</button> </div> </div> </form> </div> </section> </main> ` })} ${renderScript($$result, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugReview].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugReview].astro", void 0);

const $$file = "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugReview].astro";
const $$url = "/[lang]/[slugReview]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slugReview,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
