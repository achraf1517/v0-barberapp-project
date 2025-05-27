"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Clock,
  User,
  MessageCircle,
  Plus,
  History,
  Star,
  LogOut,
  Send,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"

// Datos simulados
const historialCitas = [
  {
    id: 1,
    servicio: "Corte + Barba",
    barbero: "Carlos López",
    fecha: "2024-01-25",
    hora: "10:00",
    precio: 45,
    estado: "completada",
  },
  {
    id: 2,
    servicio: "Corte Moderno",
    barbero: "Luis Rodríguez",
    fecha: "2024-01-15",
    hora: "15:30",
    precio: 35,
    estado: "completada",
  },
  {
    id: 3,
    servicio: "Arreglo de Barba",
    barbero: "Carlos López",
    fecha: "2024-02-05",
    hora: "11:00",
    precio: 20,
    estado: "confirmada",
  },
]

const servicios = [
  { id: 1, nombre: "Corte Clásico", precio: 25, duracion: 30 },
  { id: 2, nombre: "Corte Moderno", precio: 35, duracion: 45 },
  { id: 3, nombre: "Corte + Barba", precio: 45, duracion: 60 },
  { id: 4, nombre: "Arreglo de Barba", precio: 20, duracion: 30 },
]

const barberos = [
  { id: 1, nombre: "Carlos López", especialidad: "Cortes modernos" },
  { id: 2, nombre: "Luis Rodríguez", especialidad: "Barbas clásicas" },
  { id: 3, nombre: "Miguel Torres", especialidad: "Estilos vintage" },
]

const mensajes = [
  {
    id: 1,
    remitente: "Carlos López",
    mensaje: "¡Hola! ¿Cómo te gustó el último corte?",
    hora: "10:30",
    tipo: "recibido",
  },
  { id: 2, remitente: "Yo", mensaje: "¡Perfecto! Muy contento con el resultado", hora: "10:35", tipo: "enviado" },
  {
    id: 3,
    remitente: "Carlos López",
    mensaje: "Me alegra saberlo. ¿Para cuándo la próxima cita?",
    hora: "10:40",
    tipo: "recibido",
  },
]

export default function ClienteDashboard() {
  const [activeTab, setActiveTab] = useState("historial")
  const [nuevaCita, setNuevaCita] = useState({
    servicio: "",
    barbero: "",
    fecha: "",
    hora: "",
  })
  const [nuevoMensaje, setNuevoMensaje] = useState("")

  const handleReservarCita = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nueva cita:", nuevaCita)
    // Aquí implementarías la lógica para reservar la cita
  }

  const handleEnviarMensaje = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nuevo mensaje:", nuevoMensaje)
    setNuevoMensaje("")
    // Aquí implementarías la lógica para enviar el mensaje
  }

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case "completada":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "confirmada":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "cancelada":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Logo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
          <Image src="/logo-aura.png" alt="Aura Logo Background" width={1200} height={1200} className="blur-sm" />
        </div>
      </div>

      {/* Aggressive Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-900/10" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-red-500 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-red-600 rotate-12 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b-2 border-red-900/30 p-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image src="/logo-aura.png" alt="Aura Logo" width={50} height={50} />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wider">
                BARBER<span className="text-red-500 drop-shadow-lg">CLOUD</span>
              </h1>
              <p className="text-sm text-gray-400 font-semibold">Panel de Cliente</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black px-3 py-1">
              CLIENTE
            </Badge>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Salir
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside className="w-64 border-r-2 border-red-900/30 min-h-screen p-6 bg-gradient-to-b from-red-950/10 to-black">
          <nav className="space-y-2">
            {[
              { id: "historial", label: "Historial de Citas", icon: History },
              { id: "reservar", label: "Reservar Cita", icon: Plus },
              { id: "chat", label: "Chat con Barberos", icon: MessageCircle },
              { id: "perfil", label: "Mi Perfil", icon: User },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-red-900/30 border border-transparent hover:border-red-500/30"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "historial" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Historial de Citas</h2>

              <div className="grid gap-6">
                {historialCitas.map((cita) => (
                  <Card
                    key={cita.id}
                    className="bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/30 hover:border-red-500/50 transition-all duration-300 shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-xl font-black text-white">{cita.servicio}</h3>
                            <div className="flex items-center space-x-1">
                              {getEstadoIcon(cita.estado)}
                              <Badge
                                className={
                                  cita.estado === "completada"
                                    ? "bg-green-600 text-white"
                                    : cita.estado === "confirmada"
                                      ? "bg-yellow-600 text-white"
                                      : "bg-red-600 text-white"
                                }
                              >
                                {cita.estado}
                              </Badge>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-red-500" />
                              <span>{cita.barbero}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-red-500" />
                              <span>{cita.fecha}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-red-500" />
                              <span>{cita.hora}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-red-500 font-bold">€{cita.precio}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {cita.estado === "confirmada" && (
                            <Button size="sm" className="bg-red-600 hover:bg-red-700 font-bold">
                              Cancelar
                            </Button>
                          )}
                          {cita.estado === "completada" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold"
                            >
                              <Star className="w-3 h-3 mr-1" />
                              Valorar
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "reservar" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Reservar Nueva Cita</h2>

              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-white">Nueva Reserva</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleReservarCita} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="servicio" className="text-white font-bold">
                          Servicio
                        </Label>
                        <Select
                          value={nuevaCita.servicio}
                          onValueChange={(value) => setNuevaCita({ ...nuevaCita, servicio: value })}
                        >
                          <SelectTrigger className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-red-900/30">
                            {servicios.map((servicio) => (
                              <SelectItem key={servicio.id} value={servicio.nombre}>
                                {servicio.nombre} - €{servicio.precio} ({servicio.duracion}min)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="barbero" className="text-white font-bold">
                          Barbero
                        </Label>
                        <Select
                          value={nuevaCita.barbero}
                          onValueChange={(value) => setNuevaCita({ ...nuevaCita, barbero: value })}
                        >
                          <SelectTrigger className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                            <SelectValue placeholder="Selecciona un barbero" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-red-900/30">
                            {barberos.map((barbero) => (
                              <SelectItem key={barbero.id} value={barbero.nombre}>
                                {barbero.nombre} - {barbero.especialidad}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fecha" className="text-white font-bold">
                          Fecha
                        </Label>
                        <Input
                          id="fecha"
                          type="date"
                          value={nuevaCita.fecha}
                          onChange={(e) => setNuevaCita({ ...nuevaCita, fecha: e.target.value })}
                          className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hora" className="text-white font-bold">
                          Hora
                        </Label>
                        <Select
                          value={nuevaCita.hora}
                          onValueChange={(value) => setNuevaCita({ ...nuevaCita, hora: value })}
                        >
                          <SelectTrigger className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                            <SelectValue placeholder="Selecciona una hora" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-red-900/30">
                            {Array.from({ length: 10 }, (_, i) => {
                              const hora = 9 + i
                              return (
                                <SelectItem key={hora} value={`${hora}:00`}>
                                  {hora}:00
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-3 rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Reservar Cita
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "chat" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Chat con Barberos</h2>

              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 shadow-xl h-96">
                <CardHeader>
                  <CardTitle className="text-xl font-black text-white flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-red-500" />
                    Carlos López
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                    {mensajes.map((mensaje) => (
                      <div
                        key={mensaje.id}
                        className={`flex ${mensaje.tipo === "enviado" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            mensaje.tipo === "enviado"
                              ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                              : "bg-gray-800 text-gray-300"
                          }`}
                        >
                          <p className="text-sm">{mensaje.mensaje}</p>
                          <p className="text-xs opacity-70 mt-1">{mensaje.hora}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleEnviarMensaje} className="flex space-x-2">
                    <Input
                      value={nuevoMensaje}
                      onChange={(e) => setNuevoMensaje(e.target.value)}
                      placeholder="Escribe tu mensaje..."
                      className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "perfil" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Mi Perfil</h2>

              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-white">Información Personal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white font-bold">Nombre Completo</Label>
                      <Input
                        defaultValue="Juan Pérez"
                        className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white font-bold">Email</Label>
                      <Input
                        defaultValue="juan@email.com"
                        className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white font-bold">Teléfono</Label>
                      <Input
                        defaultValue="+34 123 456 789"
                        className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white font-bold">Fecha de Registro</Label>
                      <Input
                        defaultValue="15/01/2024"
                        disabled
                        className="bg-black/50 border-2 border-red-900/30 text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-8 py-2 rounded-lg">
                      Actualizar Perfil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}
