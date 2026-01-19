"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Experience() {
  const t = useTranslations("aboutPage");

  return (
    <div className="w-full py-32 px-5 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold uppercase mb-16"
        >
          {t("experienceHeading")}
        </motion.h2>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-l-4 border-primary pl-8 py-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {t("experience1")}
            </h3>
            <p className="text-xl md:text-2xl text-black/70 mb-1">
              {t("experience1Role")}
            </p>
            <p className="text-lg md:text-xl text-black/60 mb-2">
              {t("experience1Location")}
            </p>
            <p className="text-sm md:text-base text-black/50 uppercase tracking-wide">
              {t("experience1Years")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border-l-4 border-primary pl-8 py-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {t("experience2")}
            </h3>
            <p className="text-xl md:text-2xl text-black/70 mb-2">
              {t("experience2Role")}
            </p>
            <p className="text-sm md:text-base text-black/50 uppercase tracking-wide">
              {t("experience2Years")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-l-4 border-primary pl-8 py-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {t("experience3")}
            </h3>
            <p className="text-sm md:text-base text-black/50 uppercase tracking-wide">
              {t("experience3Years")}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
