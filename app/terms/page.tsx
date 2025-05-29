import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de BarberCloud',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>
        <div className="prose prose-invert">
          <p>Términos y condiciones de BarberCloud...</p>
          {/* Add your terms content here */}
        </div>
      </div>
    </div>
  );
}
