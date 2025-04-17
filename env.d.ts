interface ImportMetaEnv {
    readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
    readonly PUBLIC_CLOUDINARY_API_KEY: string;
    readonly CLOUDINARY_API_SECRET: string;

    readonly PUBLIC_EMAILJS_SERVICE_ID: string;
    readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
    readonly PUBLIC_EMAILJS_USER_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }