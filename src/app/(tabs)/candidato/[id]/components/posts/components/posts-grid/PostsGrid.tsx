import React from 'react'
import { PostCard } from '../post-card/PostCard'

export const PostsGrid = () => {
  return (
    <div className='grid gap-5 max-w-[40rem]'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}
