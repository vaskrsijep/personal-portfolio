"use client";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      company: t("testimonial1.company"),
      text: t("testimonial1.text"),
      author: t("testimonial1.author"),
      role: t("testimonial1.role"),
    },
    {
      company: t("testimonial2.company"),
      text: t("testimonial2.text"),
      author: t("testimonial2.author"),
      role: t("testimonial2.role"),
    },
    {
      company: t("testimonial3.company"),
      text: t("testimonial3.text"),
      author: t("testimonial3.author"),
      role: t("testimonial3.role"),
    },
    {
      company: t("testimonial4.company"),
      text: t("testimonial4.text"),
      author: t("testimonial4.author"),
      role: t("testimonial4.role"),
    },
  ];

  const testimonialsCount = testimonials.length;

  return (
    <div className="w-full py-32 px-5 md:px-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6">
            {t("heading")}
          </h2>
          <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto mb-4">
            {t("description")}
          </p>
          <p className="text-lg text-black/50">
            {testimonialsCount} {testimonialsCount === 1 ? t("countSingle") : t("countPlural")}
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg h-full flex flex-col"
              >
                <div className="flex-1 mb-6">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
                <div className="border-t border-black/10 pt-6">
                  <p className="text-lg font-bold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-black/60 uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-black/40 mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(69, 92, 233, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #455ce9;
          width: 32px;
          border-radius: 6px;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
}
