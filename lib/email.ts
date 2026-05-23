import { Resend } from "resend";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured. Set it in your environment.");
  }
  return new Resend(apiKey);
};

export interface SendEmailParams {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, text, replyTo }: SendEmailParams) {
  try {
    const resend = getResend();
    const payload = {
      from: "MedTrack Services <info@medtrackservices.com>",
      to,
      subject,
      ...(html ? { html } : {}),
      ...(text ? { text } : {}),
      ...(replyTo ? { reply_to: replyTo } : {}),
    } as const;
    const response = await resend.emails.send(payload as any);

    if (response.error) {
      throw new Error(`Resend email failed: ${response.error.message}`);
    }

    if (!response.data?.id) {
      throw new Error("Email send failed: missing response id.");
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Resend email error: ${error.message}`);
    }
    throw new Error("Resend email error: unknown error");
  }
}