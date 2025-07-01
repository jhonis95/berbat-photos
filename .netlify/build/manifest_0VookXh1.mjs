import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { v as NOOP_MIDDLEWARE_HEADER, w as decodeKey } from './chunks/astro/server_CboteeAh.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/jonatan/Documents/Programing/Freelance%20Project/berbat-fotos/","cacheDir":"file:///home/jonatan/Documents/Programing/Freelance%20Project/berbat-fotos/node_modules/.astro/","outDir":"file:///home/jonatan/Documents/Programing/Freelance%20Project/berbat-fotos/dist/","srcDir":"file:///home/jonatan/Documents/Programing/Freelance%20Project/berbat-fotos/src/","publicDir":"file:///home/jonatan/Documents/Programing/Freelance%20Project/berbat-fotos/public/","buildClientDir":"file:///home/jonatan/Documents/Programing/Freelance%20Project/berbat-fotos/dist/","buildServerDir":"file:///home/jonatan/Documents/Programing/Freelance%20Project/berbat-fotos/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.html","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[],"routeData":{"route":"/api/landscapeimages.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/landscapeImages\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"landscapeImages.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/landscapeImages.json.ts","pathname":"/api/landscapeImages.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[],"routeData":{"route":"/api/myworkimages.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/myworkImages\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"myworkImages.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/myworkImages.json.ts","pathname":"/api/myworkImages.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[],"routeData":{"route":"/api/services.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/services\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"services.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/services.json.ts","pathname":"/api/services.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DgoZ6EhO.css"}],"routeData":{"route":"/[lang]/[gallery]/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"gallery","dynamic":true,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["lang","gallery","slug"],"component":"src/pages/[lang]/[gallery]/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DgoZ6EhO.css"}],"routeData":{"route":"/[lang]/[slugbooking]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"slugBooking","dynamic":true,"spread":false}]],"params":["lang","slugBooking"],"component":"src/pages/[lang]/[slugBooking].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DgoZ6EhO.css"}],"routeData":{"route":"/[lang]/[slugreview]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"slugReview","dynamic":true,"spread":false}]],"params":["lang","slugReview"],"component":"src/pages/[lang]/[slugReview].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DgoZ6EhO.css"}],"routeData":{"route":"/[lang]/[slugservices]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"slugServices","dynamic":true,"spread":false}]],"params":["lang","slugServices"],"component":"src/pages/[lang]/[slugServices].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DgoZ6EhO.css"}],"routeData":{"route":"/[lang]","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BBZZgzWT.js"}],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://berbatphotos.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[gallery]/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/[gallery]/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugBooking].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/[slugBooking]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugReview].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/[slugReview]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugServices].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/[slugServices]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/admin@_@html":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/landscapeImages.json@_@ts":"pages/api/landscapeimages.json.astro.mjs","\u0000@astro-page:src/pages/api/myworkImages.json@_@ts":"pages/api/myworkimages.json.astro.mjs","\u0000@astro-page:src/pages/api/services.json@_@ts":"pages/api/services.json.astro.mjs","\u0000@astro-page:src/pages/[lang]/[gallery]/[slug]@_@astro":"pages/_lang_/_gallery_/_slug_.astro.mjs","\u0000@astro-page:src/pages/[lang]/[slugBooking]@_@astro":"pages/_lang_/_slugbooking_.astro.mjs","\u0000@astro-page:src/pages/[lang]/[slugReview]@_@astro":"pages/_lang_/_slugreview_.astro.mjs","\u0000@astro-page:src/pages/[lang]/[slugServices]@_@astro":"pages/_lang_/_slugservices_.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_0VookXh1.mjs","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Be2s8Rm-.mjs","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/.astro/content-assets.mjs":"chunks/content-assets_BOjCWl9I.mjs","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BtDj_ECc.mjs","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugBooking].astro?astro&type=script&index=0&lang.ts":"_astro/_slugBooking_.astro_astro_type_script_index_0_lang.CqPG25jb.js","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/[slugReview].astro?astro&type=script&index=0&lang.ts":"_astro/_slugReview_.astro_astro_type_script_index_0_lang.49q_DjK7.js","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/pages/[lang]/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CqPG25jb.js","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.Ruw5X8GR.js","/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","astro:scripts/page.js":"_astro/page.BBZZgzWT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/angle-horizon.Bzneoyta.svg","/_astro/close-icon.Bm39nfxp.svg","/_astro/angle-vertical.Deror3_-.svg","/_astro/email-icon.DspZGQzC.svg","/_astro/whatsapp-icon.Clq1fJXT.svg","/_astro/instagram-icon.DS0fcrb-.svg","/_astro/Rectangle 26.BQy7CRNg.png","/_astro/dscf1496.BINK9jGI.jpg","/_astro/thumb.I7i3uabL.png","/_astro/website-17.BkV4vJxE.jpg","/_astro/website-6.KHyJZLUl.jpg","/_astro/bons-et-vivants-3.BG1AYL8d.jpg","/_astro/website-20.CxDha7th.jpg","/_astro/bons-et-vivants-135.CiWng7h9.jpg","/_astro/bons-et-vivants-150.6HQQH4tr.jpg","/_astro/bons-et-vivants-80.nuR8qZsG.jpg","/_astro/bons-et-vivants-168.D3G_FBKj.jpg","/_astro/website-4.DdxHwRDz.jpg","/_astro/website-7.kUkommYG.jpg","/_astro/website-22.BcSubzfN.jpg","/_astro/bons-et-vivants-4.DTs0CbyF.jpg","/_astro/logoDesktop.DPGc2aep.svg","/_astro/bons-et-vivants-2.BodCuTUg.jpg","/_astro/graduation-152.Cp5s8IYw.jpg","/_astro/logoMobile.DGK4P8HA.svg","/_astro/bons-et-vivants-7.DKVewsRg.jpg","/_astro/rectangle-7-1-.D5RHfl1f.png","/_astro/menu-icon.Ba5880GG.svg","/_astro/website-23._Hc2Jj98.jpg","/_astro/website-15.BIvke-qP.jpg","/_astro/website-12.BwNHdztG.jpg","/_astro/bag-shopping-solid.BOVadKTa.svg","/_astro/website-18.CNWjbV1Y.jpg","/_astro/bons-et-vivants-125.BGbPHQQP.jpg","/_astro/website-9._-fFnq96.jpg","/_astro/dscf1510.Dye52HA8.jpg","/_astro/bons-et-vivants-14.C6T-lHSM.jpg","/_astro/image-1-.DjcA91Uw.png","/_astro/dscf1518.6WJRXsZP.jpg","/_astro/_slug_.DgoZ6EhO.css","/apple-touch-icon.png","/favicon-96x96.png","/favicon.ico","/favicon.svg","/global.css","/site.webmanifest","/thumb.png","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","/_astro/Layout.astro_astro_type_script_index_0_lang.Ruw5X8GR.js","/_astro/_slugBooking_.astro_astro_type_script_index_0_lang.CqPG25jb.js","/_astro/_slugReview_.astro_astro_type_script_index_0_lang.49q_DjK7.js","/_astro/index.DtVQIX_c.js","/_astro/index.astro_astro_type_script_index_0_lang.CqPG25jb.js","/_astro/module.esm.BArBhHwf.js","/_astro/page.BBZZgzWT.js","/_astro/stagger.DnXeIO3K.js","/admin/config.yml","/font/style.css","/image/angle-horizon.svg","/image/angle-vertical.svg","/image/bag-shopping-solid.svg","/image/close-icon.svg","/image/email-icon.svg","/image/instagram-icon.svg","/image/logoDesktop (copy).svg","/image/logoDesktop.svg","/image/logoMobile.svg","/image/menu-icon.svg","/image/whatsapp-icon.svg","/_astro/page.BBZZgzWT.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"k/em+GLX1qLGjjZ+UKOHcZs6auqUWUSQdLjEJaOOJto=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/jonatan/Documents/Programing/Freelance Project/berbat-fotos/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
