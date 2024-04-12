import Image from "next/image";

interface CampProps {
  backgroundImage: string;
}

const WorldImage = ({ backgroundImage }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
     </div>  
    </div>
  )
}

export default function Invitation () {
  return (
    <section className="2xl:max-container relative flex flex-col py-7 lg:mb-10 lg:py-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <WorldImage 
          backgroundImage="bg-bg-img-3"
        />
        <WorldImage 
          backgroundImage="bg-bg-img-4"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[620px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64  text-white">
            <strong>Conviértete en el siguiente</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}
