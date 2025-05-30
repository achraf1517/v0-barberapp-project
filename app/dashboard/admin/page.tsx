"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Calendar,
  Scissors,
  BarChart3,
  Settings,
  LogOut,
  UserCheck,
  Clock,
  Euro,
  TrendingUp,
  Search,
  Download,
  Shield,
  Star,
  Edit,
  Trash2,
  Plus,
  X,
  Upload,
  Eye,
  AlertTriangle,
  CheckCircle,
  ImageIcon,
} from "lucide-react"

// Datos simulados expandidos
const stats = [
  { title: "Total Clientes", value: "1,234", change: "+12%", icon: Users, color: "text-blue-500" },
  { title: "Citas Hoy", value: "28", change: "+5%", icon: Calendar, color: "text-green-500" },
  { title: "Ingresos Mes", value: "€15,420", change: "+18%", icon: Euro, color: "text-red-500" },
  { title: "Barberos Activos", value: "8", change: "0%", icon: Scissors, color: "text-purple-500" },
]

const usuariosIniciales = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@email.com",
    telefono: "+34 123 456 789",
    rol: "cliente",
    estado: "activo",
    fechaRegistro: "2024-01-15",
    ultimaActividad: "2024-01-30",
  },
  {
    id: 2,
    nombre: "María García",
    email: "maria@email.com",
    telefono: "+34 987 654 321",
    rol: "cliente",
    estado: "activo",
    fechaRegistro: "2024-01-20",
    ultimaActividad: "2024-01-29",
  },
  {
    id: 3,
    nombre: "Carlos López",
    email: "carlos@email.com",
    telefono: "+34 555 123 456",
    rol: "barbero",
    estado: "activo",
    fechaRegistro: "2024-01-10",
    ultimaActividad: "2024-01-30",
  },
  {
    id: 4,
    nombre: "Ana Martín",
    email: "ana@email.com",
    telefono: "+34 666 789 123",
    rol: "cliente",
    estado: "inactivo",
    fechaRegistro: "2024-01-25",
    ultimaActividad: "2024-01-26",
  },
]

const galeriaIniciales = [
  {
    id: 1,
    titulo: "Corte Moderno",
    categoria: "cortes",
    imagen: "/placeholder.svg?height=300&width=300",
    fecha: "2024-01-20",
  },
  {
    id: 2,
    titulo: "Degradado Perfecto",
    categoria: "degradados",
    imagen: "/placeholder.svg?height=300&width=300",
    fecha: "2024-01-18",
  },
  {
    id: 3,
    titulo: "Barba Estilizada",
    categoria: "barbas",
    imagen: "/placeholder.svg?height=300&width=300",
    fecha: "2024-01-15",
  },
  {
    id: 4,
    titulo: "Diseño Artístico",
    categoria: "diseños",
    imagen: "/placeholder.svg?height=300&width=300",
    fecha: "2024-01-12",
  },
]

const serviciosIniciales = [
  {
    id: 1,
    nombre: "Corte Clásico",
    precio: 25,
    duracion: 30,
    activo: true,
    descripcion: "Corte tradicional con tijeras",
  },
  {
    id: 2,
    nombre: "Corte Moderno",
    precio: 35,
    duracion: 45,
    activo: true,
    descripcion: "Cortes actuales y tendencias",
  },
  { id: 3, nombre: "Corte + Barba", precio: 45, duracion: 60, activo: true, descripcion: "Servicio completo" },
  { id: 4, nombre: "Arreglo de Barba", precio: 20, duracion: 30, activo: true, descripcion: "Perfilado y recorte" },
  {
    id: 5,
    nombre: "Tratamiento Facial",
    precio: 40,
    duracion: 50,
    activo: false,
    descripcion: "Limpieza facial profunda",
  },
]

const citasIniciales = [
  {
    id: 1,
    cliente: "Juan Pérez",
    barbero: "Carlos López",
    servicio: "Corte Clásico",
    fecha: "2024-02-05",
    hora: "10:00",
    estado: "confirmada",
    precio: 25,
  },
  {
    id: 2,
    cliente: "María García",
    barbero: "Luis Rodríguez",
    servicio: "Corte Moderno",
    fecha: "2024-02-05",
    hora: "11:00",
    estado: "pendiente",
    precio: 35,
  },
  {
    id: 3,
    cliente: "Carlos Sánchez",
    barbero: "Carlos López",
    servicio: "Arreglo de Barba",
    fecha: "2024-02-05",
    hora: "12:00",
    estado: "completo",
    precio: 20,
  },
  {
    id: 4,
    cliente: "Ana Martín",
    barbero: "Miguel Torres",
    servicio: "Corte + Barba",
    fecha: "2024-02-05",
    hora: "13:00",
    estado: "cancelada",
    precio: 45,
  },
]

const fichajesIniciales = [
  {
    id: 1,
    barbero: "Carlos López",
    fecha: "2024-01-30",
    entrada: "09:00",
    salida: "17:00",
    horas: "8",
    estado: "completo",
  },
  {
    id: 2,
    barbero: "Luis Rodríguez",
    fecha: "2024-01-30",
    entrada: "10:00",
    salida: "18:00",
    horas: "8",
    estado: "completo",
  },
  {
    id: 3,
    barbero: "Miguel Torres",
    fecha: "2024-01-30",
    entrada: "11:00",
    salida: "19:00",
    horas: "8",
    estado: "completo",
  },
]

// Interfaces
interface Usuario {
  id: number
  nombre: string
  email: string
  telefono: string
  rol: string
  estado: string
  fechaRegistro: string
  ultimaActividad: string
}

interface Servicio {
  id: number
  nombre: string
  precio: number
  duracion: number
  descripcion: string
  activo: boolean
}

interface Cita {
  id: number
  cliente: string
  barbero: string
  servicio: string
  fecha: string
  hora: string
  estado: string
  precio: number
}

interface Fichaje {
  id: number
  barbero: string
  fecha: string
  entrada: string
  salida: string
  horas: string
  estado: string
}

interface ImagenGaleria {
  id: number
  titulo: string
  categoria: string
  imagen: string
  fecha: string
}

// Actualizar los estados con los tipos
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filtroRol, setFiltroRol] = useState("todos")
  const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosIniciales)
  const [galeria, setGaleria] = useState<ImagenGaleria[]>(galeriaIniciales)
  const [servicios, setServicios] = useState<Servicio[]>(serviciosIniciales)
  const [citas, setCitas] = useState<Cita[]>(citasIniciales)
  const [fichajes, setFichajes] = useState<Fichaje[]>(fichajesIniciales)

  // Estados para modales
  const [modalAbierto, setModalAbierto] = useState("")
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<Usuario | null>(null)
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicio | null>(null)
  const [imagenSeleccionada, setImagenSeleccionada] = useState<ImagenGaleria | null>(null)

  // Estados para formularios
  const [nuevoUsuario, setNuevoUsuario] = useState<Omit<Usuario, 'id' | 'fechaRegistro' | 'ultimaActividad'>>({
    nombre: "",
    email: "",
    telefono: "",
    rol: "cliente",
    estado: "activo",
  })

  const [nuevoServicio, setNuevoServicio] = useState<Omit<Servicio, 'id'>>({
    nombre: "",
    precio: 0,
    duracion: 0,
    descripcion: "",
    activo: true,
  })

  const [nuevaImagen, setNuevaImagen] = useState<Omit<ImagenGaleria, 'id' | 'imagen' | 'fecha'>>({
    titulo: "",
    categoria: "cortes",
  })

  // Filtrar usuarios
  const usuariosFiltrados = usuarios.filter((usuario) => {
    const coincideBusqueda =
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
    const coincideRol = filtroRol === "todos" || usuario.rol === filtroRol
    return coincideBusqueda && coincideRol
  })

  // Funciones de gestión de usuarios
  const handlePromoteUser = (userId: number) => {
    setUsuarios(usuarios.map((usuario) => (usuario.id === userId ? { ...usuario, rol: "barbero" } : usuario)))
    setModalAbierto("")
    console.log(`Usuario ${userId} promovido a barbero`)
  }

  const handleDeleteUser = (userId: number) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== userId))
    setModalAbierto("")
    console.log(`Usuario ${userId} eliminado`)
  }

  interface UsuarioEditado extends Partial<Usuario> {
    id: number
  }

  const handleEditUser = (usuarioEditado: UsuarioEditado) => {
    setUsuarios(
      usuarios.map((usuario) => (usuario.id === usuarioEditado.id ? { ...usuario, ...usuarioEditado } : usuario)),
    )
    setModalAbierto("")
    console.log("Usuario editado:", usuarioEditado)
  }

  const handleAddUser = () => {
    const nuevoId = Math.max(...usuarios.map((u) => u.id)) + 1
    const usuario = {
      ...nuevoUsuario,
      id: nuevoId,
      fechaRegistro: new Date().toISOString().split("T")[0],
      ultimaActividad: new Date().toISOString().split("T")[0],
    }
    setUsuarios([...usuarios, usuario])
    setNuevoUsuario({ nombre: "", email: "", telefono: "", rol: "cliente", estado: "activo" })
    setModalAbierto("")
    console.log("Nuevo usuario añadido:", usuario)
  }

  // Funciones de gestión de servicios
  const handleAddService = () => {
    const nuevoId = Math.max(...servicios.map((s) => s.id)) + 1
    const servicio = {
      ...nuevoServicio,
      id: nuevoId,
      precio: nuevoServicio.precio,
      duracion: nuevoServicio.duracion,
    }
    setServicios([...servicios, servicio])
    setNuevoServicio({ nombre: "", precio: 0, duracion: 0, descripcion: "", activo: true })
    setModalAbierto("")
    console.log("Nuevo servicio añadido:", servicio)
  }

  const handleEditService = (servicioEditado: Servicio) => {
    setServicios(
      servicios.map((servicio) =>
        servicio.id === servicioEditado.id ? { ...servicio, ...servicioEditado } : servicio,
      ),
    )
    setModalAbierto("")
    console.log("Servicio editado:", servicioEditado)
  }

  const handleDeleteService = (servicioId: number) => {
    setServicios(servicios.filter((servicio) => servicio.id !== servicioId))
    setModalAbierto("")
    console.log(`Servicio ${servicioId} eliminado`)
  }

  // Funciones de gestión de galería
  const handleAddImage = () => {
    const nuevoId = Math.max(...galeria.map((g) => g.id)) + 1
    const imagen = {
      ...nuevaImagen,
      id: nuevoId,
      imagen: "/placeholder.svg?height=300&width=300",
      fecha: new Date().toISOString().split("T")[0],
    }
    setGaleria([...galeria, imagen])
    setNuevaImagen({ titulo: "", categoria: "cortes" })
    setModalAbierto("")
    console.log("Nueva imagen añadida:", imagen)
  }

  const handleDeleteImage = (imagenId: number) => {
    setGaleria(galeria.filter((imagen) => imagen.id !== imagenId))
    setModalAbierto("")
    console.log(`Imagen ${imagenId} eliminada`)
  }

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "activo":
      case "confirmada":
      case "completo":
        return "bg-green-600 text-white"
      case "pendiente":
        return "bg-yellow-600 text-white"
      case "inactivo":
      case "cancelada":
        return "bg-red-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
  }

  const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-black text-white">{title}</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          {children}
        </div>
      </div>
    )
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
              <p className="text-sm text-gray-400 font-semibold">Panel de Administración</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white font-black px-3 py-1 shadow-lg">
              <Shield className="w-3 h-3 mr-1" />
              ADMIN
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
              { id: "overview", label: "Resumen", icon: BarChart3 },
              { id: "users", label: "Usuarios", icon: Users },
              { id: "appointments", label: "Citas", icon: Calendar },
              { id: "attendance", label: "Fichajes", icon: Clock },
              { id: "services", label: "Servicios", icon: Scissors },
              { id: "gallery", label: "Galería", icon: Star },
              { id: "settings", label: "Configuración", icon: Settings },
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
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-8 text-white">Dashboard General</h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 hover:border-red-500/50 transition-all duration-300 shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-400 text-sm font-semibold">{stat.title}</p>
                          <p className="text-3xl font-black text-white">{stat.value}</p>
                          <p
                            className={`text-sm font-bold ${stat.change.startsWith("+") ? "text-green-500" : "text-gray-400"}`}
                          >
                            {stat.change} vs mes anterior
                          </p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color} drop-shadow-lg`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-white">Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-900/30 to-black/30 rounded-lg border border-green-500/30">
                      <UserCheck className="w-5 h-5 text-green-500" />
                      <span className="text-white font-semibold">Nuevo cliente registrado: Juan Pérez</span>
                      <span className="text-gray-400 text-sm ml-auto">Hace 2 horas</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-900/30 to-black/30 rounded-lg border border-blue-500/30">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="text-white font-semibold">Cita confirmada para mañana 10:00</span>
                      <span className="text-gray-400 text-sm ml-auto">Hace 3 horas</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-900/30 to-black/30 rounded-lg border border-purple-500/30">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <span className="text-white font-semibold">Carlos López fichó entrada 09:00</span>
                      <span className="text-gray-400 text-sm ml-auto">Hace 5 horas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "users" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-black text-white">Gestión de Usuarios</h2>
                <Button
                  onClick={() => setModalAbierto("addUser")}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-black shadow-lg"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Usuario
                </Button>
              </div>

              {/* Search and Filters */}
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar usuarios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                  />
                </div>
                <Select value={filtroRol} onValueChange={setFiltroRol}>
                  <SelectTrigger className="w-48 bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                    <SelectValue placeholder="Filtrar por rol" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-red-900/30">
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="cliente">Clientes</SelectItem>
                    <SelectItem value="barbero">Barberos</SelectItem>
                    <SelectItem value="admin">Administradores</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Users Table */}
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 shadow-xl">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b-2 border-red-900/30">
                        <tr className="bg-gradient-to-r from-red-950/20 to-black">
                          <th className="text-left p-4 text-gray-300 font-black">Usuario</th>
                          <th className="text-left p-4 text-gray-300 font-black">Email</th>
                          <th className="text-left p-4 text-gray-300 font-black">Rol</th>
                          <th className="text-left p-4 text-gray-300 font-black">Estado</th>
                          <th className="text-left p-4 text-gray-300 font-black">Registro</th>
                          <th className="text-left p-4 text-gray-300 font-black">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usuariosFiltrados.map((usuario) => (
                          <tr
                            key={usuario.id}
                            className="border-b border-red-900/20 hover:bg-red-950/10 transition-colors"
                          >
                            <td className="p-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                                  <span className="text-white font-black text-sm">{usuario.nombre.charAt(0)}</span>
                                </div>
                                <span className="text-white font-bold">{usuario.nombre}</span>
                              </div>
                            </td>
                            <td className="p-4 text-gray-300 font-medium">{usuario.email}</td>
                            <td className="p-4">
                              <Badge
                                className={
                                  usuario.rol === "barbero"
                                    ? "bg-purple-600 text-white font-bold"
                                    : usuario.rol === "admin"
                                      ? "bg-red-600 text-white font-bold"
                                      : "bg-blue-600 text-white font-bold"
                                }
                              >
                                {usuario.rol.toUpperCase()}
                              </Badge>
                            </td>
                            <td className="p-4">
                              <Badge className={getEstadoColor(usuario.estado)}>{usuario.estado.toUpperCase()}</Badge>
                            </td>
                            <td className="p-4 text-gray-300 font-medium">{usuario.fechaRegistro}</td>
                            <td className="p-4">
                              <div className="flex space-x-2">
                                {usuario.rol === "cliente" && (
                                  <Button
                                    size="sm"
                                    onClick={() => {
                                      setUsuarioSeleccionado(usuario)
                                      setModalAbierto("promoteUser")
                                    }}
                                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold"
                                  >
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    Promover
                                  </Button>
                                )}
                                <Button
                                  size="sm"
                                  onClick={() => {
                                    setUsuarioSeleccionado(usuario)
                                    setModalAbierto("editUser")
                                  }}
                                  variant="outline"
                                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold"
                                >
                                  <Edit className="w-3 h-3 mr-1" />
                                  Editar
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => {
                                    setUsuarioSeleccionado(usuario)
                                    setModalAbierto("deleteUser")
                                  }}
                                  className="bg-red-600 hover:bg-red-700 text-white font-bold"
                                >
                                  <Trash2 className="w-3 h-3 mr-1" />
                                  Eliminar
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "appointments" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-black text-white">Gestión de Citas</h2>
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-black shadow-lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Nueva Cita
                </Button>
              </div>

              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 shadow-xl">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b-2 border-red-900/30">
                        <tr className="bg-gradient-to-r from-red-950/20 to-black">
                          <th className="text-left p-4 text-gray-300 font-black">Cliente</th>
                          <th className="text-left p-4 text-gray-300 font-black">Barbero</th>
                          <th className="text-left p-4 text-gray-300 font-black">Servicio</th>
                          <th className="text-left p-4 text-gray-300 font-black">Fecha/Hora</th>
                          <th className="text-left p-4 text-gray-300 font-black">Estado</th>
                          <th className="text-left p-4 text-gray-300 font-black">Precio</th>
                          <th className="text-left p-4 text-gray-300 font-black">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {citas.map((cita) => (
                          <tr
                            key={cita.id}
                            className="border-b border-red-900/20 hover:bg-red-950/10 transition-colors"
                          >
                            <td className="p-4 text-white font-bold">{cita.cliente}</td>
                            <td className="p-4 text-gray-300 font-medium">{cita.barbero}</td>
                            <td className="p-4 text-gray-300 font-medium">{cita.servicio}</td>
                            <td className="p-4 text-gray-300 font-medium">
                              {cita.fecha} {cita.hora}
                            </td>
                            <td className="p-4">
                              <Badge className={getEstadoColor(cita.estado)}>{cita.estado.toUpperCase()}</Badge>
                            </td>
                            <td className="p-4 text-red-500 font-black">€{cita.precio}</td>
                            <td className="p-4">
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold"
                                >
                                  <Edit className="w-3 h-3 mr-1" />
                                  Editar
                                </Button>
                                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                                  <Trash2 className="w-3 h-3 mr-1" />
                                  Cancelar
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "attendance" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-black text-white">Control de Fichajes</h2>
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-black shadow-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar CSV
                </Button>
              </div>

              {/* Filters */}
              <div className="flex gap-4 mb-6">
                <Select>
                  <SelectTrigger className="w-48 bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                    <SelectValue placeholder="Filtrar por barbero" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-red-900/30">
                    <SelectItem value="todos">Todos los barberos</SelectItem>
                    <SelectItem value="carlos">Carlos López</SelectItem>
                    <SelectItem value="luis">Luis Rodríguez</SelectItem>
                    <SelectItem value="miguel">Miguel Torres</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                  defaultValue="2024-01-30"
                />
              </div>

              {/* Attendance Table */}
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 shadow-xl">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b-2 border-red-900/30">
                        <tr className="bg-gradient-to-r from-red-950/20 to-black">
                          <th className="text-left p-4 text-gray-300 font-black">Barbero</th>
                          <th className="text-left p-4 text-gray-300 font-black">Fecha</th>
                          <th className="text-left p-4 text-gray-300 font-black">Entrada</th>
                          <th className="text-left p-4 text-gray-300 font-black">Salida</th>
                          <th className="text-left p-4 text-gray-300 font-black">Total Horas</th>
                          <th className="text-left p-4 text-gray-300 font-black">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fichajes.map((fichaje) => (
                          <tr
                            key={fichaje.id}
                            className="border-b border-red-900/20 hover:bg-red-950/10 transition-colors"
                          >
                            <td className="p-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                                  <span className="text-white font-black text-sm">{fichaje.barbero.charAt(0)}</span>
                                </div>
                                <span className="text-white font-bold">{fichaje.barbero}</span>
                              </div>
                            </td>
                            <td className="p-4 text-gray-300 font-medium">{fichaje.fecha}</td>
                            <td className="p-4 text-green-400 font-black">{fichaje.entrada}</td>
                            <td className="p-4 text-red-400 font-black">{fichaje.salida}</td>
                            <td className="p-4 text-white font-black">{fichaje.horas}</td>
                            <td className="p-4">
                              <Badge className={getEstadoColor(fichaje.estado)}>
                                {fichaje.estado === "activo" ? "EN CURSO" : "COMPLETO"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "services" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-black text-white">Gestión de Servicios</h2>
                <Button
                  onClick={() => setModalAbierto("addService")}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-black shadow-lg"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Servicio
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicios.map((servicio) => (
                  <Card
                    key={servicio.id}
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 hover:border-red-500/50 transition-all duration-300 shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-black text-white flex items-center justify-between">
                        {servicio.nombre}
                        <Badge className={servicio.activo ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
                          {servicio.activo ? "ACTIVO" : "INACTIVO"}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-gray-400 text-sm">{servicio.descripcion}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 font-semibold">Precio:</span>
                          <span className="text-red-500 font-black text-lg">€{servicio.precio}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 font-semibold">Duración:</span>
                          <span className="text-white font-bold">{servicio.duracion} min</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() => {
                            setServicioSeleccionado(servicio)
                            setModalAbierto("editService")
                          }}
                          variant="outline"
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold flex-1"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Editar
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => {
                            setServicioSeleccionado(servicio)
                            setModalAbierto("deleteService")
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold flex-1"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Eliminar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-black text-white">Gestión de Galería</h2>
                <Button
                  onClick={() => setModalAbierto("addImage")}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-black shadow-lg"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Añadir Imagen
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {galeria.map((imagen) => (
                  <Card
                    key={imagen.id}
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-red-900/30 hover:border-red-500/50 transition-all duration-300 shadow-lg overflow-hidden"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={imagen.imagen || "/placeholder.svg"}
                        alt={imagen.titulo}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 flex space-x-1">
                        <Button
                          size="sm"
                          onClick={() => {
                            setImagenSeleccionada(imagen)
                            setModalAbierto("viewImage")
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-1"
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => {
                            setImagenSeleccionada(imagen)
                            setModalAbierto("deleteImage")
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white p-1"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-white font-bold mb-1">{imagen.titulo}</h3>
                      <div className="flex justify-between items-center text-sm">
                        <Badge className="bg-purple-600 text-white">{imagen.categoria}</Badge>
                        <span className="text-gray-400">{imagen.fecha}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </main>
      </div>

      {/* Modales */}

      {/* Modal Promover Usuario */}
      <Modal isOpen={modalAbierto === "promoteUser"} onClose={() => setModalAbierto("")} title="Promover a Barbero">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-yellow-900/30 border border-yellow-500/30 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span className="text-white">
              ¿Estás seguro de promover a <strong>{usuarioSeleccionado?.nombre}</strong> a barbero?
            </span>
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={() => {
                if (usuarioSeleccionado?.id !== undefined) {
                  handlePromoteUser(usuarioSeleccionado.id)
                }
              }}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 font-bold flex-1"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Confirmar
            </Button>
            <Button
              onClick={() => setModalAbierto("")}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal Eliminar Usuario */}
      <Modal isOpen={modalAbierto === "deleteUser"} onClose={() => setModalAbierto("")} title="Eliminar Usuario">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-red-900/30 border border-red-500/30 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-white">
              ¿Estás seguro de eliminar a <strong>{usuarioSeleccionado?.nombre}</strong>? Esta acción no se puede
              deshacer.
            </span>
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={() => {
                if (usuarioSeleccionado?.id !== undefined) {
                  handleDeleteUser(usuarioSeleccionado.id)
                }
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold flex-1"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Eliminar
            </Button>
            <Button
              onClick={() => setModalAbierto("")}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal Añadir Usuario */}
      <Modal isOpen={modalAbierto === "addUser"} onClose={() => setModalAbierto("")} title="Nuevo Usuario">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white font-bold">Nombre Completo</Label>
            <Input
              value={nuevoUsuario.nombre}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
              className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              placeholder="Nombre completo"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white font-bold">Email</Label>
            <Input
              type="email"
              value={nuevoUsuario.email}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
              className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              placeholder="email@ejemplo.com"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white font-bold">Teléfono</Label>
            <Input
              value={nuevoUsuario.telefono}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, telefono: e.target.value })}
              className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              placeholder="+34 123 456 789"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white font-bold">Rol</Label>
            <Select
              value={nuevoUsuario.rol}
              onValueChange={(value) => setNuevoUsuario({ ...nuevoUsuario, rol: value })}
            >
              <SelectTrigger className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-red-900/30">
                <SelectItem value="cliente">Cliente</SelectItem>
                <SelectItem value="barbero">Barbero</SelectItem>
                <SelectItem value="admin">Administrador</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={handleAddUser}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold flex-1"
            >
              <Plus className="w-4 h-4 mr-2" />
              Crear Usuario
            </Button>
            <Button
              onClick={() => setModalAbierto("")}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal Editar Usuario */}
      <Modal isOpen={modalAbierto === "editUser"} onClose={() => setModalAbierto("")} title="Editar Usuario">
        {usuarioSeleccionado && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white font-bold">Nombre Completo</Label>
              <Input
                defaultValue={usuarioSeleccionado.nombre}
                onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, nombre: e.target.value })}
                className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold">Email</Label>
              <Input
                type="email"
                defaultValue={usuarioSeleccionado.email}
                onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, email: e.target.value })}
                className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold">Teléfono</Label>
              <Input
                defaultValue={usuarioSeleccionado.telefono}
                onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, telefono: e.target.value })}
                className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold">Estado</Label>
              <Select
                value={usuarioSeleccionado.estado}
                onValueChange={(value) => setUsuarioSeleccionado({ ...usuarioSeleccionado, estado: value })}
              >
                <SelectTrigger className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-red-900/30">
                  <SelectItem value="activo">Activo</SelectItem>
                  <SelectItem value="inactivo">Inactivo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex space-x-3">
              <Button
                onClick={() => handleEditUser(usuarioSeleccionado)}
                className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 font-bold flex-1"
              >
                <Edit className="w-4 h-4 mr-2" />
                Guardar Cambios
              </Button>
              <Button
                onClick={() => setModalAbierto("")}
                variant="outline"
                className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white flex-1"
              >
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Añadir Servicio */}
      <Modal isOpen={modalAbierto === "addService"} onClose={() => setModalAbierto("")} title="Nuevo Servicio">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white font-bold">Nombre del Servicio</Label>
            <Input
              value={nuevoServicio.nombre}
              onChange={(e) => setNuevoServicio({ ...nuevoServicio, nombre: e.target.value })}
              className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              placeholder="Ej: Corte Premium"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white font-bold">Precio (€)</Label>
              <Input
                type="number"
                value={nuevoServicio.precio}
                onChange={(e) => setNuevoServicio({ ...nuevoServicio, precio: Number(e.target.value) })}
                className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                placeholder="25"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white font-bold">Duración (min)</Label>
              <Input
                type="number"
                value={nuevoServicio.duracion}
                onChange={(e) => setNuevoServicio({ ...nuevoServicio, duracion: Number(e.target.value) })}
                className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
                placeholder="30"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-white font-bold">Descripción</Label>
            <Textarea
              value={nuevoServicio.descripcion}
              onChange={(e) => setNuevoServicio({ ...nuevoServicio, descripcion: e.target.value })}
              className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              placeholder="Descripción del servicio..."
              rows={3}
            />
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={handleAddService}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold flex-1"
            >
              <Plus className="w-4 h-4 mr-2" />
              Crear Servicio
            </Button>
            <Button
              onClick={() => setModalAbierto("")}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal Añadir Imagen */}
      <Modal isOpen={modalAbierto === "addImage"} onClose={() => setModalAbierto("")} title="Añadir Imagen a Galería">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white font-bold">Título</Label>
            <Input
              value={nuevaImagen.titulo}
              onChange={(e) => setNuevaImagen({ ...nuevaImagen, titulo: e.target.value })}
              className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500"
              placeholder="Ej: Corte Moderno"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white font-bold">Categoría</Label>
            <Select
              value={nuevaImagen.categoria}
              onValueChange={(value) => setNuevaImagen({ ...nuevaImagen, categoria: value })}
            >
              <SelectTrigger className="bg-black/50 border-2 border-red-900/30 text-white focus:border-red-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-red-900/30">
                <SelectItem value="cortes">Cortes</SelectItem>
                <SelectItem value="degradados">Degradados</SelectItem>
                <SelectItem value="barbas">Barbas</SelectItem>
                <SelectItem value="diseños">Diseños</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-white font-bold">Imagen</Label>
            <div className="border-2 border-dashed border-red-500/30 rounded-lg p-8 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-400">Arrastra una imagen aquí o haz clic para seleccionar</p>
              <Button variant="outline" className="mt-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                Seleccionar Archivo
              </Button>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={handleAddImage}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold flex-1"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Añadir Imagen
            </Button>
            <Button
              onClick={() => setModalAbierto("")}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal Ver Imagen */}
      <Modal isOpen={modalAbierto === "viewImage"} onClose={() => setModalAbierto("")} title="Vista de Imagen">
        {imagenSeleccionada && (
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={imagenSeleccionada.imagen || "/placeholder.svg"}
                alt={imagenSeleccionada.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-lg">{imagenSeleccionada.titulo}</h3>
              <div className="flex justify-between items-center">
                <Badge className="bg-purple-600 text-white">{imagenSeleccionada.categoria}</Badge>
                <span className="text-gray-400">{imagenSeleccionada.fecha}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Eliminar Imagen */}
      <Modal isOpen={modalAbierto === "deleteImage"} onClose={() => setModalAbierto("")} title="Eliminar Imagen">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-red-900/30 border border-red-500/30 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-white">
              ¿Estás seguro de eliminar la imagen <strong>{imagenSeleccionada?.titulo}</strong>?
            </span>
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={() => {
                if (imagenSeleccionada?.id !== undefined) {
                  handleDeleteImage(imagenSeleccionada.id)
                }
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold flex-1"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Eliminar
            </Button>
            <Button
              onClick={() => setModalAbierto("")}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
