
import { getCollection } from 'astro:content';
import { getImage } from "astro:assets";

const servicesPageEnData = await getCollection("service_page_en");
const servicesPageFrData = await getCollection("service_page_fr");

export async function GET(){
    const serviceListEn: any[]=[]
    const serviceListFr: any[]=[]

    async function optimizeImage(image: ImageMetadata) {
      const img = await getImage({ src: image, width: 400, height: 250, format: 'webp' });
      return img.src;
    }

    await servicesPageEnData[0].data.services_section.services_cards.map((data) => {
        data.services.map(async (cardData)=>{
          await cardData.cards.map(async (card)=>{
            card.image.src = await optimizeImage(card.image);
          })
          let toSend:any = cardData.cards;
            serviceListEn.push(toSend);
        })
    })
    await servicesPageFrData[0].data.services_section.services_cards.map((data) => {
        data.services.map(async (cardData)=>{
          await cardData.cards.map(async (card)=>{
            card.image.src = await optimizeImage(card.image);
          })
          let toSend:any = cardData.cards;
            serviceListFr.push(toSend);
        })
    })
    const sendObj={
        servicesEn:serviceListEn,
        servicesFr:serviceListFr
    }
    const response=sendObj
    
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