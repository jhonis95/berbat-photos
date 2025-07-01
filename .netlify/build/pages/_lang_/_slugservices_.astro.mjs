import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_CboteeAh.mjs';
import 'kleur/colors';
import { $ as $$Herosection } from '../../chunks/herosection_UkPBToTZ.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../../chunks/_astro_assets_Dr5smhq5.mjs';
import { c as closeIcon, $ as $$Layout, g as getCollection } from '../../chunks/Layout_BcwVWzYi.mjs';
export { renderers } from '../../renderers.mjs';

const arrowicon = new Proxy({"src":"/_astro/angle-horizon.Bzneoyta.svg","width":10,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/image/angle-horizon.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://berbatphotos.com");
const $$ServiceCardsDesktop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServiceCardsDesktop;
  const { cardData } = Astro2.props;
  const { lang } = Astro2.params;
  let count = 0;
  return renderTemplate`${maybeRenderHead()}<div class="w-fit h-fit flex flex-col gap-12 lg:gap-[90px]"> ${cardData.map((data, index) => {
    return renderTemplate`<div x-data="priceCards"${addAttribute(index % 2 == 0 ? "flex justify-center items-center gap-[50px] serviceCardContainer" : "flex flex-row-reverse justify-center items-center gap-[50px] serviceCardContainer", "class")}> ${renderComponent($$result, "Image", $$Image, { "id": `cardPriceMainImage${index}`, "class": "w-[828px] h-[622px] object-cover transition-discrete duration-700 ease-in-out", "src": data.image, "alt": lang == "en" ? `${data.title} professional picture by hyo un berbat, photographer from Roscoff france` : `photographie professionnelle ${data.title} par hyo un berbat, photographe de Roscoff, france`, "decoding": "async", "loading": "lazy", "format": "webp", "width": 1280, "height": 720 })} <div class="flex flex-col font-lora max-w-[463px] gap-[30px]"> <h4 class="text-reddarker text-3xl italic font-medium">${data.title}</h4> ${data.content.map((paragraph) => {
      return renderTemplate`<p class="text-darker2 text-lg">${paragraph.text}</p>`;
    })} <div class=" flex w-full justify-around items-center text-darker2 text-lg italic"> <div${addAttribute(index, "id")}${addAttribute(`toggleShowDetails(${index})`, "x-on:click")}${addAttribute(index % 2 == 0 ? "cursor-pointer rounded-md flex justify-evenly items-center w-auto min-w-[223px] px-10 py-2.5 bg-brighter1" : "cursor-pointer rounded-md flex flex-row-reverse justify-evenly items-center w-auto min-w-[223px] px-10 py-2.5 bg-brighter1", "class")}> <button${addAttribute(`showDetails?'${data.button_text_open}':'${data.button_text_close}'`, "x-text")}></button> ${renderComponent($$result, "Image", $$Image, { "id": `showBtn${index}`, "class": index % 2 == 0 ? "h-[21]" : "h-[21] rotate-180", "src": arrowicon, "alt": "arrow-icon" })} </div> </div> </div> <div x-transition x-cloak x-show="showDetails" class="w-[415px] max-h-[622px] flex flex-col gap-1.5 overflow-x-hidden overflow-scroll"> ${data.services.map((data2) => {
      return renderTemplate`<div class="flex py-2 flex-col gap-1"> <h3 class="font-lora text-lg text-darker2">${data2.title}</h3> ${data2.cards.map((card) => {
        count = count + 1;
        const cardId = count;
        return renderTemplate`<div class=" w-[401px] rounded-sm bg-brighter1 text-darker2 flex flex-col py-2 justify-center items-center"> ${renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "w-[374px] h-[173px] bg-brighter2 object-cover", "src": card.image, "alt": "service-Image", "loading": "lazy", "format": "webp", "width": 800, "height": 600 })}`} <div class="flex gap-9 justify-evenly items-center w-full"> <div class="flex flex-col gap-2.5 font-lora w-[264px]"> <h4 class="text-lg">${card.title}</h4> <p class="text-sm">${card.content}</p> </div> <p>${`${card.price}`}</p> </div> <div class="w-full flex justify-center font-lora text-lg italic"> <div${addAttribute(`$store.service.shopList.includes(${cardId})`, "x-show")} class="flex gap-3 items-center"> <button class="bg-brighter2 text-primary w-auto h-[36] px-10 py-1.5 rounded-md cursor-pointer"> ${lang == "en" ? "added" : "ajout\xE9"} </button> <div${addAttribute(`$store.service.deleteFromShopList(${cardId})`, "x-on:click")} class="bg-brighter2 flex justify-center items-center rounded-full w-fit h-fit p-3 cursor-pointer"> <img class=" w-[10px] h-[10px] z-30 cursor-pointer"${addAttribute(closeIcon.src, "src")} alt="close icon"> </div> </div> <button${addAttribute(`!$store.service.shopList.includes(${cardId})`, "x-show")} x-data${addAttribute(`$store.service.addToShopList(${cardId})`, "x-on:click")} class="bg-brighter2 text-darker2 w-auto h-[36] px-10 py-1.5 rounded-md cursor-pointer"> ${data2.price_card_button} </button> </div> </div>`;
      })} </div>`;
    })} </div> </div>`;
  })} </div>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/serviceCardsDesktop.astro", void 0);

const $$Astro$2 = createAstro("https://berbatphotos.com");
const $$ServiceCardsMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceCardsMobile;
  const { cardData } = Astro2.props;
  const { lang } = Astro2.params;
  let count = 0;
  return renderTemplate`${maybeRenderHead()}<div class="w-fit h-fit flex flex-col gap-12 lg:gap-[90px]"> ${cardData.map((data, index) => {
    return renderTemplate`<div x-data="priceCards" class="serviceCardContainer flex flex-col justify-center items-center gap-7 mx-2.5"> ${renderComponent($$result, "Image", $$Image, { "id": `cardPriceMainImage${index}`, "class": "w-full max-w-[761px] h-[422px] sm:h-[571px] sm:min-h-[622px] object-cover transition-discrete duration-700 ease-in-out", "src": data.image, "alt": lang == "en" ? `${data.title} professional picture by hyo un berbat, photographer from Roscoff france` : `photographie professionnelle ${data.title} par hyo un berbat, photographe de Roscoff, france`, "loading": "lazy", "format": "webp", "width": 400, "height": 250 })} <div class=" flex flex-col font-lora max-w-[761px] gap-[30px]"> <h4 class="text-reddarker text-3xl italic font-medium">${data.title}</h4> ${data.content.map((paragraph) => {
      return renderTemplate`<p class="text-darker2 text-lg">${paragraph.text}</p>`;
    })} <div class=" flex w-full justify-around items-center text-darker2 text-lg italic"> <div${addAttribute(index, "id")}${addAttribute(`toggleShowDetailsTablet`, "x-on:click")} class="cursor-pointer rounded-md flex justify-evenly items-center w-auto min-w-[223px] px-10 py-2.5 bg-brighter1"> <button${addAttribute(`showDetails?'${data.button_text_open}':'${data.button_text_close}'`, "x-text")}></button> ${renderComponent($$result, "Image", $$Image, { "id": `showBtn${index}`, "class": "h-[21] rotate-90", "src": arrowicon, "alt": "arrow-icon" })} </div> </div> </div> <div x-transition x-cloak x-show="showDetails" x-on:wheel="scrollContainerMobile" class=" w-fit h-[640px] sm:max-w-[630px] sm:max-h-[420px] sm:h-fit flex flex-col sm:flex-row gap-8 overflow-scroll overflow-x-hidden overflow-y-scroll sm:overflow-x-scroll sm:overflow-y-hidden scroll-smooth"> ${data.services.map((data2) => {
      return renderTemplate`<div class="flex flex-col py-2 gap-1"> <h3 class="font-lora text-lg text-darker2">${data2.title}</h3> <div class="flex flex-col sm:flex-row gap-2"> ${data2.cards.map((card) => {
        count = count + 1;
        const cardId = count;
        return renderTemplate`<div class=" w-fit h-fit rounded-sm bg-brighter1 text-darker2 flex flex-col gap-1 p-2 sm:justify-center sm:items-center"> ${renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "w-[75dvw] h-[40dvw] min-w-[318px] min-h-[150px] sm:w-[318px] sm:h-[150px] bg-brighter2 object-cover", "src": card.image, "alt": "service-Image", "loading": "lazy", "format": "webp", "width": 400, "height": 250 })}`} <div class="flex gap-2.5 justify-between items-start w-full sm:max-w-[318px]"> <div class="flex flex-col gap-1 text-justify font-lora w-fit"> <h4 class="text-lg">${card.title}</h4> <p class="text-sm h-[40px]">${card.content}</p> </div> <p>${`${card.price}`}</p> </div> <div class="w-full flex justify-center font-lora text-lg italic"> <div${addAttribute(`$store.service.shopList.includes(${cardId})`, "x-show")} class="flex gap-3 items-center"> <button class="bg-brighter2 text-primary w-auto h-[36] px-10 py-1.5 rounded-md cursor-pointer"> ${lang == "en" ? "added" : "ajout\xE9"} </button> <div${addAttribute(`$store.service.deleteFromShopList(${cardId})`, "x-on:click")} class="bg-brighter2 flex justify-center items-center rounded-full w-fit h-fit p-3 cursor-pointer"> <img class=" w-[10px] h-[10px] z-30 cursor-pointer"${addAttribute(closeIcon.src, "src")} alt="close icon"> </div> </div> <button${addAttribute(`!$store.service.shopList.includes(${cardId})`, "x-show")} x-data${addAttribute(`$store.service.addToShopList(${cardId})`, "x-on:click")} class="bg-brighter2 text-darker2 w-auto h-[36] px-10 py-1.5 rounded-md cursor-pointer"> ${data2.price_card_button} </button> </div> </div>`;
      })} </div> </div>`;
    })} </div> </div>`;
  })} </div>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/serviceCardsMobile.astro", void 0);

const $$Astro$1 = createAstro("https://berbatphotos.com");
const $$ServiceCardsTablet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCardsTablet;
  const { lang } = Astro2.params;
  const { cardData } = Astro2.props;
  let count = 0;
  return renderTemplate`${maybeRenderHead()}<div class="w-fit h-fit flex flex-col gap-12 lg:gap-[90px]"> ${cardData.map((data, index) => {
    return renderTemplate`<div x-data="priceCards" class="serviceCardContainer flex flex-col justify-center items-center gap-7 mx-2.5"> ${renderComponent($$result, "Image", $$Image, { "id": `cardPriceMainImage${index}`, "class": "w-full h-full max-w-[761px] max-h-[622px] object-cover transition-discrete duration-700 ease-in-out", "src": data.image, "alt": lang == "en" ? `${data.title} professional picture by hyo un berbat, photographer from Roscoff france` : `photographie professionnelle ${data.title} par hyo un berbat, photographe de Roscoff, france`, "decoding": "async", "loading": "lazy", "format": "webp", "width": 800, "height": 600 })} <div class=" flex flex-col font-lora max-w-[761px] gap-[30px]"> <h4 class="text-reddarker text-3xl italic font-medium">${data.title}</h4> ${data.content.map((paragraph) => {
      return renderTemplate`<p class="text-darker2 text-lg">${paragraph.text}</p>`;
    })} <div class=" flex w-full justify-around items-center text-darker2 text-lg italic"> <div${addAttribute(index, "id")}${addAttribute(`toggleShowDetailsTablet`, "x-on:click")} class="cursor-pointer rounded-md flex justify-evenly items-center w-auto min-w-[223px] px-10 py-2.5 bg-brighter1"> <button class=" px-5"${addAttribute(`showDetails?'${data.button_text_open}':'${data.button_text_close}'`, "x-text")}></button> ${renderComponent($$result, "Image", $$Image, { "id": `showBtn${index}`, "class": "h-[21] rotate-90", "src": arrowicon, "alt": "arrow-icon" })} </div> </div> </div> <div x-transition x-cloak x-show="showDetails" x-on:wheel="scrollContainer" class="w-fit max-w-[680px] h-fit flex gap-8 overflow-scroll overflow-y-hidden scroll-smooth"> ${data.services.map((data2) => {
      return renderTemplate`<div class="flex flex-col py-2 gap-1"> <h3 class="font-lora text-lg text-darker2">${data2.title}</h3> <div class="flex gap-2"> ${data2.cards.map((card) => {
        count = count + 1;
        const cardId = count;
        return renderTemplate`<div class=" w-[346px] h-fit rounded-sm bg-brighter1 text-darker2 flex flex-col gap-1 p-2 justify-center items-center"> ${renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "w-[318px] h-[150px] bg-brighter2 object-cover", "src": card.image, "alt": "service-Image", "loading": "lazy", "format": "webp", "width": 800, "height": 600 })}`} <div class="flex gap-2.5 justify-between items-start w-full max-w-[318px]"> <div class="flex flex-col gap-1 text-justify font-lora w-fit"> <h4 class="text-lg">${card.title}</h4> <p class="text-sm h-[40px]">${card.content}</p> </div> <p>${`${card.price}`}</p> </div> <div class="w-full flex justify-center font-lora text-lg italic"> <div${addAttribute(`$store.service.shopList.includes(${cardId})`, "x-show")} class="flex gap-3 items-center"> <button class="bg-brighter2 text-primary w-auto h-[36] px-10 py-1.5 rounded-md cursor-pointer"> ${lang == "en" ? "added" : "ajout\xE9"} </button> <div${addAttribute(`$store.service.deleteFromShopList(${cardId})`, "x-on:click")} class="bg-brighter2 flex justify-center items-center rounded-full w-fit h-fit p-3 cursor-pointer"> <img class=" w-[10px] h-[10px] z-30 cursor-pointer"${addAttribute(closeIcon.src, "src")} alt="close icon"> </div> </div> <button${addAttribute(`!$store.service.shopList.includes(${cardId})`, "x-show")} x-data${addAttribute(`$store.service.addToShopList(${cardId})`, "x-on:click")} class="bg-brighter2 text-darker2 w-auto h-[36] px-10 py-1.5 rounded-md cursor-pointer"> ${data2.price_card_button} </button> </div> </div>`;
      })} </div> </div>`;
    })} </div> </div>`;
  })} </div>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/serviceCardsTablet.astro", void 0);

const $$Astro = createAstro("https://berbatphotos.com");
async function getStaticPaths() {
  const servicesPageEnData = await getCollection("service_page_en");
  const servicesPageFrData = await getCollection("service_page_fr");
  const navBarEnData = await getCollection("navigation_bar_en");
  const navBarFrData = await getCollection("navigation_bar_fr");
  const footerEnData = await getCollection("footer_bar_en");
  const footerFrData = await getCollection("footer_bar_fr");
  return [
    {
      params: { lang: "en", slugServices: "service" },
      props: {
        pageData: servicesPageEnData[0].data,
        navBarData: navBarEnData[0].data,
        footerData: footerEnData[0].data
      }
    },
    {
      params: { lang: "fr", slugServices: "service" },
      props: {
        pageData: servicesPageFrData[0].data,
        navBarData: navBarFrData[0].data,
        footerData: footerFrData[0].data
      }
    }
  ];
}
const $$slugServices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slugServices;
  const { pageData, navBarData, footerData } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "NavBarData": navBarData, "FootData": footerData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=" flex flex-col gap-12 lg:gap-[90px] items-center" x-data x-init="$store.display.setCardsDisplay()" @resize.window.debounce="$store.display.setCardsDisplay()"> ${renderComponent($$result2, "Herosection", $$Herosection, { "title": pageData.header.title, "subtitle": pageData.header.subtitle, "image": pageData.header.image })} <h3 class="sectionTitle text-darker2 w-full max-w-[617px] text-center font-lora italic text-3xl sm:text-4xl lg:text-5xl">${pageData.services_section.title}</h3> <template x-data x-if="$store.display.serviceCardsDisplay=='desktop'"> ${renderComponent($$result2, "ServiceCardsDesktop", $$ServiceCardsDesktop, { "cardData": pageData.services_section.services_cards })} </template> <template x-data x-if="$store.display.serviceCardsDisplay=='tablet'"> ${renderComponent($$result2, "ServiceCardsTablet", $$ServiceCardsTablet, { "cardData": pageData.services_section.services_cards })} </template> <template x-data x-if="$store.display.serviceCardsDisplay=='mobile'"> ${renderComponent($$result2, "ServiceCardsMobile", $$ServiceCardsMobile, { "cardData": pageData.services_section.services_cards })} </template> </main> ` })}`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugServices].astro", void 0);

const $$file = "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugServices].astro";
const $$url = "/[lang]/[slugServices]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slugServices,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
