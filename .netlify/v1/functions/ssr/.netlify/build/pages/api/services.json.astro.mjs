export { renderers } from '../../renderers.mjs';

const prerender = false;
let savedData = null;
const POST = async ({ request }) => {
  const body = await request.json();
  savedData = body;
  return new Response(JSON.stringify({ success: true }));
};
async function GET() {
  const response = savedData;
  if (!response) {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
      status: 404,
      // Use a valid status code
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
