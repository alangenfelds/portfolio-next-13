"use server";

import React from "react";
import { Resend } from "resend";

import { getErrorMessage, validateString } from "@/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 200)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "alangenfeld@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: `${senderEmail}`,
      // text: `${message} from ${senderEmail}`,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: "Failed to send email. Error: " + getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
