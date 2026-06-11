import fs from "node:fs";
import path from "node:path";

const ICON_DIR = path.join(process.cwd(), "public", "email-icons");

function loadIconDataUri(slug: string): string {
  try {
    const svg = fs.readFileSync(path.join(ICON_DIR, `${slug}.svg`), "utf8");
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  } catch {
    return "";
  }
}

export const EMAIL_ICONS = {
  github: loadIconDataUri("github"),
  linkedin: loadIconDataUri("linkedin"),
  instagram: loadIconDataUri("instagram"),
  x: loadIconDataUri("x"),
} as const;

export type EmailIconKey = keyof typeof EMAIL_ICONS;
