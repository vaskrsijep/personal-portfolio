"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { useLocaleStore } from "@/lib/store/useLocaleStore";
import enMessages from "@/messages/en";
import srMessages from "@/messages/sr";

const messagesMap = {
  en: enMessages,
  sr: srMessages,
};

export default function IntlProviderClient({
  children,
}: {
  children: ReactNode;
}) {
  const locale = useLocaleStore((state) => state.locale);

  const messages = messagesMap[locale] ?? messagesMap.en;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

