"use client";
import { motion } from "framer-motion";


export default function About() {
 
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between"
      >
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Dr. Blake</h2>
          <p className="text-gray-700 text-justify">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li>Location: 1287 Maplewood Drive, Los Angeles, CA 90026</li>
            <li>Phone: (323) 555-0192</li>
            <li>Email: serena@blakepsychology.com</li>
            <li>In-person: Tue & Thu, 10 AM–6 PM</li>
            <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
            <li>Experience: 8 years, 500+ client sessions</li>
          </ul>
        </div>

        <div className="relative w-full max-w-[400px] aspect-[5/5]">
          <motion.img
            src="/images/dr-blake.jpg"
            alt="Dr. Serena Blake"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
