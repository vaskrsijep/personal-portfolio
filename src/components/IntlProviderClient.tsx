"use client";

import { ReactNode, useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const locale = useLocaleStore((state) => state.locale);

  useEffect(() => {
    setMounted(true);
    // Rehydrate store after mount
    if (typeof window !== "undefined") {
      useLocaleStore.persist.rehydrate();
    }
  }, []);

  const messages = messagesMap[locale] ?? messagesMap.en;

  // During SSR/build, use default locale
  if (!mounted) {
    return (
      <NextIntlClientProvider 
        locale="en" 
        messages={messagesMap.en}
        onError={() => {
          // Suppress errors during build
        }}
      >
        {children}
      </NextIntlClientProvider>
    );
  }

  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      onError={() => {
        // Suppress ENVIRONMENT_FALLBACK errors
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}

