"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, ArrowLeft, Shield } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdmin: false,
  })
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          isAdmin: formData.isAdmin
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al iniciar sesión');
      }

      // Redirigir según el rol y tipo de login
      if (data.user.rol === 'admin' && formData.isAdmin) {
        router.push('/dashboard/admin');
      } else if (data.user.rol === 'cliente') {
        router.push('/dashboard/cliente');
      } else if (data.user.rol === 'barbero') {
        router.push('/dashboard/barbero');
      } else {
        router.push('/dashboard/cliente');
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left side - Logo */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-red-500 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-red-500 rotate-12"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-red-500 rotate-45"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Image
              src="/logo-aura.png"
              alt="Aura Logo"
              width={300}
              height={300}
              className="mx-auto mb-8 brightness-110 drop-shadow-2xl"
            />
            <h1 className="text-6xl font-black mb-4">
              BARBER<span className="text-red-500">CLOUD</span>
            </h1>
            <p className="text-xl text-gray-300">Bienvenido de vuelta</p>
          </motion.div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>

          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-black text-white">Iniciar Sesión</CardTitle>
              <CardDescription className="text-gray-400">Accede a tu cuenta de BarberCloud</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 rounded bg-red-500/10 border border-red-500 text-red-500">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-medium">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm text-gray-400">
                    <input type="checkbox" className="rounded border-gray-700 bg-black/50" />
                    <span>Recordarme</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-red-500 hover:text-red-400">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-black px-2 text-gray-400">o</span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => setFormData({ ...formData, isAdmin: true })}
                  variant="outline"
                  className="w-full mt-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 rounded-lg"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Acceso Administrador
                </Button>

                <Link href="/invitado">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 rounded-lg"
                  >
                    Entrar como Invitado
                  </Button>
                </Link>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  ¿No tienes cuenta?{" "}
                  <Link href="/register" className="text-red-500 hover:text-red-400 font-semibold">
                    Regístrate aquí
                  </Link>
                </p>
              </div>

              {/* Demo credentials */}
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="text-sm font-semibold text-white mb-2">Credenciales de prueba:</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>Admin: admin@aura.com</div>
                  <div>Barbero: barbero@aura.com</div>
                  <div>Cliente: cualquier otro email</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
