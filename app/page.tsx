"use client"

import { motion } from "framer-motion"
import { Calendar, Scissors, Users, ArrowRight, Phone, Mail, MapPin, Star, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const float = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Logo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
          <Image src="/logo-aura.png" alt="Aura Logo Background" width={1200} height={1200} className="blur-sm" />
        </div>
      </div>

      {/* Aggressive Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-900/10" />
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-red-500 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-red-600 rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-red-400 rotate-45 animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-red-500 rotate-12 animate-pulse delay-700"></div>
        </div>
        {/* Red glow effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 border-b border-red-900/30 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Image 
                src="/logo-aura.png" 
                alt="Aura Logo" 
                width={50} 
                height={50} 
                priority 
                className="brightness-110" 
              />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wider">
                BARBER<span className="text-red-500 drop-shadow-lg">CLOUD</span>
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-red-500 to-transparent w-full"></div>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="text-red-500 font-bold border-b-2 border-red-500 pb-1 shadow-lg">
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-white hover:text-red-500 transition-all duration-300 font-semibold hover:drop-shadow-lg"
            >
              Servicios
            </Link>
            <Link
              href="/galeria"
              className="text-white hover:text-red-500 transition-all duration-300 font-semibold hover:drop-shadow-lg"
            >
              Galería
            </Link>
            <Link
              href="/contacto"
              className="text-white hover:text-red-500 transition-all duration-300 font-semibold hover:drop-shadow-lg"
            >
              Contacto
            </Link>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/login">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-6 py-2 rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 border border-red-500/50">
                Iniciar Sesión
              </Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div className="mb-4" {...fadeUp}>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-red-500" />
                <span className="text-red-500 font-bold uppercase tracking-wider">Experiencia Premium</span>
              </div>
            </motion.div>

            <motion.h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight" {...fadeUp}>
              Experiencia{" "}
              <span className="text-red-500 drop-shadow-2xl bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                AURA
              </span>{" "}
              en
              <br />
              cada corte
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              {...fadeUp}
              transition={{ delay: 0.2 }}
            >
              Gestiona tu barbería con la plataforma más <span className="text-red-500 font-bold">avanzada</span>.
              Reservas, clientes, inventario y más en un solo lugar.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" {...fadeUp} transition={{ delay: 0.4 }}>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-red-500/30 transition-all duration-300 border border-red-500/50 group">
                  Registrarse <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/invitado">
                <Button
                  variant="outline"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-black px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                >
                  Entrar como invitado
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Reservation Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border-2 border-red-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-red-500/20 transition-all duration-300"
            {...fadeUp}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-6">
              <div className="relative mb-4">
                <Image src="/logo-aura.png" alt="Aura Logo" width={80} height={80} className="mx-auto" />
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl"></div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Reserva tu cita ahora</h3>
              <p className="text-gray-400">Elige entre nuestros servicios premium y los mejores barberos.</p>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-3 rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                Reservar Cita
              </Button>
              <div className="text-center text-sm text-gray-400 flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span>Disponible 24/7 • Confirmación inmediata</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-red-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h3 className="text-5xl font-black text-center mb-16" {...fadeUp}>
            ¿Por qué elegir <span className="text-red-500 drop-shadow-lg">AURA</span>?
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Reservas Inteligentes",
                description: "Sistema avanzado de reservas con disponibilidad en tiempo real y confirmación automática",
              },
              {
                icon: <Scissors className="w-12 h-12" />,
                title: "Maestros del Estilo",
                description: "Barberos expertos especializados en las últimas tendencias y técnicas profesionales",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Experiencia Premium",
                description: "Atención personalizada, ambiente exclusivo y servicios de la más alta calidad",
              },
            ].map((feature, index) => (
              <motion.div key={index} className="group" {...fadeUp} transition={{ delay: index * 0.2 }}>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border-2 border-red-900/30 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-red-500/20">
                  <div className="text-red-500 mb-6 group-hover:text-red-400 transition-colors drop-shadow-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-black mb-4 text-white">{feature.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-black to-red-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clientes Satisfechos" },
              { number: "50+", label: "Estilos Únicos" },
              { number: "5", label: "Calificación Promedio", icon: <Star className="w-6 h-6 text-red-500 inline" /> },
              { number: "24/7", label: "Reservas Online" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" {...fadeUp} transition={{ delay: index * 0.1 }}>
                <div className="text-4xl md:text-5xl font-black text-red-500 mb-2 flex items-center justify-center gap-1 drop-shadow-lg">
                  {stat.number}
                  {stat.icon}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-red-600/20 via-black to-red-600/20 border-2 border-red-500/30 rounded-2xl p-12 shadow-2xl"
            {...fadeUp}
          >
            <h3 className="text-5xl font-black mb-6">
              ¿Listo para transformar tu <span className="text-red-500 drop-shadow-lg">estilo</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a la revolución del estilo. Reserva tu cita ahora y descubre por qué AURA es diferente.
            </p>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-12 py-4 text-xl rounded-lg shadow-xl hover:shadow-red-500/30 transition-all duration-300 border border-red-500/50">
                Comenzar Ahora
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-red-900/30 py-12 px-6 bg-gradient-to-t from-red-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo-aura.png" alt="Aura Logo" width={40} height={40} />
                <span className="text-xl font-black">
                  BARBER<span className="text-red-500">CLOUD</span>
                </span>
              </div>
              <p className="text-gray-400">La barbería del futuro, disponible hoy.</p>
            </div>

            <div>
              <h4 className="text-white font-black mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-red-500 transition-colors cursor-pointer">Corte de Cabello</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Arreglo de Barba</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Tratamientos Faciales</li>
                <li className="hover:text-red-500 transition-colors cursor-pointer">Styling Premium</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/servicios" className="hover:text-red-500 transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/galeria" className="hover:text-red-500 transition-colors">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-red-500 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-red-500 transition-colors">
                    Iniciar Sesión
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>+34 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>info@aura.com</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-red-900/30 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AURA BarberCloud. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
