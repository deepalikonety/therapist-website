"use client";

import dynamic from "next/dynamic";

// Lazy-load FAQ only on client
const FAQ = dynamic(() => import("./FAQ"), { ssr: false });

export default function FAQWrapper() {
  return <FAQ />;
}
