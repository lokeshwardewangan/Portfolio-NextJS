import { Resend } from "resend";

let cachedResend: Resend | null = null;

export function getResend(): Resend {
  if (cachedResend) return cachedResend;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing — cannot send email.");
  }

  cachedResend = new Resend(apiKey);
  return cachedResend;
}

export const EMAIL_FROM = "Lokeshwar Dewangan <contact@lokeshwardewangan.in>";
export const EMAIL_ADMIN = "lokeshwar.prasad.cse@gmail.com";

export const SITE_URL = "https://lokeshwardewangan.in";

export const SOCIAL_LINKS = {
  github: "https://github.com/lokeshwardewangan/",
  linkedin: "https://www.linkedin.com/in/lokeshwar-dewangan-7b2163211/",
  instagram: "https://www.instagram.com/lokeshwar.me",
  x: "https://x.com/lokeshwar_dev",
} as const;
