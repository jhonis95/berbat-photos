import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, e as renderScript } from '../../chunks/astro/server_CboteeAh.mjs';
import 'kleur/colors';
import { $ as $$Bookingcard } from '../../chunks/bookingcard_B5YWkfw-.mjs';
import { $ as $$Herosection } from '../../chunks/herosection_UkPBToTZ.mjs';
import 'clsx';
import { $ as $$Layout, g as getCollection } from '../../chunks/Layout_aq5S9g19.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://berbatphotos.com");
const $$TestimonialsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialsCard;
  const { title, subtitle, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="testimonials-card bg-brighter1 w-full sm:w-auto sm:rounded-xl p-[14px] font-lora flex flex-col justify-center items-center gap-[10px]"> <div class="text-darker2 flex flex-col gap-[5px] items-center"> <h3 class="text-2xl">${title}</h3> <h5 class="text-sm">${subtitle}</h5> </div> <p class="text-darker2 text-base text-center h-24 overflow-y-auto overflow-x-hidden max-w-[412px] p-2">${content}</p> </div>`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/components/testimonialsCard.astro", void 0);

const $$Astro = createAstro("https://berbatphotos.com");
async function getStaticPaths() {
  const bookingPageEnData = await getCollection("booking_page_en");
  const bookingPageFrData = await getCollection("booking_page_fr");
  const navBarEnData = await getCollection("navigation_bar_en");
  const navBarFrData = await getCollection("navigation_bar_fr");
  const footerEnData = await getCollection("footer_bar_en");
  const footerFrData = await getCollection("footer_bar_fr");
  return [
    {
      params: { lang: "en", slugBooking: "booking" },
      props: {
        pageData: bookingPageEnData[0].data,
        navBarData: navBarEnData[0].data,
        footerData: footerEnData[0].data
      }
    },
    {
      params: { lang: "fr", slugBooking: "reservation" },
      props: {
        pageData: bookingPageFrData[0].data,
        navBarData: navBarFrData[0].data,
        footerData: footerFrData[0].data
      }
    }
  ];
}
const $$slugBooking = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slugBooking;
  const { pageData, navBarData, footerData } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "NavBarData": navBarData, "FootData": footerData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=" flex flex-col gap-12 xl:gap-[90px] items-center"> ${renderComponent($$result2, "Herosection", $$Herosection, { "title": pageData.header.title, "subtitle": pageData.header.subtitle, "image": pageData.header.image })} ${renderComponent($$result2, "Bookingcard", $$Bookingcard, { "Id": "bookingSection", "Content": pageData.booking_section })} <div class=" flex flex-col gap-8 sm:gap-10 xl:gap-[70px]"> <h3 class="sectionTitle text-darker2 w-full text-center font-lora italic text-3xl xl:text-5xl">${pageData.testimonials_section.title}</h3> <section id="testimonialsCard" class="flex flex-wrap justify-center items-center gap-3.5 sm:gap-7 xl:gap-14"> ${pageData.testimonials_section.testimonials.map((testimonial) => {
    return renderTemplate`${renderComponent($$result2, "TestimonialsCard", $$TestimonialsCard, { "title": testimonial.review_name, "subtitle": testimonial.quote, "content": testimonial.description })}`;
  })} </section> </div> </main> ` })} ${renderScript($$result, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugBooking].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugBooking].astro", void 0);

const $$file = "/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugBooking].astro";
const $$url = "/[lang]/[slugBooking]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slugBooking,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
