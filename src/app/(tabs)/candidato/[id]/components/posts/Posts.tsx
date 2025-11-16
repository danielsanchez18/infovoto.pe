import React from 'react'
import { PostsGrid } from './components/posts-grid/PostsGrid'

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

interface PostsProps {
  posts: Post[];
  candidateData: CandidateInfo;
}

export const Posts = ({ posts, candidateData }: PostsProps) => {
  return (
    <div>
      <PostsGrid posts={posts} candidateData={candidateData} />
    </div>
  )
}
