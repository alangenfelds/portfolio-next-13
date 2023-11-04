import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "./types";

type SectionInViewProps = {
  sectionName: SectionName;
  threshold?: number;
};

export const useSectionInView = ({
  sectionName,
  threshold = 0.75,
}: SectionInViewProps) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [sectionName, inView, timeOfLastClick, setActiveSection]);

  return {
    ref,
  };
};
