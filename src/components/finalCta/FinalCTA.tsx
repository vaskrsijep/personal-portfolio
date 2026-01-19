"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../button/Button";

export default function FinalCTA() {
  const t = useTranslations("finalCta");

  return (
    <div className="w-full py-32 px-5 md:px-20 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 items-center"
        >
          <h2 className="text-5xl md:text-8xl font-bold uppercase leading-tight">
            {t("heading")}
          </h2>
          <p className="text-xl md:text-3xl font-light text-black/70 max-w-3xl leading-relaxed">
            {t("description")}
          </p>
          <Link href="/contact" className="mt-8">
            <Button>
              <span className="text-2xl uppercase font-medium">
                {t("button")}
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
