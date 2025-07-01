import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from './astro/server_CboteeAh.mjs';
import 'kleur/colors';
import 'clsx';
import { a as arrowicon } from './Layout_aq5S9g19.mjs';

const $$Astro$1 = createAstro("https://berbatphotos.com");
const $$SelectDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SelectDropdown;
  const { LabelText, Placeholder } = Astro2.props;
  const { lang } = Astro2.params;
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  const language = capitalizeFirstLetter(lang);
  return renderTemplate`${maybeRenderHead()}<div x-data="bookCardData" class="relative"> <label class="text-darker2 text-base italic" for="">${LabelText}</label> <div x-on:click="arrowToggle" class=" flex items-center bg-brighter2 w-full h-[46px] rounded-sm cursor-pointer"> <div class="px-2.5 w-full outline-none flex gap-1.5 text-darker2"> <p x-data x-text="$store.service.shopList.length"></p> <p>${Placeholder}</p> <input type="hidden" name="selected_services"${addAttribute(`$store.service.services${language}`, ":value")}> </div> <img id="bookingCardArrowIcon" class="w-[15px] h-[21px] xl:w-[20px] xl:h-[26px] mx-4"${addAttribute(arrowicon.src, "src")} alt=""> </div> <div x-cloak x-show="dropdownOpen" x-transition class=" z-10 drop-shadow-2xl absolute rounded-sm flex mt-2.5 flex-col bg-brighter2 w-full h-[161px] overflow-y-scroll"> <template x-data${addAttribute(`(group, groupIndex) in $store.service.services${language}`, "x-for")} :key="groupIndex"> <div class="mb-6"> <template x-for="(card, cardIndex) in group" :key="cardIndex"> <div class="mb-4 ml-1 p-2 border-y-2 border-darker1 flex items-center gap-4 drop-shadow-lg"> <input :checked="$store.service.shopList.includes(card.id)" x-on:change="$store.service.handleCheckboxChange(card.id, $event)" class="w-[23px] h-[23px] cursor-pointer" type="checkbox" name="" id=""> <div class=" flex w-full justify-between items-center text-darker2 mr-3"> <div> <h4 class="text-lg font-semibold" x-text="card.title"></h4> <p class="text-sm" x-text="card.content"></p> </div> <p class="text-base font-medium" x-text="card.price"></p> </div> </div> </template> </div> </template> </div> </div>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/selectDropdown.astro", void 0);

const $$Astro = createAstro("https://berbatphotos.com");
const $$Bookingcard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Bookingcard;
  const { Content, Id } = Astro2.props;
  const lang = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(Id, "id")} class=" section w-full flex justify-center items-center"> <div class="flex flex-col md:flex-row gap-9 xl:gap-24 py-3 md:py-0 w-full h-fit md:w-[716px] md:h-[580px] lg:w-[1433px] xl:h-[741px] bg-brighter1 justify-center items-center"> <div class="flex flex-col gap-4 md:gap-7 max-w-[450px] md:max-w-[336px] xl:max-w-[470px] font-lora mx-3 md:mx-0"> <h3 class="text-reddarker text-center md:text-start text-3xl xl:text-5xl italic">${Content.title}</h3> <p class="text-darker2 text-sm xl:text-base text-justify">${Content.description}</p> </div> <form class="flex flex-col gap-5 xl:gap-8 font-lora italic text-base w-[95dvw] max-w-[450px] md:w-[284px] xl:w-[695px]"> <div> <label class="text-darker2 text-base " for="">${Content.label_name}</label> <div class="bg-brighter2 w-full h-[46px] rounded-sm flex justify-center items-center"> <input class=" px-2.5 w-full outline-none" size="16" type="text" name="" id="client_name"> </div> </div> <div> <label class="text-darker2 text-base " for="">${Content.label_email}</label> <div class="bg-brighter2 w-full h-[46px] rounded-sm flex justify-center items-center"> <input class=" px-2.5 w-full outline-none" size="16" type="text" name="" id="client_email"> </div> </div> <div> <label class="text-darker2 text-base " for="">${Content.label_message}</label> <div class="bg-brighter2 w-full h-[101px] rounded-sm"> <textarea class="p-2.5 w-full h-full outline-none resize-none" name="message" id="client_message"></textarea> </div> </div> ${renderComponent($$result, "SelectDropdown", $$SelectDropdown, { "LabelText": Content.label_services, "Placeholder": Content.label_placeholder })} <input id="lang" type="text" class=" hidden"${addAttribute(lang.lang, "value")}> <div class=" font-lora w-full flex justify-center"> <div id="submitform" class="bg-brighter2 flex justify-center items-center rounded-lg w-auto min-w-[223px] h-[46px]"> <button class=" cursor-pointer text-darker2 px-5 text-xl xl:text-2xl not-italic">${Content.button_text}</button> </div> </div> </form> </div> </section>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/bookingcard.astro", void 0);

export { $$Bookingcard as $ };
