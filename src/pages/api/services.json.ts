

import { getCollection } from 'astro:content';


const servicesPageEnData = await getCollection("service_page_en");
const servicesPageFrData = await getCollection("service_page_fr");

export async function GET(){
    const serviceListEn: any[]=[]
    const serviceListFr: any[]=[]

    await servicesPageEnData[0].data.services_section.services_cards.map((data) => {
        data.services.map( (data)=>{
          data.cards.map((cardData)=>{
            serviceListEn.push(cardData);
          })
        })
    })
    await servicesPageFrData[0].data.services_section.services_cards.map((data) => {
        data.services.map( (data)=>{
          data.cards.map((cardData)=>{
            serviceListFr.push(cardData);
          })
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