import Image from 'next/image'

export default function Presentation () {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 my-2">
        <Image 
          src="/american-airlines.svg"
          alt="camp"
          width={30}
          height={30}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 w-2/4 my-4">Hilink ... Rapidez y Seguridad</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          hilink es un sistema integral diseñado para gestionar eficientemente vuelos, pasajeros, reservas y usuarios. Facilita la planificación, el seguimiento y la administración de todos los aspectos críticos de tu operación aérea, mejorando la eficiencia y la experiencia del usuario.
        </p>

        <details className=" py-2  text-gray-30">
          <summary> Como trabajamos? </summary> 
          <p>Nuestro equipo de desarrollo trabaja en estrecha colaboración para asegurar que cada aspecto de nuestra aplicación esté optimizado para el rendimiento y la seguridad. Desde la gestión de vuelos y pasajeros hasta la administración de reservas y usuarios, cada función se ha diseñado con el objetivo de facilitar la toma de decisiones y mejorar la eficiencia operativa.</p>
        </details>
      </div>
    </section>
  )
}
