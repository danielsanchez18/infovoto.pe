import React from 'react'
import { PostCard } from '../post-card/PostCard'

interface Post {
  id: number;
  title: string;
  content: string;
  status: string;
  authorId: number;
  candidateId: number;
  createdAt: string;
  updatedAt: string;
}

interface CandidateInfo {
  fullName: string;
  photoUrl: string;
}

interface PostsGridProps {
  posts: Post[];
  candidateData: CandidateInfo;
}

export const PostsGrid = ({ posts, candidateData }: PostsGridProps) => {
  if (!posts || posts.length === 0) {
    return (
      <div className='grid gap-5 max-w-160'>
        <p className='text-center text-gray-600 py-10'>
          Este candidato aún no ha publicado nada.
        </p>
      </div>
    );
  }

  return (
    <div className='grid gap-5 max-w-160'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} candidateData={candidateData} />
      ))}
    </div>
  )
}
