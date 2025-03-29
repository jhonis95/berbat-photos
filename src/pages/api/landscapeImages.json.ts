export async function GET() {
    const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
    const API_KEY = import.meta.env.PUBLIC_CLOUDINARY_API_KEY;
    const API_SECRET = import.meta.env.CLOUDINARY_API_SECRET;
    const FOLDER_NAME = "berbat-photos_landscape"; // Change this to your actual folder name
  
    const query = `expression=folder:${FOLDER_NAME}&max_results=30`; // Adjust max_results as needed
  
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