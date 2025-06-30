"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-transparent">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-95 z-0"
      >
        <source src="/videos/mountain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="bg-white/80 p-6 sm:p-10 rounded-xl text-center max-w-2xl shadow-2xl backdrop-blur-sm"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Dr. Serena Blake, PsyD
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
            A safe space to feel, heal and grow.
          </h2>

          {/* Book button */}
          <a
            href="#contact"
            className="inline-block bg-blue-300/50 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-500 transition mb-6"
          >
            Book a Free Consult
          </a>

          {/* Description */}
          <p className="text-sm sm:text-base text-blue-800 bg-white/90 p-4 rounded-lg shadow-sm">
           Whether you&apos;re feeling overwhelmed, stuck, or simply need someone to talk to— I&apos;m here. I offer thoughtful, personalized support to help you navigate life with clarity and confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
