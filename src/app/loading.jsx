"use client";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <>
      <div
        className="flex justify-center items-center fixed top-0 inset-0 left-0 h-[100vh] w-[100vw] bg-black z-[1000]"
        // initial={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.5 }}
      >
        <div className="spinner">
          <style jsx>{`
            .spinner {
              margin: 100px auto;
              width: 40px;
              height: 40px;
              position: relative;
            }

            .spinner div {
              display: inline-block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: #333;
              animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
              border: 6px solid #f9f9f9;
              border-color: #f9f9f9 transparent transparent transparent;
            }

            @keyframes spinner {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
          <div />
        </div>
      </div>
    </>
  );
};
export default Loading;
