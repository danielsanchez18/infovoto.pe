import React from 'react'
import { PostCard } from '../post-card/PostCard'

export const PostsGrid = () => {
  return (
    <div className='grid gap-5 max-w-[40rem]'>
      <PostCard postId="1" content="Votaremos por un futuro mejor. ¡Tu voto cuenta!" />
      <PostCard postId="2" content="Propuestas claras para educación y salud en 2024" />
      <PostCard postId="3" content="Únete a nuestra campaña por el cambio" />
      <PostCard postId="4" content="Transparencia y honestidad en la gestión pública" />
      <PostCard postId="5" content="Infraestructura y empleo para todos los distritos" />
      <PostCard postId="6" content="Seguridad ciudadana es nuestra prioridad" />
      <PostCard postId="7" content="Desarrollo sostenible y protección del ambiente" />
      <PostCard postId="8" content="Participa: tu voto es tu voz en las urnas" />
    </div>
  )
}
