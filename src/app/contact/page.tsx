"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (_error) {
      // Added underscore to indicate intentionally unused parameter
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen bg-custom-light py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-center text-gray-600 mb-8">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E32832] focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E32832] focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-2 px-6 rounded-full text-white font-medium transition-colors
                  ${
                    status === "sending"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#171716] hover:bg-[#E32832]"
                  }`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
