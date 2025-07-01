
export const prerender = false;
import type { APIRoute } from "astro";

let savedData: any = null;

export const POST: APIRoute = async({request})=> {
  const body = await request.json();
  savedData = body;
  return new Response(JSON.stringify({ success: true }));
}

export async function GET(){
    const response=savedData
    
    if (!response) {
      return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
        status: 404, // Use a valid status code
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
}