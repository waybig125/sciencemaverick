"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const previouslyAccepted = localStorage.getItem("acceptedCookies");
    setShowBanner(!previouslyAccepted);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("acceptedCookies", true);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed bottom-0 left-0 right-0 bg-black dark:bg-white dark:text-black text-white p-4 z-[101]"
        >
          <p>
            <div
              className={`w-[50px] h-[50px] flex rounded-full border-1 border-black bg-white`}
            >
              <Image src="cookie.svg" width="50" height="50" />
            </div>
            We use cookies to improve experience. For more details check
            <Link href="privacy-policy" className="hover:opacity-[0.9]">
              {" "}
              privacy policy.
            </Link>
          </p>
          <button
            onClick={acceptCookies}
            className="mt-2 bg-white text-black px-2 py-1 rounded dark:bg-black dark:text-white"
          >
            Accept
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
