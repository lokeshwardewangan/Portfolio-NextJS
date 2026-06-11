import { resend, EMAIL_ADMIN, EMAIL_FROM } from "./client";
import {
  ContactConfirmation,
  type ContactConfirmationProps,
} from "./templates/ContactConfirmation";

export async function sendContactConfirmation(data: ContactConfirmationProps) {
  const { name, email } = data;

  const { data: result, error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: email,
    bcc: EMAIL_ADMIN,
    subject: `Thanks for reaching out, ${name}`,
    react: <ContactConfirmation {...data} />,
  });

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`);
  }

  return result;
}
