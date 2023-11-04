"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!message) {
    return {
      error: "Invalid message",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    subject: "Message from portfolio contact form",
    to: "alangenfeld@gmail.com",
    text: `${message} from ${senderEmail}`,
  });
};
