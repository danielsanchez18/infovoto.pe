import { Button } from '@/components/ui/button';
import Link from 'next/link';
export const Info = () => {
  return (
    <div>
      <section className="grid gap-10">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-xl font-semibold">Información Relevante</h2>
          <p className="text-sm text-gray-600 line-clamp-1">
            Consulta información relevante y actualizada.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 w-full max-w-[50rem] mx-auto">
          <div className="grid gap-y-5">
            <div className="w-full h-48 bg-gray-200 rounded-lg">
                <img src="https://imgs.search.brave.com/KW6Xw8x2y-NI5vkoCqsd-Th_485h1-4kRQjBknIwFPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d3d3LmdvYi5wZS91/cGxvYWRzL2RvY3Vt/ZW50L2ZpbGUvODc4/NTIwOS9zdGFuZGFy/ZF8xMjU5MjYyLW9u/cGUtYXBydWViYS1k/aXJlY3RpdmEtcGFy/YS1icmluZGFyLWFz/aXN0ZW5jaWEtdGVj/bmljYS1hLWxhcy1q/dW50YXMtZGUtdXN1/YXJpb3MtZGVsLWFn/dWEuanBn" alt="" 
                    className='rounded-lg object-cover w-full h-full'/>
            </div>
            <div className="text-center">
              <h5 className="font-semibold">Información para Electores</h5>
              <p className="text-sm text-gray-600 mb-5">Descubre dónde votar y cómo prepararte para las elecciones.</p>
                <Link href={typeof window !== 'undefined' && localStorage.getItem('user') ? '/mi-perfil' : '/login'}>
                <Button className="w-full" >
                  Consulta tu Local de Votación
                </Button>
                </Link>
            </div>
          </div>

          <div className="grid gap-y-5">
            <div className="w-full h-48 bg-gray-200 rounded-lg">
                <img src="https://imgs.search.brave.com/DU7Nj0WGyB1bS05HOEqaRCdWJMzAdpMQGspKQWbRbG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d3d3LmdvYi5wZS91/cGxvYWRzL2NhbXBh/aWduL3Bob3RvLzAw/MC8wNDgvOTgwL2Nh/bXBhaWduX2EuanBn" alt="" 
                    className='rounded-lg object-cover w-full h-full'/>
            </div>
            <div className="text-center">
              <h5 className="font-semibold">¿Eres Miembro de Mesa?</h5>
              <p className="text-sm text-gray-600 mb-5">Accede a tu portal exclusivo para miembros de mesa con herramientas y guías específicas.</p>
              <Link href="/">
                <Button className="w-full">
                    Accede a tu Portal 
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
