import Link from 'next/link'
import React from 'react'

export const NewCardGeneral = () => {
  return (
    <Link href="/noticia/dasdasd" className='grid gap-y-3 group'>
      <img src="" alt="" 
        className="h-40 w-full bg-gray-200"/>

      <div>
        <h4 className='font-semibold group-hover:underline group-hover:text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, consequuntur error fugiat harum necessitatibus distinctio est ipsum a labore deleniti.</h4>
        <span className='text-sm text-gray-500'>12 de junio de 2024</span>
      </div>
    </Link>
  )
}
