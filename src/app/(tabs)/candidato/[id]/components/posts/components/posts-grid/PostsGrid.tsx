import React from 'react'
import { PostCard } from '../post-card/PostCard'

export const PostsGrid = () => {
  // Posts de ejemplo - reemplaza con datos reales desde tu API/base de datos
  const posts = [
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      content: "Hoy presentamos nuestro plan de gobierno enfocado en mejorar la educación pública. Invertiremos en infraestructura, capacitación docente y acceso a tecnología en zonas rurales."
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440002",
      content: "Nuestra propuesta de seguridad ciudadana incluye aumentar el presupuesto para la Policía Nacional en un 30% y fortalecer el sistema judicial."
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440003",
      content: "Mañana estaremos en Arequipa presentando nuestras propuestas para el desarrollo del sur del país."
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440004",
      content: "Comprometidos con la transparencia: publicaremos todos nuestros gastos de campaña en nuestro sitio web."
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440005",
      content: "La salud es un derecho. Proponemos ampliar la cobertura del SIS y construir 100 nuevos centros de salud."
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440006",
      content: "Debatiremos hoy a las 8pm en Canal N sobre nuestras propuestas económicas para reactivar el país."
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440007",
      content: "Infraestructura vial: conectaremos todas las capitales de provincia con carreteras asfaltadas en 4 años."
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440008",
      content: "Gracias por su apoyo. Juntos construiremos un Perú más justo, próspero y seguro para todos."
    }
  ];

  return (
    <div className='grid gap-5 max-w-160'>
      {posts.map((post) => (
        <PostCard 
          key={post.id}
          postId={post.id}
          content={post.content}
        />
      ))}
    </div>
  )
}
