import React from 'react'
import { DollarSign, Zap, Moon, Filter } from 'lucide-react'

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
      <div className="mx-auto max-w-xl text-center mt-20">
        
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          What we offer
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 max-w-6xl">
        <div className='max-w-2xl flex flex-col items-center	'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <DollarSign className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-2xl font-semibold text-black">DSA</h3>
          <p className="mt-4 text-md text-gray-600 w-44">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div className='max-w-2xl flex flex-col items-center	'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Zap className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-2xl font-semibold text-black">Aptitude</h3>
          <p className="mt-4 text-md text-gray-600 w-44">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        

      </div>
    </div>
  )
}
