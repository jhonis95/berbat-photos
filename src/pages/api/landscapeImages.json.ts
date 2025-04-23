
// export async function GET({ request }:any) {
//     const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
//     const API_KEY = import.meta.env.PUBLIC_CLOUDINARY_API_KEY;
//     const API_SECRET = import.meta.env.CLOUDINARY_API_SECRET;
//     const FOLDER_NAME = "Landscape"; // Change this to your actual folder name

//     const url = new URL(request.url);
//     const cursor = url.searchParams.get("cursor");

//     console.log(`landscape api url: ${url}`)
//     const body: {
//       expression: string;
//       max_results: number;
//       next_cursor?: string;
//     } = {
//       expression: `folder:${FOLDER_NAME}`,
//       max_results: 20,
//     };
//     if (cursor) {
//       body.next_cursor = cursor;
//     }
  
//     const response = await fetch(
//       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       }
//     );
  
//     const data = await response.json();
  
//     return new Response(
//       JSON.stringify({
//         images: data.resources,
//         nextCursor: data.next_cursor || null,
//       }),
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }

export async function GET() {
  const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
  const API_KEY = import.meta.env.PUBLIC_CLOUDINARY_API_KEY;
  const API_SECRET = import.meta.env.CLOUDINARY_API_SECRET;
  const FOLDER_NAME = "Landscape"; // Change this to your actual folder name

  const query = `expression=folder:${FOLDER_NAME}&max_results=150`; // Adjust max_results as needed

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?${query}`,
    {
      headers: {
        Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`,
      },
    }
  );

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = await response.json();

  return new Response(JSON.stringify(data.resources), {
    headers: { "Content-Type": "application/json" },
  });
}