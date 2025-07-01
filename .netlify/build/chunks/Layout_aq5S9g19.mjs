import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, e as renderScript, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, i as renderHead, j as renderSlot } from './astro/server_CboteeAh.mjs';
import 'kleur/colors';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, V as VALID_INPUT_FORMATS, a as getImage } from './_astro_assets_Dr5smhq5.mjs';
import 'clsx';
/* empty css                          */
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z, ZodIssueCode } from 'zod';
import * as devalue from 'devalue';

const logo$1 = new Proxy({"src":"/_astro/logoDesktop.DPGc2aep.svg","width":470,"height":131,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/image/logoDesktop.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$b = createAstro("https://berbatphotos.com");
const $$FooterDesktop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$FooterDesktop;
  const { Data } = Astro2.props;
  const { lang } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section x-data="footerData" class=" flex justify-evenly lg:justify-between items-center w-[1000px] mx-10 max-w-[1920px] font-lora"> <div class="flex flex-col items-center gap-2.5 lg:gap-[30px] h-[148px] lg:h-[200px]"> <h5 class="text-darker2 text-lg lg:text-2xl">${Data.social_media_section.section_title}</h5> <div class=" flex gap-7"> ${Data.social_media_section.social_media.map((sm, index) => {
    return renderTemplate`<a${addAttribute(sm.link, "href")} target="_blank" rel="noopener"> ${renderComponent($$result, "Image", $$Image, { "id": `sm${index}`, "x-on:mouseover": "grow", "x-on:mouseleave": "shrink", "class": " cursor-pointer w-[26px] h-[26px] lg:w-[43px] lg:h-[43px]", "src": sm.image, "alt": sm.name })} </a>`;
  })} </div> </div> <div class=" flex flex-col items-center gap-4 lg:gap-[30px]"> <a${addAttribute(`/${lang}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "w-[189px] h-[45px] object-fill", "src": logo$1, "alt": "berbet photos logo" })} </a> <a id="instagamLink" x-on:mouseover="grow" x-on:mouseleave="shrink" class="text-darker2 text-lg italic"${addAttribute(Data.social_media_section.social_media_link, "href")}>${Data.social_media_section.intagram_name}</a> </div> <div class=" flex flex-col items-center font-lora gap-4 lg:gap-6"> <h5 class="text-darker2 text-lg lg:text-2xl">${Data.social_media_section.navigation_title}</h5> <div class="flex flex-col items-center gap-3 lg:gap-[30px]"> ${Data.social_media_section.navigation_pages.map((page, index) => {
    return renderTemplate`<a${addAttribute(`navpage${index}`, "id")} x-on:mouseover="grow" x-on:mouseleave="shrink"${addAttribute(page.link, "href")} class="text-darker2 text-base lg:text-lg">${page.page}</a>`;
  })} </div> </div> </section>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/footerDesktop.astro", void 0);

const logo = new Proxy({"src":"/_astro/logoMobile.DGK4P8HA.svg","width":520,"height":140,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/image/logoMobile.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$a = createAstro("https://berbatphotos.com");
const $$FooterMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FooterMobile;
  const { Data } = Astro2.props;
  const { lang } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section x-data="footerData" class=" flex flex-col justify-evenly items-center m-5 gap-8 font-lora"> <div class=" flex flex-col items-center gap-2.5"> <a${addAttribute(`/${lang}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "w-[169px] h-[40px]", "src": logo, "alt": "Berbat Photos logo" })} </a> <a id="instagamLink" x-on:mouseover="grow" x-on:mouseleave="shrink" class="text-darker2 text-lg italic"${addAttribute(Data.social_media_section.social_media_link, "href")}>${Data.social_media_section.intagram_name}</a> </div> <div class=" flex flex-col items-center font-lora gap-4 lg:gap-6"> <h5 class="text-darker2 text-lg lg:text-2xl">${Data.social_media_section.navigation_title}</h5> <div class="flex flex-col items-center gap-3 lg:gap-[30px]"> ${Data.social_media_section.navigation_pages.map((page, index) => {
    return renderTemplate`<a${addAttribute(`navpage${index}`, "id")} x-on:mouseover="grow" x-on:mouseleave="shrink"${addAttribute(page.link, "href")} class="text-darker2 text-base lg:text-lg">${page.page}</a>`;
  })} </div> </div> <div class="flex flex-col items-center gap-2.5"> <h5 class="text-darker2 text-lg lg:text-2xl">${Data.social_media_section.section_title}</h5> <div class=" flex gap-7"> ${Data.social_media_section.social_media.map((sm, index) => {
    return renderTemplate`<a${addAttribute(sm.link, "href")} target="_blank" rel="noopener"> ${renderComponent($$result, "Image", $$Image, { "id": `sm${index}`, "x-on:mouseover": "grow", "x-on:mouseleave": "shrink", "class": " cursor-pointer w-[26px] h-[26px] lg:w-[43px] lg:h-[43px]", "src": sm.image, "alt": sm.name })} </a>`;
  })} </div> </div> </section>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/footerMobile.astro", void 0);

const $$Astro$9 = createAstro("https://berbatphotos.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  const { Data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer x-data x-init="$store.display.setDisplay()" class="flex bg-brighter1 w-full h-full md:h-[168px] lg:h-[293px] mt-10 justify-center" @resize.window.debounce="$store.display.setDisplay()"> <template x-data x-if="$store.display.screen=='desktop'||$store.display.screen=='tablet'"> ${renderComponent($$result, "FooterDesktop", $$FooterDesktop, { "Data": Data })} </template> <template x-data x-if="$store.display.screen=='mobile'"> ${renderComponent($$result, "FooterMobile", $$FooterMobile, { "Data": Data })} </template> </footer>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/footer.astro", void 0);

const arrowicon = new Proxy({"src":"/_astro/angle-vertical.Deror3_-.svg","width":12,"height":7,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/image/angle-vertical.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro("https://berbatphotos.com");
const $$MenuDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenuDropdown;
  const { Text, MenuContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div x-data="dropdown" class="flex gap-2.5 relative justify-center"> <div class="flex flex-col"> <p id="linkText" x-on:click="toggle()" x-on:mouseover="underlineOn" class=" cursor-pointer font-lora italic text-lg 2xl:text-2xl text-brighter2 md:text-darker2">${Text}</p> <span id="linkPages" class=" h-1 bg-darker2"></span> </div> <button x-on:click="toggle()" class=" cursor-pointer"> <img id="arrow-icon" class="arrow-icon w-[13px] h-[13px]"${addAttribute(arrowicon.src, "src")} alt="arrow-icon"> </button> <div x-cloak x-show="open" x-transition class="absolute z-10 top-[42px] flex flex-col gap-3 bg-brighter1 justify-center items-center w-auto min-w-[150px] h-[76px] rounded-lg"> ${MenuContent.map((content, index) => {
    return renderTemplate`<a${addAttribute(`dropdown-content${index}`, "id")} x-on:mouseover="growText" x-on:mouseleave="shrinkText"${addAttribute(content.buttonLink, "href")} class=" px-4 cursor-pointer font-lora text-base text-darker2"> ${content.buttonTitle} </a>`;
  })} </div> </div>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/menuDropdown.astro", void 0);

const bagicon = new Proxy({"src":"/_astro/bag-shopping-solid.BOVadKTa.svg","width":14,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/image/bag-shopping-solid.svg";
							}
							
							return target[name];
						}
					});

const closeIcon = new Proxy({"src":"/_astro/close-icon.Bm39nfxp.svg","width":511,"height":511,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/image/close-icon.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://berbatphotos.com");
const $$Shopbag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Shopbag;
  const { lang } = Astro2.params;
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  const language = capitalizeFirstLetter(lang);
  return renderTemplate`${maybeRenderHead()}<div x-data="shoppingBag" x-on:click="handleModal" class=" flex justify-center items-center relative" data-view-transition="true"> <div x-data x-show="$store.service.shopList.length != 0" class="-top-1.5 -right-2 lg:-top-2.5 lg:-right-2.5 flex justify-center items-center absolute rounded-full w-2.5 h-2.5 lg:p-2 z-10 bg-brighter1 text-[10px] lg:text-sm text-darker2" x-text="$store.service.shopList.length"></div> <img class="w-[20px] h-[24px] lg:w-[26px] lg:h-[30px] 2xl:w-[30px] 2xl:h-[34px]"${addAttribute(bagicon.src, "src")} alt="shop-bag-icon"> <div x-show="showModal" x-cloak class=" fixed h-full w-full sm:absolute sm:w-fit sm:left-auto sm:top-14 sm:h-fit inset-0 z-40 flex justify-start items-center"> <!-- Modal Content --> <section x-transition class="z-50 relative min-w-[340px] flex flex-col justify-center items-center shadow-2xs bg-primary px-4 w-full h-full sm:w-fit sm:h-fit p-16 rounded-lg" @click.stop> <!-- Close Icon --> <img class="absolute top-2 right-2 2xl:top-4 2xl:right-4 w-[20px] h-[20px] z-50 cursor-pointer"${addAttribute(closeIcon.src, "src")} alt="close icon" @click="showModal = false"> <!-- Conditional Content --> <template x-if="$store.service.shopList.length === 0"> <h4 class="z-50 text-darker2">
shopping cart is empty
</h4> </template> <template x-data x-if="$store.service.shopList.length !== 0"> <div class=" flex flex-col gap-4"> <div class=" flex flex-col gap-2 px-2.5 w-fit max-h-[550px] overflow-y-auto overflow-x-hidden"> <template${addAttribute(`(card, cardIndex) in $store.service.shopList${language}`, "x-for")} :key="cardIndex"> <div class=" w-full rounded-sm bg-brighter1 text-darker2 flex flex-col p-2 justify-center items-center"> <template x-if="card.image"> <img class="min-w-[332px] w-[332px] h-[173px] bg-brighter2 object-cover" loading="lazy" decoding="async" width="400" height="250" alt="service" :src="card.image.src"> </template> <div class="flex justify-between items-center w-[230px] sm:w-full"> <div class="flex flex-col gap-2.5  font-lora w-auto sm:min-w-[234px]"> <h4 x-text="card.title" class="text-lg"></h4> <p x-text="card.content" class="text-sm"></p> </div> <div class="flex gap-4 w-fit"> <p x-text="card.price"></p> <img class=" w-[18px] h-[18px] z-30 cursor-pointer"${addAttribute(closeIcon.src, "src")} alt="close icon" @click="$store.service.deleteFromShopList(card.id)"> </div> </div> </div> </template> </div> </div> </template> </section> </div> </div>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/shopbag.astro", void 0);

const $$Astro$6 = createAstro("https://berbatphotos.com");
const $$NavigationDesktop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NavigationDesktop;
  const { pageData } = Astro2.props;
  const { lang } = Astro2.params;
  const navegation = [
    {
      Text: pageData.Data?.navigation_pages.gallery_page_text,
      subMemu: [
        {
          buttonTitle: pageData.Data?.navigation_pages.dropdown_menu[0].gallery_name,
          buttonLink: pageData.Data?.navigation_pages.dropdown_menu[0].link
        },
        {
          buttonTitle: pageData.Data?.navigation_pages.dropdown_menu[1].gallery_name,
          buttonLink: pageData.Data?.navigation_pages.dropdown_menu[1].link
        }
      ]
    },
    {
      Text: pageData.Data?.navigation_pages.service_page_text,
      Links: [
        pageData.Data?.navigation_pages.service_page_link
      ]
    },
    {
      Text: pageData.Data?.navigation_pages.booking_page_text,
      Links: [
        pageData.Data?.navigation_pages.booking_page_link
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section x-data="navbarData" class="flex items-center justify-between w-[1074px] 2xl:w-[1600px] max-w-[1920px] mx-5 2xl:mx-20"> <div class="flex gap-5"> ${pageData.Data?.social_media_section.map((data, index) => {
    return renderTemplate`<a${addAttribute(data.link, "href")} target="_blank" rel="noopener"> ${renderComponent($$result, "Image", $$Image, { "id": `sm-icon${index}`, "x-on:mouseover": "growText", "x-on:mouseleave": "shrinkText", "class": " w-[30px] h-[30px] 2xl:w-[43px] 2xl:h-[43px] object-contain", "src": data.image, "alt": data.name })} </a>`;
  })} <div${addAttribute(`{
                laguages:[${pageData.Data?.languages.map((lang2, index) => {
    return `{name:'${lang2.name}',link:'${lang2.link}',id:${index}}`;
  })}],
                selectedLang: '${pageData.Data?.selected_language}',
                setLang(){

                },
                show:false,
                open(){
                    this.show=!this.show
                }
            }`, "x-data")} class="relative place-content-center"> <div x-on:click="open" class=" flex items-center justify-center gap-1 px-1 bg-brighter1 rounded-sm"> <button x-text="selectedLang" class="text-base 2xl:text-lg cursor-pointer text-darker2"></button> </div> <div x-cloak x-transition x-show="show" class=" absolute z-50 top-[42px] flex flex-col gap-3 bg-brighter1 justify-center items-center w-[100px] h-[100px] rounded-sm"> <template x-for="language in laguages" :key="language.id"> <a class="font-lora text-lg text-darker2 rounded-sm" x-text="language.name" x-bind:href="language.link"></a> </template> </div> </div> </div> <div class="flex flex-col items-center gap-2.5"> <a${addAttribute(`/${lang}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "w-[189px] h-[45px] object-fill", "src": logo$1, "alt": "berbet photos logo" })} </a> <div class="flex justify-evenly gap-20"> ${navegation.map((data, index) => {
    return index == 0 ? renderTemplate`${renderComponent($$result, "MenuDropdown", $$MenuDropdown, { "index": index, "Text": data.Text, "MenuContent": data.subMemu })}` : renderTemplate`<a${addAttribute(data?.Links[0], "href")} class="flex flex-col"> <button${addAttribute(`link${index}`, "id")} x-on:mouseover="handleMainLinkOn" x-on:mouseleave="handleMainLinkOff" class=" cursor-pointer font-lora italic text-lg 2xl:text-2xl text-darker2">${data.Text}</button> <span${addAttribute(`linkPages${index}`, "id")} class=" h-1 bg-darker2"></span> </a>`;
  })} </div> </div> <div class="flex gap-6 items-center relative"> ${renderComponent($$result, "Shopbag", $$Shopbag, {})} <div class=" flex justify-center items-center rounded-lg bg-brighter1 w-auto min-w-[223px] h-[46px]"> <a${addAttribute(pageData.Data?.booking_button_link, "href")}> <button id="navbarBtnContent" x-on:mouseover="growText" x-on:mouseleave="shrinkText" class="cursor-pointer font-lora italic px-5 text-lg text-darker2"> ${pageData.Data?.booking_button_text} </button> </a> </div> </div> </section>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/navigationDesktop.astro", void 0);

const menuIcon = new Proxy({"src":"/_astro/menu-icon.Ba5880GG.svg","width":512,"height":397,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/image/menu-icon.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://berbatphotos.com");
const $$NavigationMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavigationMobile;
  const { pageData } = Astro2.props;
  const { lang } = Astro2.params;
  const navegation = [
    {
      Text: pageData.Data?.navigation_pages.gallery_page_text,
      subMemu: [
        {
          buttonTitle: pageData.Data?.navigation_pages.dropdown_menu[0].gallery_name,
          buttonLink: pageData.Data?.navigation_pages.dropdown_menu[0].link
        },
        {
          buttonTitle: pageData.Data?.navigation_pages.dropdown_menu[1].gallery_name,
          buttonLink: pageData.Data?.navigation_pages.dropdown_menu[1].link
        }
      ]
    },
    {
      Text: pageData.Data?.navigation_pages.service_page_text,
      Links: [
        pageData.Data?.navigation_pages.service_page_link
      ]
    },
    {
      Text: pageData.Data?.navigation_pages.booking_page_text,
      Links: [
        pageData.Data?.navigation_pages.booking_page_link
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="navBarContainer" x-data="navbarData" class=" relatives flex items-center justify-between w-[1074px] 2xl:w-[1600px] max-w-[1920px] mx-8 2xl:mx-20"> <div class="flex gap-1"> <a${addAttribute(`/${lang}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "w-[169px] h-[40px]", "src": logo, "alt": "Berbat Photos logo" })} </a> <div${addAttribute(`{
                laguages:[${pageData.Data?.languages.map((lang2, index) => {
    return `{name:'${lang2.name}',link:'${lang2.link}',id:${index}}`;
  })}],
                selectedLang: '${pageData.Data?.selected_language}',
                setLang(){

                },
                show:false,
                open(){
                    this.show=!this.show
                }
            }`, "x-data")} class="relative place-content-center"> <div x-on:click="open" class=" flex items-center justify-center gap-1 px-1 bg-brighter1 rounded-sm"> <button x-text="selectedLang" class="text-base 2xl:text-lg cursor-pointer text-darker2"></button> </div> <div x-cloak x-transition x-show="show" class=" shadow-2xl rounded-lg absolute z-50 top-[42px] flex flex-col gap-3 bg-brighter1 justify-center items-center w-[100px] h-[100px]"> <template x-for="language in laguages" :key="language.id"> <a class="font-lora text-lg text-darker2 rounded-sm" x-text="language.name" x-bind:href="language.link"></a> </template> </div> </div> </div> <div id="burgerMenu" x-data="burgerMenu" class=""> <button x-on:click="toggle"> <template x-if="!open"> <img class="w-[23px] h-[23px]"${addAttribute(menuIcon.src, "src")} alt="menu icon"> </template> <template x-if="open"> <img class="w-[20px] h-[20px]"${addAttribute(closeIcon.src, "src")} alt="close icon"> </template> </button> <div x-cloak x-transition x-show="open" class=" shadow-2xl absolute z-20 w-full h-fit bg-darker2 left-0 top-[62px] py-3 flex flex-col justify-evenly items-center gap-2.5"> ${navegation.map((data, index) => {
    return index == 0 ? renderTemplate`<div x-data="dropdown" class="flex flex-col w-full gap-2.5"> <div class="flex gap-2.5 justify-center items-center"> <div class="flex flex-col"> <p id="linkText" x-on:click="toggle()" class=" cursor-pointer font-lora italic text-lg 2xl:text-2xl text-brighter2 md:text-darker2">${data.Text}</p> <span id="linkPages" class=" h-1 bg-darker2"></span> </div> <button x-on:click="toggle()" class=" cursor-pointer"> <img id="arrow-icon" class="arrow-icon w-[13px] h-[13px]"${addAttribute(arrowicon.src, "src")} alt="arrow-icon"> </button> </div> <div x-cloak x-show="open" x-transition class=" flex flex-col gap-3 bg-brighter1 justify-center items-center w-full h-[76px] shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.3),_inset_0_-10px_10px_-10px_rgba(0,0,0,0.3)]"> ${data.subMemu.map((content, index2) => {
      return renderTemplate`<a${addAttribute(`dropdown-content${index2}`, "id")} x-on:mouseover="growText" x-on:mouseleave="shrinkText"${addAttribute(content.buttonLink, "href")} class=" cursor-pointer font-lora text-base text-darker2"> ${content.buttonTitle} </a>`;
    })} </div> </div>` : renderTemplate`<a${addAttribute(data?.Links[0], "href")} class="flex flex-col"> <button${addAttribute(`link${index}`, "id")} class=" cursor-pointer font-lora italic text-lg 2xl:text-2xl text-brighter2">${data.Text}</button> <span${addAttribute(`linkPages${index}`, "id")} class=" h-1 bg-darker2"></span> </a>`;
  })} ${renderComponent($$result, "Shopbag", $$Shopbag, {})} </div> </div> </section>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/navigationMobile.astro", void 0);

const $$Astro$4 = createAstro("https://berbatphotos.com");
const $$NavigationTablet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavigationTablet;
  const { pageData } = Astro2.props;
  const { lang } = Astro2.params;
  const navegation = [
    {
      Text: pageData.Data?.navigation_pages.gallery_page_text,
      subMemu: [
        {
          buttonTitle: pageData.Data?.navigation_pages.dropdown_menu[0].gallery_name,
          buttonLink: pageData.Data?.navigation_pages.dropdown_menu[0].link
        },
        {
          buttonTitle: pageData.Data?.navigation_pages.dropdown_menu[1].gallery_name,
          buttonLink: pageData.Data?.navigation_pages.dropdown_menu[1].link
        }
      ]
    },
    {
      Text: pageData.Data?.navigation_pages.service_page_text,
      Links: [
        pageData.Data?.navigation_pages.service_page_link
      ]
    },
    {
      Text: pageData.Data?.navigation_pages.booking_page_text,
      Links: [
        pageData.Data?.navigation_pages.booking_page_link
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section x-data="navbarData" class="flex items-center justify-between w-[1074px] 2xl:w-[1600px] max-w-[1920px] mx-8 2xl:mx-20"> <div class="flex"> <a${addAttribute(`/${lang}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "w-[189px] h-[40px]", "src": logo, "alt": "Berbat Photos logo" })} </a> <div${addAttribute(`{
                laguages:[${pageData.Data?.languages.map((lang2, index) => {
    return `{name:'${lang2.name}',link:'${lang2.link}',id:${index}}`;
  })}],
                selectedLang: '${pageData.Data?.selected_language}',
                setLang(){

                },
                show:false,
                open(){
                    this.show=!this.show
                }
            }`, "x-data")} class="relative place-content-center"> <div x-on:click="open" class=" flex items-center justify-center gap-1 px-1 bg-brighter1 rounded-sm"> <button x-text="selectedLang" class="text-base 2xl:text-lg cursor-pointer text-darker2"></button> </div> <div x-cloak x-transition x-show="show" class=" absolute z-50 top-[42px] flex flex-col gap-3 bg-brighter1 justify-center items-center w-[100px] h-[100px]"> <template x-for="language in laguages" :key="language.id"> <a class="font-lora text-lg text-darker2 rounded-sm" x-text="language.name" x-bind:href="language.link"></a> </template> </div> </div> </div> <div class="flex justify-evenly gap-6"> ${navegation.map((data, index) => {
    return index == 0 ? (
      // <MenuDropdown index={index} Text={data.Text} MenuContent={data.subMemu}/>
      renderTemplate`<div x-data="dropdown" class="flex gap-2.5 relative"> <div class="flex flex-col"> <p id="linkText" x-on:click="toggle()" class=" cursor-pointer font-lora italic text-lg 2xl:text-2xl text-darker2">${data.Text}</p> <span id="linkPages" class=" h-1 bg-darker2"></span> </div> <button x-on:click="toggle()" class=" cursor-pointer"> <img id="arrow-icon" class="arrow-icon w-[13px] h-[13px]"${addAttribute(arrowicon.src, "src")} alt="arrow-icon"> </button> <div x-cloak x-show="open" x-transition class="absolute z-10 top-[42px] flex flex-col gap-3 bg-brighter1 justify-center items-center w-[105px] h-[76px] rounded-lg"> ${data.subMemu.map((content, index2) => {
        return renderTemplate`<a${addAttribute(`dropdown-content${index2}`, "id")} x-on:mouseover="growText" x-on:mouseleave="shrinkText"${addAttribute(content.buttonLink, "href")} class=" cursor-pointer font-lora text-base text-darker2"> ${content.buttonTitle} </a>`;
      })} </div> </div>`
    ) : renderTemplate`<a${addAttribute(data?.Links[0], "href")} class="flex flex-col"> <button${addAttribute(`link${index}`, "id")} class=" cursor-pointer font-lora italic text-lg 2xl:text-2xl text-darker2">${data.Text}</button> <span${addAttribute(`linkPages${index}`, "id")} class=" h-1 bg-darker2"></span> </a>`;
  })} ${renderComponent($$result, "Shopbag", $$Shopbag, {})} </div> </section>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/navigationTablet.astro", void 0);

const $$Astro$3 = createAstro("https://berbatphotos.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pageData = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav x-data x-init="$store.display.setDisplay()" class="w-full flex justify-center h-[62px] lg:h-[130px]" @resize.window.debounce="$store.display.setDisplay()"> <template x-data x-if="$store.display.screen=='desktop'"> ${renderComponent($$result, "NavigationDesktop", $$NavigationDesktop, { "pageData": pageData })} </template> <template x-data x-if="$store.display.screen=='tablet'"> ${renderComponent($$result, "NavigationTablet", $$NavigationTablet, { "pageData": pageData })} </template> <template x-data x-if="$store.display.screen=='mobile'"> ${renderComponent($$result, "NavigationMobile", $$NavigationMobile, { "pageData": pageData })} </template> </nav>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/navbar.astro", void 0);

const $$Astro$2 = createAstro("https://berbatphotos.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/node_modules/astro/components/ClientRouter.astro", void 0);

const thumb = new Proxy({"src":"/_astro/thumb.I7i3uabL.png","width":1815,"height":819,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/public/thumb.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://berbatphotos.com");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Seo;
  const { description, title } = Astro2.props;
  return renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url" content="https://berbatphotos.com"><meta property="og:type" content="website"><meta property="og:image"${addAttribute(`https://berbatphotos.com/${thumb.src}`, "content")}><meta name="twitter:card" content="/web-app-manifest-192x192.png"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(`https://berbatphotos.com/${thumb.src}`, "content")}>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/layouts/seo.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BtDj_ECc.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLOUDINARY_API_KEY": "452488598948642", "PUBLIC_CLOUDINARY_CLOUD_NAME": "dtpo2hxfl", "PUBLIC_EMAILJS_SERVICE_ID": "service_nvaglrf", "PUBLIC_EMAILJS_TEMPLATE_ID1": "template_982zhas", "PUBLIC_EMAILJS_TEMPLATE_ID2": "template_k9929pe", "PUBLIC_EMAILJS_USER_ID": "FC9jsiPYP-m61SweU", "SITE": "https://berbatphotos.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_BOjCWl9I.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_BOjCWl9I.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_Dr5smhq5.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function createReference({ lookupMap }) {
  let store = null;
  globalDataStore.get().then((s) => store = s);
  return function reference(collection) {
    return z.union([
      z.string(),
      z.object({
        id: z.string(),
        collection: z.string()
      }),
      z.object({
        slug: z.string(),
        collection: z.string()
      })
    ]).transform(
      (lookup, ctx) => {
        if (!store) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${ctx.path.join(".")}:** Reference to ${collection} could not be resolved: store not available.
This is an Astro bug, so please file an issue at https://github.com/withastro/astro/issues.`
          });
          return;
        }
        const flattenedErrorPath = ctx.path.join(".");
        if (typeof lookup === "object") {
          if (lookup.collection !== collection) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
            });
            return;
          }
          return lookup;
        }
        if (!lookupMap[collection]) {
          return { id: lookup, collection };
        }
        const { type, entries } = lookupMap[collection];
        const entry = entries[lookup];
        if (!entry) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${Object.keys(
              entries
            ).map((c) => JSON.stringify(c)).join(" | ")}. Received ${JSON.stringify(lookup)}.`
          });
          return;
        }
        if (type === "content") {
          return { slug: lookup, collection };
        }
        return { id: lookup, collection };
      }
    );
  };
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

createReference({ lookupMap });

const $$Astro = createAstro("https://berbatphotos.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const servicesPageEnData = await getCollection("service_page_en");
  const servicesPageFrData = await getCollection("service_page_fr");
  async function optimizeImage(image) {
    const img = await getImage({ src: image, width: 400, height: 250, format: "webp" });
    return img;
  }
  const servicesEn = await Promise.all(
    servicesPageEnData[0].data.services_section.services_cards.flatMap(
      (card) => card.services.flatMap(
        (service) => service.cards.map(async (cardData) => {
          cardData.image.src = (await optimizeImage(cardData.image)).src;
          cardData.image.width = 400;
          cardData.image.height = 250;
          cardData.image.format = "webp";
          return cardData;
        })
      )
    )
  ).then((results) => results.flat());
  const servicesFr = await Promise.all(
    servicesPageFrData[0].data.services_section.services_cards.flatMap(
      (card) => card.services.flatMap(
        (service) => service.cards.map(async (cardData) => {
          cardData.image.src = (await optimizeImage(cardData.image)).src;
          cardData.image.width = 400;
          cardData.image.height = 250;
          cardData.image.format = "webp";
          return cardData;
        })
      )
    )
  ).then((results) => results.flat());
  async function sendDataToBackend() {
    const CardsData = {
      servicesEn,
      servicesFr
    };
    const baseUrl = "https://berbatphotos.com";
    await fetch(`${baseUrl}/api/services.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(CardsData)
    });
  }
  await sendDataToBackend();
  const { NavBarData, FootData, pageTitle, pageDescription } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="Berbat Photos"><link rel="manifest" href="/site.webmanifest"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"><meta name="google-site-verification" content="3zqDMU14MAapH-oPmoASfZMFniwMYWxJ1_ycjVvVbdE"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Seo", $$Seo, { "title": pageTitle, "description": pageDescription, "data-astro-cid-sckkx6r4": true })}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="bg-white min-h-screen" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "Data": NavBarData, "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "Data": FootData, "data-astro-cid-sckkx6r4": true })}  ${renderScript($$result, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/layouts/Layout.astro", void 0);

export { $$Layout as $, arrowicon as a, closeIcon as c, getCollection as g };
