import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is missing — contact emails will not be sent.");
}

export const resend = new Resend(process.env.RESEND_API_KEY || "");

export const EMAIL_FROM = "Lokeshwar Dewangan <contact@lokeshwardewangan.in>";
export const EMAIL_ADMIN = "lokeshwar.prasad.cse@gmail.com";

export const SITE_URL = "https://lokeshwardewangan.in";

export const SOCIAL_LINKS = {
  github: "https://github.com/lokeshwardewangan/",
  linkedin: "https://www.linkedin.com/in/lokeshwar-dewangan-7b2163211/",
  instagram: "https://www.instagram.com/lokeshwar.me",
  x: "https://x.com/lokeshwar_dev",
} as const;
