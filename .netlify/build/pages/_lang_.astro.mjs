import { c as createAstro, a as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CboteeAh.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_Dr5smhq5.mjs';
import { $ as $$Bookingcard } from '../chunks/bookingcard_BEMs2Kw8.mjs';
import { $ as $$Layout, g as getCollection } from '../chunks/Layout_BcwVWzYi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://berbatphotos.com");
async function getStaticPaths() {
  const homePageEnData = await getCollection("home_page_en");
  const homePageFrData = await getCollection("home_page_fr");
  const navBarEnData = await getCollection("navigation_bar_en");
  const navBarFrData = await getCollection("navigation_bar_fr");
  const footerEnData = await getCollection("footer_bar_en");
  const footerFrData = await getCollection("footer_bar_fr");
  return [
    {
      params: { lang: "en" },
      props: {
        pageData: homePageEnData[0].data,
        navBarData: navBarEnData[0].data,
        footerData: footerEnData[0].data
      }
    },
    {
      params: { lang: "fr" },
      props: {
        pageData: homePageFrData[0].data,
        navBarData: navBarFrData[0].data,
        footerData: footerFrData[0].data
      }
    }
  ];
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { pageData, navBarData, footerData } = Astro2.props;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "NavBarData": navBarData, "FootData": footerData, "pageTitle": lang == "en" ? "Berbat Photos | Professional photographer Hyo Un Berbat based in Roscoff, France" : " Berbat Photos | Photographe professionnel HyoUn bas\xE9 \xE0 Roscoff, France", "pageDescription": lang == "en" ? "Capture unforgettable moments with a professional photographer in Roscoff, France. Specializing in couples, weddings, portraits, and family photography." : "Immortalisez des moments inoubliables avec un photographe professionnel \xE0 Roscoff, en France. Sp\xE9cialis\xE9 dans la photographie de couple, de mariage, de portrait et de famille." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=" flex flex-col items-center gap-12 lg:gap-[90px]"> <section id="heroSection" class=" section relative flex flex-col justify-center items-center"> ${renderComponent($$result2, "Image", $$Image, { "decoding": "async", "fetchpriority": "high", "loading": "lazy", "width": 1920, "height": 1080, "class": "w-full lg:w-[90dvw] max-w-[1677px] h-[405px] sm:h-[90dvh] md:max-h-[550px] lg:max-h-[694px] 2xl:max-h-[977px] lg:rounded-xl object-cover", "src": pageData.header.image, "alt": "page thumnail", "format": "jpeg" })} <div class=" absolute flex flex-col justify-center items-center gap-9 xl:gap-16 font-lora italic"> <p class=" text-brighter2 heroSectionText text-center text-lg sm:text-2xl xl:text-3xl">${pageData.header.subtitle}</p> <h3 class=" text-brighter2 heroSectionText text-center text-2xl sm:text-4xl xl:text-[46px]">${pageData.header.title}</h3> </div> </section> <section id="aboutMeSection" class=" section flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-20 w-[95dvw] max-w-[1038] md:w-[90dvw] lg:w-[80dvw] xl:max-w-[1423px]"> ${renderComponent($$result2, "Image", $$Image, { "class": " w-auto h-auto max-w-[281px] max-h-[279px] xl:max-w-[381px] xl:max-h-[379px] 2xl:max-w-[499px] 2xl:max-h-[497px] rounded-xl object-contain", "src": pageData.about_me_section.image, "alt": lang == "en" ? "Hyo Un Berbat professional photographer" : "Hyo Un Berbat photographe professionnel", "loading": "lazy", "width": 800, "height": 800, "decoding": "async", "format": "webp" })} <div class=" flex flex-col items-center max-w-[745px] gap-3.5 xl:gap-11 2xl:gap-16 font-lora"> <h3 class=" text-reddarker text-center text-2xl xl:text-4xl 2xl:text-[46px] italic">${pageData.about_me_section.title}</h3> <dir> ${pageData.about_me_section.content.map(({ text }) => {
    return renderTemplate`<p class=" text-darker2 text-center text-sm xl:text-lg">${text}</p>`;
  })} </dir> <a class=" bg-brighter1 flex justify-center items-center rounded-lg w-auto h-[46px]"${addAttribute(pageData.about_me_section.button_link, "href")}> <button class="cursor-pointer text-darker2 px-5 text-2xl xl:text-4xl 2xl:text-4xl">${pageData.about_me_section.button_text}</button> </a> </div> </section> <section id="serviceSection" class=" section flex flex-col "> <div class="flex flex-col lg:flex-row gap-11 justify-center items-center lg:gap-5"> ${pageData.services_section.map((service_card, index) => {
    return index % 2 == 1 ? renderTemplate`<div class="serviceCards mx-4 md:mx-0 flex flex-col md:flex-row-reverse lg:flex-col justify-between h-fit gap-3.5 md:gap-5 w-fit lg:w-[327px] 2xl:w-[463px] font-lora"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-auto min-w-[286px] min-h-[267px] max-w-[509px] max-h-[320px] md:max-w-[321px] md:max-h-[316px] lg:max-w-[463px] lg:max-h-[376px] rounded-md object-cover", "src": service_card.image, "alt": lang == "en" ? `professional photos for ${service_card.headline} photo shoot` : `photos professionnelles pour s\xE9ance photo ${service_card.headline}`, "loading": "lazy", "format": "webp", "width": 1920, "height": 1080 })} <div class="flex flex-col gap-3.5 lg:gap-8 max-w-[509px] md:w-[321px] lg:w-full"> <div class="w-full flex flex-col h-fit md:h-[244px] 2xl:h-[174px] gap-3.5 lg:gap-6"> <h4 class="text-reddarker text-2xl sm:text-3xl font-medium italic">${service_card.headline}</h4> <p class="text-darker2 text-justify text-sm sm:text-base">${service_card.description}</p> </div> <div class="font-lora w-full flex justify-center"> <a class="bg-brighter1 flex justify-center items-center rounded-lg min-w-[295px] h-[46px]"${addAttribute(service_card.button_link, "href")}> <button class="cursor-pointer text-darker2 text-2xl px-5 sm:text-3xl xl:text-4xl">${service_card.button_text}</button> </a> </div> </div> </div>` : renderTemplate`<div class="serviceCards mx-4 md:mx-0 flex flex-col md:flex-row lg:flex-col justify-between h-fit gap-3.5 md:gap-5 w-fit lg:w-[327px] 2xl:w-[463px] font-lora"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-auto min-w-[286px] min-h-[267px] max-w-[509px] max-h-[320px] md:max-w-[321px] md:max-h-[316px] lg:max-w-[463px] lg:max-h-[376px] rounded-md object-cover", "src": service_card.image, "alt": lang == "en" ? `professional photos for ${service_card.headline} photo shoot` : `photos professionnelles pour s\xE9ance photo ${service_card.headline}`, "loading": "lazy", "format": "webp", "width": 800, "height": 800 })} <div class="flex flex-col gap-3.5 lg:gap-8 max-w-[509px] md:w-[321px] lg:w-full"> <div class="w-full flex flex-col h-fit md:h-[244px] 2xl:h-[174px] gap-3.5 lg:gap-6"> <h4 class="text-reddarker text-2xl sm:text-3xl font-medium italic">${service_card.headline}</h4> <p class="text-darker2 text-justify text-sm sm:text-base">${service_card.description}</p> </div> <div class="font-lora w-full flex justify-center"> <a class="bg-brighter1 flex justify-center items-center rounded-lg w-auto min-w-[295px] h-[46px]"${addAttribute(service_card.button_link, "href")}> <button class="cursor-pointer text-darker2 text-2xl px-5 sm:text-3xl xl:text-4xl">${service_card.button_text}</button> </a> </div> </div> </div>`;
  })} </div> </section> ${renderComponent($$result2, "Bookingcard", $$Bookingcard, { "Id": "bookingSection", "Content": pageData.booking_section })} <section id="followMeSection" class=" section flex flex-col gap-3.5 lg:gap-8"> <div class="followMeSectionContent flex flex-col gap-3.5 lg:gap-8 items-center font-lora"> <h4 class="text-darker2 text-2xl lg:text-3xl">${pageData.follow_me_section.title}</h4> <a class="text-darker2 text-base lg:text-lg italic"${addAttribute(pageData.follow_me_section.social_media_link, "href")}>${pageData.follow_me_section.social_media_name}</a> </div> <div class="w-auto flex flex-col gap-8 2xl:gap-20 justify-center items-center lg:flex-row px-3"> ${renderComponent($$result2, "Image", $$Image, { "class": " mx-1 rounded-xl min-w-[279px] min-h-[273px] w-full h-auto max-w-[627px] lg:max-w-[529px] lg:max-h-[383px] 2xl:max-w-[711px] 2xl:max-h-[515px] object-cover", "src": pageData.travel_section.image, "alt": "travel_image", "width": "1920", "height": "1080" })} <div class=" font-lora max-w-[627px] lg:max-w-[436px] 2xl:max-w-[555px] w-auto text-darker2"> <div class=" w-full flex flex-col items-start lg:items-end italic"> ${pageData.travel_section.title.map((content) => {
    return renderTemplate`<h3 class="text-3xl 2xl:text-5xl">${content.text}</h3>`;
  })} </div> <div class="flex flex-col items-start lg:items-end"> ${pageData.travel_section.subtitle.map((content) => {
    return renderTemplate`<h6 class="text-xl 2xl:text-2xl">${content.text}</h6>`;
  })} </div> <p class="text-justify mt-4 2xl:mt-7 text-lg"> ${pageData.travel_section.content} </p> <div class="mt-4 2xl:mt-10 flex flex-col gap-3.5 sm:gap-0 sm:flex-row justify-evenly items-center"> <a class=" bg-brighter1 flex justify-center items-center rounded-lg w-fit min-w-[223px] h-[46px]"${addAttribute(pageData.travel_section.button_link, "href")}> <button class="cursor-pointer text-darker2 px-5 text-xl xl:text-2xl 2xl:text-2xl">${pageData.travel_section.button_text}</button> </a> <div class="flex gap-6"> ${navBarData.social_media_section.map((data, index) => {
    return renderTemplate`<a${addAttribute(data.link, "href")} target="_blank" rel="noopener"> ${renderComponent($$result2, "Image", $$Image, { "id": `sm-icon${index}`, "x-on:mouseover": "growText", "x-on:mouseleave": "shrinkText", "class": " w-[30px] h-[30px] 2xl:w-[43px] 2xl:h-[43px] object-contain", "src": data.image, "alt": data.name })} </a>`;
  })} </div> </div> </div> </div> </section> </main> ` })} ${renderScript($$result, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/index.astro", void 0);

const $$file = "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
