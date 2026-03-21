"use client"

import { site } from "@/content/site"
import { WhatsAppIcon } from "./icons/whatsapp-icon"

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
