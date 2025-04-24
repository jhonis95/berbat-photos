import { Client } from "@notionhq/client";
import type { APIRoute } from "astro";

const NOTION_TOKEN = import.meta.env.NOTION_TOKEN;
const NOTION_DB_ID = import.meta.env.NOTION_DB_ID;
const notion = new Client({
    auth: NOTION_TOKEN,
})

export async function GET(){
    const response = await notion.databases.retrieve({ database_id: NOTION_DB_ID });
    
    if (!response) {
      return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
        status: response,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
}

export const POST: APIRoute= async ({ params, request })=>{
  const response = await notion.databases.retrieve({ database_id: NOTION_DB_ID });

  const { name, email, message, session }:any=request.body

  if (!response) {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
      status: response,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    await notion.pages.create({
      parent: { database_id: NOTION_DB_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    return new Response(
      JSON.stringify({
        message: "This was a POST!",
      }),
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong.",
      }),
    )
  }
}