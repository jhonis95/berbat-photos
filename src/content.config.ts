import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { array, object } from 'astro:schema';

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

const navigation_bar = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/navegarionBarContent" }),
    schema:({ image }) => z.object({
        social_media_section:z.array(z.object({
            name:z.string(),
            image:image()
        })),
        languages:z.array(z.object({
            name:z.string(),
            link:z.string()
        })),
        selected_language:z.string(),
        navigation_pages:z.object({
            gallery_page_text:z.string(),
            dropdown_menu:z.array(z.object({
                gallery_name:z.string(),
                link:z.string()
            })),
            service_page_text:z.string(),
            service_page_link:z.string(),
            booking_page_text:z.string(),
            booking_page_link:z.string(),
        }),
        site_name:z.string(),
        booking_button_text:z.string(),
        booking_button_link:z.string()
    })
})

const footer_bar = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/footerBarContent" }),
    schema:({image})=>z.object({
        social_media_section:z.object({
            section_title:z.string(),
            social_media:z.array(z.object({
                name:z.string(),
                image:image()
            })),
            site_name:z.string(),
            intagram_name:z.string(),
            social_media_link:z.string(),
            navigation_title:z.string(),
            navigation_pages:z.array(z.object({
                page:z.string(),
                link:z.string()
            }))
        }),
    })
})

const booking_page= defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/bookingPage" }),
    schema:({image})=>z.object({
        title: z.string(),
        header:z.object({
            title:z.string(),
            subtitle:z.string(),
            image:image(),
        }),
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
        testimonials_section:z.object({
            title:z.string(),
            testimonials:z.array(z.object({
                review_name:z.string(),
                quote:z.string(),
                description:z.string(),
            }))
        })
    })
})

const service_page= defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/servicePage" }),
    schema:({image})=>z.object({
        title: z.string(),
        header:z.object({
            title:z.string(),
            subtitle:z.string(),
            image:image(),
        }),
        services_section:z.object({
            title:z.string(),
            services_cards:z.array(z.object({
                title:z.string(),
                image:image(),
                content:z.array(z.object({
                    text:z.string()
                })),
                button_text_close:z.string(),
                button_text_open:z.string(),
                services:z.array(z.object({
                    title:z.string(),
                    cards:z.array(z.object({
                        title:z.string(),
                        content:z.string(),
                        price:z.string(),
                        image:image().optional()
                    }))
                }))
            }))
        }),
    })
})

const gallery_page=defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/galleryPage" }),
    schema:({image})=>z.object({
        title: z.string(),
        header:z.object({
            title:z.string(),
            subtitle:z.string(),
        }),
        gallery_name:z.string(),
        images:z.array(z.object({
            image:image().optional()
        })).optional()
    })
})

const review_page = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/reviewPage" }),
    schema:({image})=>z.object({
        title: z.string(),
        header:z.object({
            title:z.string(),
            subtitle:z.string(),
            image:image(),
        }),
        review_card:z.object({
            title:z.string(),
            description:z.array(z.object({
                text:z.string()
            })),
            button_text:z.string(),
            label_name:z.string(),
            label_resume:z.string(),
            label_message:z.string(),
        })
    })
})

export const collections = { 
    home_page,
    navigation_bar,
    footer_bar,
    booking_page,
    service_page,
    gallery_page,
    review_page
};