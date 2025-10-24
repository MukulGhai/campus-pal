"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isDark, setIsDark] = useState(false)

  return (
    <>
      <html lang="en" className={isDark ? "dark" : ""}>
        {children}
      </html>
      <Analytics />
    </>
  )
}
