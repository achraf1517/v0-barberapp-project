"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Aquí implementarías el envío del formulario
  }

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
            <Link href="/contacto" className="text-red-500 font-semibold border-b-2 border-red-500 pb-1">
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

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-black mb-8">
              Información de <span className="text-red-500">Contacto</span>
            </h1>

            <div className="space-y-8">
              {/* Dirección */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Dirección</h3>
                  <p className="text-gray-300">Calle Principal 123, Madrid, España</p>
                  <p className="text-gray-300">Código Postal: 28001</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
                  <p className="text-gray-300">+34 912 345 678</p>
                  <p className="text-gray-300">+34 612 345 678 (WhatsApp)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">info@barbercloud.com</p>
                  <p className="text-gray-300">reservas@barbercloud.com</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Horario</h3>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 - 20:00</p>
                  <p className="text-gray-300">Sábados: 10:00 - 18:00</p>
                  <p className="text-gray-300">Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 bg-gray-800 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-400">Mapa de ubicación</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-black mb-8">
              Envíanos un <span className="text-red-500">Mensaje</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-white font-medium">
                    Nombre Completo <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-white font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="asunto" className="text-white font-medium">
                    Asunto <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.asunto}
                    onValueChange={(value) => setFormData({ ...formData, asunto: value })}
                  >
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-red-500 focus:ring-red-500">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="reserva">Reserva de cita</SelectItem>
                      <SelectItem value="informacion">Información general</SelectItem>
                      <SelectItem value="queja">Queja o sugerencia</SelectItem>
                      <SelectItem value="colaboracion">Colaboración</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje" className="text-white font-medium">
                  Mensaje <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2"
              >
                Enviar Mensaje <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

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
