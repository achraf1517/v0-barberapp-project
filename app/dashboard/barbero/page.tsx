"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  XCircle,
  LogOut,
  LogIn,
  UserCheck,
  Phone,
  Mail,
  Scissors,
  Star,
} from "lucide-react"

// Datos simulados
const citasHoy = [
  {
    id: 1,
    cliente: "Juan Pérez",
    servicio: "Corte + Barba",
    hora: "10:00",
    duracion: 60,
    precio: 45,
    estado: "confirmada",
    telefono: "+34 123 456 789",
  },
  {
    id: 2,
    cliente: "María García",
    servicio: "Corte Moderno",
    hora: "11:30",
    duracion: 45,
    precio: 35,
    estado: "pendiente",
    telefono: "+34 987 654 321",
  },
  {
    id: 3,
    cliente: "Carlos López",
    servicio: "Arreglo de Barba",
    hora: "15:00",
    duracion: 30,
    precio: 20,
    estado: "confirmada",
    telefono: "+34 555 123 456",
  },
]

const fichasClientes = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@email.com",
    telefono: "+34 123 456 789",
    ultimaCita: "2024-01-25",
    servicioFavorito: "Corte + Barba",
    totalCitas: 12,
    valoracion: 5,
  },
  {
    id: 2,
    nombre: "María García",
    email: "maria@email.com",
    telefono: "+34 987 654 321",
    ultimaCita: "2024-01-20",
    servicioFavorito: "Corte Moderno",
    totalCitas: 8,
    valoracion: 5,
  },
]

export default function BarberoDashboard() {
  const [activeTab, setActiveTab] = useState("citas")
  const [fichado, setFichado] = useState(false)
  const [horaEntrada, setHoraEntrada] = useState<string | null>(null)

  const handleFichar = () => {
    const ahora = new Date().toLocaleTimeString()
    if (!fichado) {
      setFichado(true)
      setHoraEntrada(ahora)
      console.log("Fichaje de entrada:", ahora)
    } else {
      setFichado(false)
      console.log("Fichaje de salida:", ahora)
      console.log("Tiempo trabajado desde:", horaEntrada)
      setHoraEntrada(null)
    }
  }

  const handleConfirmarCita = (citaId: number) => {
    console.log("Confirmando cita:", citaId)
    // Aquí implementarías la lógica para confirmar la cita
  }

  const handleCancelarCita = (citaId: number) => {
    console.log("Cancelando cita:", citaId)
    // Aquí implementarías la lógica para cancelar la cita
  }

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "confirmada":
        return "bg-green-600 text-white"
      case "pendiente":
        return "bg-yellow-600 text-white"
      case "cancelada":
        return "bg-red-600 text-white"
      default:
        return "bg-gray-600 text-white"
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
              <p className="text-sm text-gray-400 font-semibold">Panel de Barbero</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-black px-3 py-1">
              BARBERO
            </Badge>
            <Button
              onClick={handleFichar}
              className={`font-black px-4 py-2 rounded-lg transition-all duration-300 ${
                fichado
                  ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                  : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
              }`}
            >
              {fichado ? <LogOut className="w-4 h-4 mr-2" /> : <LogIn className="w-4 h-4 mr-2" />}
              {fichado ? "Salir" : "Entrar"}
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside className="w-64 border-r-2 border-red-900/30 min-h-screen p-6 bg-gradient-to-b from-red-950/10 to-black">
          <div className="mb-6">
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/30 rounded-lg p-4">
              <h3 className="font-black text-white mb-2">Estado de Fichaje</h3>
              <div className="flex items-center space-x-2">
                {fichado ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 font-bold">Trabajando</span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-500 font-bold">Fuera de servicio</span>
                  </>
                )}
              </div>
              {horaEntrada && <p className="text-gray-400 text-sm mt-2">Entrada: {horaEntrada}</p>}
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { id: "citas", label: "Mis Citas", icon: Calendar },
              { id: "clientes", label: "Fichas de Clientes", icon: UserCheck },
              { id: "estadisticas", label: "Mis Estadísticas", icon: Scissors },
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
          {activeTab === "citas" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Mis Citas de Hoy</h2>

              <div className="grid gap-6">
                {citasHoy.map((cita) => (
                  <Card
                    key={cita.id}
                    className="bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/30 hover:border-red-500/50 transition-all duration-300 shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-xl font-black text-white">{cita.cliente}</h3>
                            <Badge className={getEstadoColor(cita.estado)}>{cita.estado}</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                              <Scissors className="w-4 h-4 text-red-500" />
                              <span>{cita.servicio}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-red-500" />
                              <span>
                                {cita.hora} ({cita.duracion}min)
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-red-500" />
                              <span>{cita.telefono}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-red-500 font-bold">€{cita.precio}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {cita.estado === "pendiente" && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => handleConfirmarCita(cita.id)}
                                className="bg-green-600 hover:bg-green-700 font-bold"
                              >
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Confirmar
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => handleCancelarCita(cita.id)}
                                className="bg-red-600 hover:bg-red-700 font-bold"
                              >
                                <XCircle className="w-3 h-3 mr-1" />
                                Cancelar
                              </Button>
                            </>
                          )}
                          {cita.estado === "confirmada" && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-bold">
                              <User className="w-3 h-3 mr-1" />
                              Ver Cliente
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

          {activeTab === "clientes" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Fichas de Clientes</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {fichasClientes.map((cliente) => (
                  <Card
                    key={cliente.id}
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 hover:border-red-500/50 transition-all duration-300 shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-black text-white flex items-center justify-between">
                        {cliente.nombre}
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: cliente.valoracion }, (_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-red-500" />
                          <span>{cliente.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-red-500" />
                          <span>{cliente.telefono}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-red-500" />
                          <span>Última cita: {cliente.ultimaCita}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Scissors className="w-4 h-4 text-red-500" />
                          <span>Favorito: {cliente.servicioFavorito}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <UserCheck className="w-4 h-4 text-red-500" />
                          <span>Total citas: {cliente.totalCitas}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold">
                        Ver Historial Completo
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "estadisticas" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Mis Estadísticas</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: "Citas Este Mes", value: "45", color: "text-blue-500" },
                  { title: "Ingresos Mes", value: "€1,890", color: "text-green-500" },
                  { title: "Valoración Media", value: "4.9", color: "text-yellow-500" },
                  { title: "Clientes Regulares", value: "23", color: "text-purple-500" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30"
                  >
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-400 text-sm font-semibold">{stat.title}</p>
                      <p className={`text-3xl font-black ${stat.color} mt-2`}>{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30">
                  <CardHeader>
                    <CardTitle className="text-xl font-black text-white">Servicios Más Populares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { servicio: "Corte + Barba", cantidad: 18, porcentaje: 40 },
                        { servicio: "Corte Moderno", cantidad: 15, porcentaje: 33 },
                        { servicio: "Arreglo de Barba", cantidad: 12, porcentaje: 27 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white font-semibold">{item.servicio}</span>
                            <span className="text-gray-400">{item.cantidad} citas</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-red-600 to-red-700 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${item.porcentaje}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30">
                  <CardHeader>
                    <CardTitle className="text-xl font-black text-white">Horarios Más Solicitados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { hora: "10:00 - 12:00", cantidad: 12, porcentaje: 35 },
                        { hora: "15:00 - 17:00", cantidad: 10, porcentaje: 29 },
                        { hora: "17:00 - 19:00", cantidad: 8, porcentaje: 24 },
                        { hora: "12:00 - 15:00", cantidad: 4, porcentaje: 12 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white font-semibold">{item.hora}</span>
                            <span className="text-gray-400">{item.cantidad} citas</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-red-600 to-red-700 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${item.porcentaje}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}
