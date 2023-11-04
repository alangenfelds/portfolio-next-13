"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 0.5,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:alangenfeld@gmail.com">
          alangenfeld@gmail.com
        </a>{" "}
        or through this form.
      </p>
    </section>
  );
};

export default Contact;
