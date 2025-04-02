const { Client } = require("@notionhq/client")
const NOTION_TOKEN = import.meta.env.NOTION_TOKEN;
const NOTION_DB_ID = import.meta.env.NOTION_DB_ID;
const notion = new Client({
    auth: NOTION_TOKEN,
})

export async function GET(){
    const response = await notion.databases.retrieve({ database_id: NOTION_DB_ID });
    console.log(response);
}