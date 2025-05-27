"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Users, MessageCircle, ArrowRight } from "lucide-react"

export default function InvitadoPage() {
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
            <Link href="/galeria" className="text-white hover:text-red-500 transition-colors font-medium">
              Galería
            </Link>
            <Link href="/contacto" className="text-white hover:text-red-500 transition-colors font-medium">
              Contacto
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="/login">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-6 py-2 rounded-lg"
              >
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8">
              <Image src="/logo-aura.png" alt="Aura Logo" width={120} height={120} className="mx-auto mb-6" />
            </div>
            <h1 className="text-5xl font-black mb-6">
              Bienvenido como <span className="text-red-500">Invitado</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explora nuestros servicios, galería y ponte en contacto con nosotros. Para acceder a todas las
              funcionalidades, regístrate como cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lo que puedes hacer como invitado
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-12 h-12" />,
                title: "Ver Servicios",
                description: "Explora todos nuestros servicios de barbería, precios y detalles",
                link: "/servicios",
                linkText: "Ver Servicios",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Galería de Trabajos",
                description: "Descubre nuestros mejores trabajos y estilos en nuestra galería",
                link: "/galeria",
                linkText: "Ver Galería",
              },
              {
                icon: <MessageCircle className="w-12 h-12" />,
                title: "Contactar",
                description: "Ponte en contacto con nosotros para cualquier consulta",
                link: "/contacto",
                linkText: "Contactar",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="text-red-500 mb-4 flex justify-center">{feature.icon}</div>
                    <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Link href={feature.link}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg">
                        {feature.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 px-6 bg-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-black mb-6">
              ¿Quieres más <span className="text-red-500">funcionalidades</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Regístrate como cliente para acceder a reservas, historial de citas, chat con barberos y mucho más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg rounded-lg">
                  Registrarse Ahora
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-lg"
                >
                  Ya tengo cuenta
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
