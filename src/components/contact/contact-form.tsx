"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = t("form.errors.name");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t("form.errors.email");
    if (!form.subject) newErrors.subject = t("form.errors.subject");
    if (!form.message.trim()) newErrors.message = t("form.errors.message");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-5">
      {/* Form */}
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center rounded-2xl bg-green-medium/60 border border-cream/10 p-16 text-center"
            >
              <CheckCircle size={48} className="text-orange mb-4" />
              <p className="text-xl font-bold text-cream">{t("form.success")}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <BlurFade delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      {t("form.name")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder={t("form.name")}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="w-full rounded-2xl border-2 border-orange/50 bg-green-medium/60 px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 transition-colors"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-xs text-orange">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      {t("form.email")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={t("form.email")}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="w-full rounded-2xl border-2 border-orange/50 bg-green-medium/60 px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 transition-colors"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-orange">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </BlurFade>

              {/* Subject */}
              <BlurFade delay={0.2}>
                <div>
                  <label htmlFor="contact-subject" className="sr-only">
                    {t("form.subject")}
                  </label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className="w-full rounded-2xl border-2 border-orange/50 bg-green-medium/60 px-5 py-4 text-sm text-cream focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-green-medium text-cream">
                      {t("form.subject")}
                    </option>
                    {["general", "reservation", "catering", "other"].map(
                      (key) => (
                        <option
                          key={key}
                          value={key}
                          className="bg-green-medium text-cream"
                        >
                          {t(`form.subjects.${key}`)}
                        </option>
                      )
                    )}
                  </select>
                  {errors.subject && (
                    <p id="subject-error" role="alert" className="mt-1 text-xs text-orange">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </BlurFade>

              {/* Message */}
              <BlurFade delay={0.3}>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder={t("form.message")}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={6}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full rounded-2xl border-2 border-orange/50 bg-green-medium/60 px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-orange">
                      {errors.message}
                    </p>
                  )}
                </div>
              </BlurFade>

              {/* Submit */}
              <BlurFade delay={0.4}>
                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-2xl bg-orange px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-light focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
                  >
                    <Send size={16} />
                    {t("form.submit")}
                  </motion.button>
                </div>
              </BlurFade>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Info sidebar */}
      <div className="lg:col-span-2">
        <BlurFade delay={0.2}>
          <div className="rounded-2xl bg-green-medium/60 border border-cream/10 p-8 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wide text-cream">
              {t("info.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-cream/70">{t("info.address")}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-cream/70">{t("info.phone")}</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-cream/70">{t("info.email")}</p>
              </div>
            </div>

            <div className="border-t border-cream/10 pt-6">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-cream">
                    {t("info.hours.title")}
                  </p>
                  <p className="text-sm text-cream/70 mt-1">
                    {t("info.hours.weekdays")}
                  </p>
                  <p className="text-sm text-cream/70">
                    {t("info.hours.weekend")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
