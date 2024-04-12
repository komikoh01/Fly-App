import Image from 'next/image'  
import React from 'react'

export default async function AdminComponent () {

  return (
    <> 
      <section className="flexCenter flex-col">
        <div className="padding-container max-container w-full pb-24">
          <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
            <div className="flexCenter max-container relative w-full">
              <Image 
                src="/AdminPlane.jpg"
                alt="plane"
                width={1440}
                height={580}
                className="w-full object-cover object-center  rounded-xl"
              />
            <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
              <div className="flexBetween flex-col">
                <div className='flex w-full flex-col'>
                  <p className="bold-20 mt-2">Bienvenido Administrador !!</p>
                </div>
                <div className='flex w-full flex-col'>
                  <p className="regular-16 text-gray-20">Estamos aqui para ti</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div> 
      </section>
    </>
  )
}

