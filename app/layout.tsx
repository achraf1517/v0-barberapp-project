import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AURA BarberCloud - La Barbería del Futuro",
  description:
    "Plataforma web de gestión de barbería con reservas inteligentes, estilos únicos y experiencia premium. Donde el estilo cobra vida.",
  keywords: "barbería, corte de pelo, barba, reservas online, estilo, Madrid",
  authors: [{ name: "AURA BarberCloud" }],
  openGraph: {
    title: "AURA BarberCloud - La Barbería del Futuro",
    description:
      "Experimenta el futuro de la barbería. Reservas inteligentes, estilos únicos, y una experiencia que trasciende lo ordinario.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
