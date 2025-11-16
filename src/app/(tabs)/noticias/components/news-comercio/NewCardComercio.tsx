import Link from 'next/link'
import React from 'react'

export type NewsComercio = {
  id: string;
  category: string;
  categoryUrl: string;
  title: string;
  url: string;
  imageUrl: string;
};

type NewCardComercioProps = {
  news: NewsComercio;
};

export const NewCardComercio = ({ news }: NewCardComercioProps) => {
  return (
    <div className='grid gap-y-3'>
  
      <p className='uppercase font-bold text-sm text-primary w-fit line-clamp-1'>
        {news.category}
      </p>
      
      <Link href={news.url}
        target="_blank" 
        className='grid grid-cols-2 gap-x-2 group'>
        <h6 className='font-semibold text-balance line-clamp-6 leading-tight group-hover:underline group-hover:text-primary'>{news.title}</h6>
        <div className='w-full h-28 bg-gray-200 contain-content'>
          <img src={news.imageUrl} alt={news.title} 
            className='object-cover w-full h-full'/>
        </div>
      </Link>
      
    </div>
  )
}
