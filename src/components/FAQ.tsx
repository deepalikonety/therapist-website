"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
  {
    question: "What types of therapy does Dr. Blake offer?",
    answer:
      "Dr. Blake specializes in cognitive-behavioral therapy (CBT), mindfulness-based approaches, trauma-focused therapy, and relationship counseling tailored to your unique needs.",
  },
  {
    question: "Is therapy right for me even if I'm not in crisis?",
    answer:
      "Absolutely. Therapy isn’t only for crises. Many clients seek therapy for personal growth, emotional clarity, and improving everyday relationships or decision-making.",
  },
  {
    question: "How often will I need to attend sessions?",
    answer:
      "Most clients attend sessions weekly or bi-weekly, but the schedule is flexible and based on your preferences, needs, and progress.",
  },
  {
    question: "Is everything I say in therapy confidential?",
    answer:
      "Yes. Your privacy is extremely important. All sessions are confidential unless there’s a risk of harm to you or others, in accordance with legal and ethical guidelines.",
  },
  {
    question: "Do you offer online or virtual therapy sessions?",
    answer:
      "Yes, Dr. Blake offers secure, HIPAA-compliant online sessions for clients who prefer remote access or are located outside the local area.",
  },
  {
    question: "Do you accept insurance or offer sliding-scale rates?",
    answer:
      "At this time, Dr. Blake does not accept insurance but does offer a limited number of sliding-scale slots based on financial need. Please reach out to discuss options.",
  },
  {
    question: "Can I book a session for my child or partner?",
    answer:
      "Yes, Dr. Blake works with teens, adults, and couples. If you're unsure what type of session is appropriate, a free consultation can help clarify next steps.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white px-6" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl md:text-4xl font-bold text-slate-800">FAQ</h2>
        <p className="text-gray-600 mt-2">Frequently Asked Questions</p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 text-left font-medium text-lg flex justify-between items-center text-slate-800"
            >
              {faq.question}
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 1.5 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
