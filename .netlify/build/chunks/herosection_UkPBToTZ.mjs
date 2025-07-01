import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_CboteeAh.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_Dr5smhq5.mjs';

const $$Astro = createAstro("https://berbatphotos.com");
const $$Herosection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Herosection;
  const { title, subtitle, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="heroSection" class=" relative flex flex-col justify-center items-center"> ${renderComponent($$result, "Image", $$Image, { "decoding": "async", "fetchpriority": "high", "width": 1920, "height": 1080, "class": " w-full lg:w-[90dvw] h-[405px] sm:sm:h-[60dvw] xl:h-[48dvw] max-w-[1677px] max-h-[745px] lg:rounded-xl object-cover", "loading": "lazy", "format": "jpeg", "src": image, "alt": "Thumbnail" })} <div class=" text-brighter2 absolute flex flex-col justify-center items-center gap-4 font-lora italic"> <h3 class="text-brighter2 heroSectionText text-center text-2xl sm:text-4xl xl:text-[46px]">${title}</h3> <p class="text-brighter2 heroSectionText text-center text-lg sm:text-2xl xl:text-3xl max-w-[729px]">${subtitle}</p> </div> </section>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/herosection.astro", void 0);

export { $$Herosection as $ };
