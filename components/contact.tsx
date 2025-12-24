"use client";

import type React from "react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import AnimatedHeadingWithParagraphs from "./common/AnimatedHwithP";
import { socials } from "@/config";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const res = fetch("/api/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary text-sm font-medium">Contact</span>
          </div>

          <AnimatedHeadingWithParagraphs
            heading="Let's Work Together"
            paragraphs={[
              `Have a project in mind? Let's discuss how we can create something
            amazing together.`,
            ]}
          />
        </div>

        <div className="glass p-8 md:p-12 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-muted-foreground text-sm mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full bg-muted border border-white/10 px-4 py-3 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-muted-foreground text-sm mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full bg-muted border border-white/10 px-4 py-3 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-muted-foreground text-sm mb-2 block">
                Your Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-muted border border-white/10 px-4 py-3 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {submitted ? "Message Sent!" : "Send Message"}
              {!submitted && (
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-12">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-primary/50 transition-all group"
                aria-label={social.label}
              >
                <Icon
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                  size={20}
                />
              </a>
            );
          })}
        </div>

        {/* CV Download */}
        <div className="mt-8 text-center">
          <a
            href="/pdf/Igashi_fullStack.pdf"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Download my CV
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
