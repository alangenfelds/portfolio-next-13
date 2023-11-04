"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import SubmitButton from "./submit-button";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 1,
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:alangenfeld@gmail.com">
          alangenfeld@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const result = await sendEmail(formData);

          if (result.error) {
            toast.error(result.error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          required
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          maxLength={200}
          placeholder="Your email"
        />
        <textarea
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
