import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home_page = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/homepageContent" }),
    schema:({ image }) => z.object({
        title: z.string(),
        header:z.object({
            subtitle:z.string(),
            title:z.string(),
            image:image(),
        }),
        about_me_section:z.object({
            title:z.string(),
            content:z.array(z.object({
                text:z.string(),
            })),
            image:image(),
            button_text:z.string(),
            button_link:z.string(),
        }),
        services_section:z.array(z.object({
            image:image(),
            headline:z.string(),
            description:z.string(),
            button_text:z.string(),
            button_link:z.string(),
        })),
        booking_section:z.object({
            title:z.string(),
            description:z.string(),
            button_text:z.string(),
            label_name:z.string(),
            label_email:z.string(),
            label_message:z.string(),
            label_services:z.string(),
            label_placeholder:z.string(),
        }),
        follow_me_section:z.object({
            title:z.string(),
            social_media_name:z.string(),
            social_media_link:z.string(),
        }),
    })
})

export const collections = { home_page };