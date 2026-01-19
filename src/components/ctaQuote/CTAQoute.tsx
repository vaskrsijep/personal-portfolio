"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CTAQuote() {
  const t = useTranslations("ctaQuote");

  return (
    <div className="w-full py-32 px-5 md:px-20 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/vaskrsijepanic_portret.png"
                alt="Vaskrsije Panic"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold uppercase">
              {t("heading")}
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              {t("quote")}
            </p>
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-6xl md:text-8xl font-bold text-primary">
                  {t("stats.completed")}
                </span>
                <span className="text-lg md:text-xl text-black/60 uppercase tracking-wide">
                  {t("stats.completedLabel")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-6xl md:text-8xl font-bold text-primary">
                  {t("stats.inProgress")}
                </span>
                <span className="text-lg md:text-xl text-black/60 uppercase tracking-wide">
                  {t("stats.inProgressLabel")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
