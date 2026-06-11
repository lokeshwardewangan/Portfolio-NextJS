import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { SITE_URL, SOCIAL_LINKS } from "../client";
import { EMAIL_ICONS, type EmailIconKey } from "../icons";

const FONT_SERIF =
  '"Iowan Old Style", "Apple Garamond", "Hoefler Text", Georgia, "Times New Roman", serif';
const FONT_SANS =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif';

interface Social {
  label: string;
  href: string;
  slug: string;
}

const SOCIALS: Social[] = [
  { label: "GitHub", href: SOCIAL_LINKS.github, slug: "github" },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, slug: "linkedin" },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, slug: "instagram" },
  { label: "X", href: SOCIAL_LINKS.x, slug: "x" },
];

const DARK_CSS = `
  @media (prefers-color-scheme: dark) {
    .email-page { background-color: #09090b !important; }
    .email-card {
      background-color: #18181b !important;
      border-color: #27272a !important;
      box-shadow: 0 1px 0 0 #27272a !important;
    }
    .email-inner {
      background-color: #0c0c0e !important;
      border-color: #27272a !important;
    }
    .email-ink { color: #fafafa !important; }
    .email-text { color: #d4d4d8 !important; }
    .email-muted { color: #a1a1aa !important; }
    .email-faint { color: #71717a !important; }
    .email-rule { border-top-color: #27272a !important; }
    .email-cta {
      background-color: #fafafa !important;
      color: #09090b !important;
    }
    .email-social img {
      filter: brightness(0) invert(0.7) !important;
    }
    .email-footer-rule { border-top-color: #27272a !important; }
  }
  @media (max-width: 600px) {
    .email-page { padding: 24px 0 !important; }
    .email-container { padding: 0 16px !important; }
    .email-card { padding: 28px 20px !important; border-radius: 14px !important; }
    .email-inner { padding: 20px 20px 4px !important; }
    .email-greeting { font-size: 26px !important; }
    .email-lede { font-size: 15px !important; margin-bottom: 28px !important; }
    .email-hr { margin: 24px 0 !important; }
    .email-cta-wrap { margin: 24px 0 28px !important; }
    .email-social-wrap { margin: 0 -4px !important; }
    .email-social { margin: 0 6px !important; }
  }
  a { text-decoration: none; }
`;

const page = {
  backgroundColor: "#f4f4f5",
  fontFamily: FONT_SANS,
  margin: 0,
  padding: "40px 0",
  color: "#27272a",
};

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "0 24px",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  border: "1px solid #e4e4e7",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
  padding: "40px",
};

const wordmark = {
  fontFamily: FONT_SERIF,
  fontSize: "20px",
  fontStyle: "italic" as const,
  color: "#09090b",
  margin: 0,
  letterSpacing: "-0.01em",
  lineHeight: 1.2,
};

const role = {
  fontSize: "12px",
  color: "#71717a",
  margin: "6px 0 0",
  letterSpacing: "0.04em",
};

const hr = {
  borderTop: "1px solid #e4e4e7",
  margin: "28px 0",
};

const greeting = {
  fontFamily: FONT_SERIF,
  fontSize: "30px",
  fontWeight: 400,
  color: "#09090b",
  margin: "0 0 20px",
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
};

const lede = {
  fontSize: "16px",
  lineHeight: 1.7,
  color: "#3f3f46",
  margin: "0 0 32px",
};

const inner = {
  backgroundColor: "#fafafa",
  border: "1px solid #e4e4e7",
  borderRadius: "12px",
  padding: "24px 24px 8px",
  marginBottom: "28px",
};

const label = {
  fontSize: "11px",
  color: "#a1a1aa",
  textTransform: "uppercase" as const,
  letterSpacing: "0.14em",
  margin: "0 0 6px",
  fontWeight: 600,
};

const value = {
  fontSize: "15px",
  color: "#09090b",
  margin: "0 0 20px",
  lineHeight: 1.5,
  wordBreak: "break-word" as const,
};

const messageValue = {
  ...value,
  color: "#3f3f46",
  lineHeight: 1.65,
  whiteSpace: "pre-line" as const,
  overflowWrap: "anywhere" as const,
  marginBottom: "16px",
};

const ctaWrap = { textAlign: "center" as const, margin: "28px 0 32px" };

const ctaButton = {
  display: "inline-block",
  backgroundColor: "#09090b",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: 500,
  textDecoration: "none",
  padding: "12px 22px",
  borderRadius: "8px",
  letterSpacing: "0.01em",
};

const socialLabel = {
  fontSize: "11px",
  color: "#71717a",
  textTransform: "uppercase" as const,
  letterSpacing: "0.14em",
  margin: "0 0 16px",
  fontWeight: 600,
  textAlign: "center" as const,
};

const socialIconLink = {
  display: "inline-block",
  margin: "0 10px",
  verticalAlign: "middle" as const,
};

const socialIconImg = { display: "block", border: 0 };

const footerWrap = { padding: "24px 0 8px" };

const footerText = {
  fontSize: "12px",
  color: "#a1a1aa",
  margin: 0,
  textAlign: "center" as const,
  lineHeight: 1.6,
};

const footerLink = {
  color: "#71717a",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
};

export interface ContactConfirmationProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactConfirmation = ({
  name,
  email,
  subject,
  message,
}: ContactConfirmationProps) => {
  const year = new Date().getFullYear();

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{DARK_CSS}</style>
      </Head>
      <Preview>I got your message — expect a reply within a day.</Preview>

      <Body className="email-page" style={page}>
        <Container className="email-container" style={containerStyle}>
          <Section className="email-card" style={cardStyle}>
            <Section>
              <Text className="email-ink" style={wordmark}>
                Lokeshwar Dewangan
              </Text>
              <Text className="email-faint" style={role}>
                Full-Stack Engineer
              </Text>
            </Section>

            <div className="email-rule email-hr" style={hr} />

            <Heading as="h1" className="email-ink email-greeting" style={greeting}>
              Hi {name},
            </Heading>

            <Text className="email-text email-lede" style={lede}>
              Thanks for reaching out — your message just landed in my inbox. I read every one
              personally and I&apos;ll get back to you within 24 hours. A copy of what you sent is
              below for your records.
            </Text>

            <Section className="email-inner" style={inner}>
              <Text className="email-faint" style={label}>
                Subject
              </Text>
              <Text className="email-ink" style={value}>
                {subject}
              </Text>

              <Text className="email-faint" style={label}>
                From
              </Text>
              <Text className="email-ink" style={value}>
                {email}
              </Text>

              <Text className="email-faint" style={label}>
                Message
              </Text>
              <Text className="email-text" style={messageValue}>
                {message}
              </Text>
            </Section>

            <Section className="email-cta-wrap" style={ctaWrap}>
              <Link href={SITE_URL} className="email-cta" style={ctaButton}>
                Visit my portfolio →
              </Link>
            </Section>

            <div className="email-rule email-hr" style={hr} />

            <Section>
              <Text className="email-muted" style={socialLabel}>
                Find me elsewhere
              </Text>
              <Section style={{ textAlign: "center" }}>
                {SOCIALS.map(({ label, href, slug }) => (
                  <Link
                    key={slug}
                    href={href}
                    className="email-social"
                    style={socialIconLink}
                    aria-label={label}
                  >
                    <Img
                      src={EMAIL_ICONS[slug as EmailIconKey]}
                      alt={label}
                      width="22"
                      height="22"
                      style={socialIconImg}
                    />
                  </Link>
                ))}
              </Section>
            </Section>
          </Section>

          <Section style={footerWrap}>
            <Text className="email-faint" style={footerText}>
              © {year} Lokeshwar Prasad Dewangan ·{" "}
              <Link href={SITE_URL} className="email-faint" style={footerLink}>
                lokeshwardewangan.in
              </Link>
            </Text>
            <Text className="email-faint" style={{ ...footerText, marginTop: "6px" }}>
              Sent to {email}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactConfirmation;
