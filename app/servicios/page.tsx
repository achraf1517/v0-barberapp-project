"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Clock, Euro, Star } from "lucide-react"

const servicios = [
  {
    categoria: "Cabello",
    items: [
      {
        nombre: "Corte Clásico",
        precio: 25,
        duracion: 30,
        descripcion: "Corte tradicional con tijeras y máquina, incluye lavado y peinado",
        popular: false,
      },
      {
        nombre: "Corte Moderno",
        precio: 35,
        duracion: 45,
        descripcion: "Cortes actuales y tendencias, fade, undercut, texturizado",
        popular: true,
      },
      {
        nombre: "Corte + Barba",
        precio: 45,
        duracion: 60,
        descripcion: "Corte completo más arreglo de barba profesional",
        popular: true,
      },
    ],
  },
  {
    categoria: "Barba",
    items: [
      {
        nombre: "Arreglo de Barba",
        precio: 20,
        duracion: 30,
        descripcion: "Perfilado, recorte y hidratación de barba",
        popular: false,
      },
      {
        nombre: "Barba Completa",
        precio: 30,
        duracion: 45,
        descripcion: "Diseño completo, perfilado, aceites y bálsamos premium",
        popular: true,
      },
      {
        nombre: "Bigote Vintage",
        precio: 15,
        duracion: 20,
        descripcion: "Estilizado clásico de bigote con ceras especiales",
        popular: false,
      },
    ],
  },
  {
    categoria: "Piel",
    items: [
      {
        nombre: "Tratamiento Facial",
        precio: 40,
        duracion: 50,
        descripcion: "Limpieza profunda, exfoliación e hidratación facial",
        popular: false,
      },
      {
        nombre: "Afeitado Clásico",
        precio: 35,
        duracion: 40,
        descripcion: "Afeitado tradicional con navaja, toallas calientes y aftershave",
        popular: true,
      },
      {
        nombre: "Cejas Masculinas",
        precio: 15,
        duracion: 20,
        descripcion: "Perfilado y arreglo profesional de cejas",
        popular: false,
      },
    ],
  },
]

export default function ServiciosPage() {
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
            <Link href="/servicios" className="text-red-500 font-semibold border-b-2 border-red-500 pb-1">
              Servicios
            </Link>
            <Link href="/galeria" className="text-white hover:text-red-500 transition-colors font-medium">
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
              Nuestros <span className="text-red-500">Servicios</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de servicios profesionales diseñados para realzar tu estilo personal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {servicios.map((categoria, categoriaIndex) => (
            <motion.div
              key={categoria.categoria}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoriaIndex * 0.2 }}
            >
              <h2 className="text-3xl font-black mb-8 text-center">{categoria.categoria}</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.items.map((servicio, servicioIndex) => (
                  <motion.div
                    key={servicio.nombre}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoriaIndex * 0.2 + servicioIndex * 0.1 }}
                  >
                    <Card className="bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full relative">
                      {servicio.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-red-600 text-white font-bold">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}

                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                          <Scissors className="w-5 h-5 text-red-500" />
                          {servicio.nombre}
                        </CardTitle>
                        <CardDescription className="text-gray-400">{servicio.descripcion}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2 text-red-500 font-bold">
                            <Euro className="w-4 h-4" />
                            <span className="text-2xl">{servicio.precio}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{servicio.duracion} min</span>
                          </div>
                        </div>

                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg">
                          Reservar Ahora
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-black mb-6">
              ¿Listo para tu <span className="text-red-500">transformación</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Reserva tu cita ahora y experimenta el mejor servicio de barbería en Madrid.
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
                  Más Información
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
