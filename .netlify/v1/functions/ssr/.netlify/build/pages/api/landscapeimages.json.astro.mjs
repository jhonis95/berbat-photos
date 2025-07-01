export { renderers } from '../../renderers.mjs';

async function GET() {
  const CLOUD_NAME = "dtpo2hxfl";
  const API_KEY = "452488598948642";
  const API_SECRET = "AMmJPLNZjQXm0bex9aUlcMVbRzw";
  const FOLDER_NAME = "Landscape";
  const query = `expression=folder:${FOLDER_NAME}&max_results=150`;
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?${query}`,
    {
      headers: {
        Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`
      }
    }
  );
  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });
  }
  const data = await response.json();
  return new Response(JSON.stringify(data.resources), {
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
