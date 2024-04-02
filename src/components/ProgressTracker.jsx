"use client";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
const ProgressTracker = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScrollDistance = () => {
      // Calculate the scroll distance
      const scrollTop = window.pageYOffset; // how much has been scrolled
      const winHeight = window.innerHeight; // height of the viewport
      const docHeight = getDocumentHeight(); // height of the whole document

      // Calculate the percentage of the document that's been scrolled
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition =
        totalDocScrollLength > 0
          ? Math.floor((scrollTop / totalDocScrollLength) * 100)
          : 0; // Prevent division by zero

      setScrollPercentage(scrollPosition);
      console.log(scrollPercentage);
    };

    const getDocumentHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
    };

    window.addEventListener("scroll", calculateScrollDistance);

    return () => {
      window.removeEventListener("scroll", calculateScrollDistance);
    };
  }, []);
  return (
    <div className="fixed bottom-0 inset-x-0 left-0 width-[100vw] z-[99]">
      {scrollPercentage > 1 && <Progress value={scrollPercentage} />}
    </div>
  );
};
export default ProgressTracker;
