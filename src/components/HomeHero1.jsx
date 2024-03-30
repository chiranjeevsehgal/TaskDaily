import React from 'react'

export default function HomeHero1() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6 items-center	">
          
          
          <h1 className="mt-8 mx-auto max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl text-center">
            People who really cares about your business
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-gray-700 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam nulla aperiam quo
            possimus, nihil molestiae modi tenetur esse qui repudiandae cum fuga aspernatur ea?
          </p>
          <div className="mt-8">
            <a
                href="/dashboard"
              className="rounded-md bg-black px-3 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              
            >
              Go to Dashboard
            </a>
          </div>
        </div>
        <div className="rounded-lg p-4 flex justify-center">
          <img
            className="aspect-[3/2] w-96 rounded-lg object-cover lg:aspect-auto lg:h-[400px]"
            src="call.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
