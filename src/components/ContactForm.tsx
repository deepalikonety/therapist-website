"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.phone) newErrors.phone = "Phone is required.";
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.message) newErrors.message = "Please tell us what brings you here.";
    if (!form.time) newErrors.time = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    setForm((prev) => ({
      ...prev,
      [name]: isCheckbox
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const existing = JSON.parse(localStorage.getItem("submissions") || "[]");
      const updated = [...existing, { ...form, submittedAt: new Date().toISOString() }];
      localStorage.setItem("submissions", JSON.stringify(updated));

      toast.success("Submitted successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        agree: false,
      });

      setErrors({});
    } else {
      setErrors(validationErrors);
      toast.error("Please fill all required fields.");
    }
  };

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mb-10 text-center"
      >
        <h2 className="text-4xl md:text-4xl font-bold text-slate-800 mb-4">Contact</h2>
        <p className="text-gray-600">Get in touch with Dr. Blake – we’re here to support you.</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-2xl mx-auto p-6 md:p-10 rounded-xl shadow-md space-y-5"
      >
        {/* Input Fields */}
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Preferred time to reach you", name: "time", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label} *</label>
            <input
              type={type}
              name={name}
              value={form[name as keyof typeof form] as string}
              onChange={handleChange}
              className="input"
            />
            {errors[name] && (
              <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        {/* Textarea */}
        <div>
          <label className="block font-medium mb-1">What brings you here? *</label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="input"
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Checkbox */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1"
          />
          <label htmlFor="agree" className="text-sm">
            I agree to be contacted *
          </label>
        </div>
        {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition w-full"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}
