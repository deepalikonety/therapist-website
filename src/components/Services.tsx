"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Helping you navigate overwhelming thoughts and find balance through cognitive-behavioral therapy and mindfulness techniques.",
    image: "/images/service-anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Strengthen your relationships through guided sessions that foster understanding, communication, and emotional connection.",
    image: "/images/servicerelationship.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from emotional wounds with personalized care using evidence-based methods in a compassionate, supportive environment.",
    image: "/images/service-trauma.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 md:px-12 bg-blue-50" id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Services</h2>
        <p className="text-slate-600 text-base md:text-lg">
          Explore how Dr. Blake can support your journey to healing and growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
          >
            <div className="relative h-89 w-full aspect-square rounded-full overflow-hidden border-4 border-blue-300/50 shadow-sm mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 bg-gray-100 p-4 rounded-md">
                <h4 className="font-semibold text-slate-700 mb-2">Session Fees</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>$200</strong> – Individual therapy session</li>
                  <li><strong>$240</strong> – Couples therapy session</li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
