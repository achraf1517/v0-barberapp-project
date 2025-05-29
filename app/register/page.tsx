"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, ArrowLeft, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword]         = useState(false);
  const [showConfirm, setShowConfirm]           = useState(false);
  const [loading, setLoading]                   = useState(false);
  const [error, setError]                       = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validaciones
    if (!formData.name.trim()) {
      setError("El nombre es requerido");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError("Email inválido");
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
          role: "cliente"  // Ajustado a 'rol' en el esquema
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Error al registrar");
      }
      
      router.push("/login?registered=true");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-red-500 rotate-45" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-red-500 rotate-12" />
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-red-500 rotate-45" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Image src="/logo-aura.png" alt="Aura Logo" width={300} height={300} />
            <h1 className="text-6xl font-black mb-4">
              BARBER<span className="text-red-500">CLOUD</span>
            </h1>
            <p className="text-xl text-gray-300">Únete a la experiencia</p>
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Link href="/" className="inline-flex items-center text-red-500 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <Card className="bg-gray-900/50 border border-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white">Crear Cuenta</CardTitle>
              <CardDescription className="text-gray-400">Regístrate en BarberCloud como cliente</CardDescription>
              <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-red-600/20 rounded-lg">
                <User className="w-5 h-5 text-red-500" />
                <span className="text-red-500 font-semibold">Registro como Cliente</span>
              </div>
            </CardHeader>

            <CardContent>
              {error && <p className="text-red-500 mb-4">{error}</p>}

             <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+34 123 456 789"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Contraseña */}
                <div className="relative">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña (mínimo 6 caracteres)"
                      value={formData.password}
                      onChange={e => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirmar Contraseña */}
                <div className="relative">
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirma tu contraseña"
                      value={formData.confirmPassword}
                      onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showConfirm ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-700">
                  {loading ? "Registrando..." : "Crear Cuenta"}
                </Button>
              </form>


              <p className="mt-4 text-center text-gray-400">
                ¿Ya tienes cuenta? <Link href="/login" className="text-red-500">Inicia sesión aquí</Link>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}