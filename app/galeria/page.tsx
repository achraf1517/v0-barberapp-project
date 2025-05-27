"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "todos", label: "Todos" },
  { id: "cortes", label: "Cortes" },
  { id: "degradados", label: "Degradados" },
  { id: "barbas", label: "Barbas" },
  { id: "diseños", label: "Diseños" },
]

const galleryImages = [
  { id: 1, category: "cortes", title: "Corte Clásico", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, category: "degradados", title: "Degradado Moderno", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, category: "barbas", title: "Barba Estilizada", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, category: "diseños", title: "Diseño Artístico", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, category: "cortes", title: "Corte Fade", image: "/placeholder.svg?height=300&width=300" },
  { id: 6, category: "degradados", title: "Degradado Alto", image: "/placeholder.svg?height=300&width=300" },
  { id: 7, category: "barbas", title: "Barba Completa", image: "/placeholder.svg?height=300&width=300" },
  { id: 8, category: "diseños", title: "Líneas Precisas", image: "/placeholder.svg?height=300&width=300" },
]

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredImages =
    activeCategory === "todos" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/logo-aura.png" alt="Aura Barbería" width={50} height={50} className="brightness-110" />
            <h1 className="text-2xl font-black">
              BARBER<span className="text-red-500">CLOUD</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/servicios" className="text-white hover:text-red-500 transition-colors font-medium">
              Servicios
            </Link>
            <Link href="/galeria" className="text-red-500 font-semibold border-b-2 border-red-500 pb-1">
              Galería
            </Link>
            <Link href="/contacto" className="text-white hover:text-red-500 transition-colors font-medium">
              Contacto
            </Link>
          </div>

          <Link href="/login">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-black mb-6">
              Nuestra <span className="text-red-500">Galería</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explora nuestros mejores trabajos y descubre el estilo que mejor se adapta a ti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-square"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-black mb-6">¿Te gusta lo que ves?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Reserva tu cita ahora y obtén el estilo que siempre has querido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg rounded-lg">
                  Reservar Cita
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-lg"
                >
                  Contactar
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo-aura.png" alt="Aura Logo" width={40} height={40} />
            <span className="text-xl font-black">
              BARBER<span className="text-red-500">CLOUD</span>
            </span>
          </div>
          <p className="text-gray-400">&copy; 2024 AURA BarberCloud. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
