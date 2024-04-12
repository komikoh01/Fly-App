// components/NavbarClientComponent.client.js
'use client';

import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function HomeNavbarComponent() {
 const currentPath = usePathname()
 const router = useRouter();

 let navbarContent;
 if (currentPath === '/') {
    navbarContent = <><Link href="/">
                      <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
                    </Link>
                    <ul className="hidden h-full gap-12 lg:flex ">
                      <Link href="/Admin/"><li className=" py-5">Pagina Administrador</li></Link>
                      <Link href="/Agent/"><li className=" py-5">Pagina Agente</li></Link>
                      <li>
                      <Link href='/Login' >
                        <button className='flexCenter gap-3 rounded-full border btn_dark_green'><Image alt='usuario' src='/user.svg' width={24} height={24}></Image>Iniciar Sesión</button>
                      </Link>
                      </li>
                    </ul></>
                      
                    
 } else if (currentPath === '/Admin') {
    navbarContent = <>  
                      <Link href="/">
                        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
                      </Link>
                      <ul className="hidden h-full gap-12 lg:flex ">
                        <li onClick={()=> router.push('/')} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Home</li>
                        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        <Link href="Admin/Users/">Gestionar Usuario</Link></li>
                        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                          <Link href="Admin/Pasajeros/">Gestionar Pasajero</Link></li>
                        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                          <Link href="Admin/Reservas/">Gestionar Reserva</Link></li>
                        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                          <Link href="Admin/Vuelos/">Gestiona Vuelo</Link></li>
                      </ul>
                      <div>
                        <button className='flexCenter gap-3 rounded-full border  border-green-50 bg-green-50 px-5 py-5 text-white'><Image alt='usuario' src='/user.svg' width={24} height={24}></Image>Admin-Username</button>
                      </div>
                    </>
 } else if (currentPath === '/Agent') {
    navbarContent = <> 
                      <Link href="/">
                        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
                      </Link>
                      <ul className="hidden h-full gap-12 lg:flex ">
                        <li onClick={()=> router.push('/')} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Home</li>
                        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        <Link href="Agent/Pasajeros/">Gestionar Pasajero</Link>
                        </li>
                        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        <Link href="Agent/Reservas/">Gestionar Reserva</Link>
                        </li>
                        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        <Link href="Agent/Vuelos/">Gestiona Vuelo</Link>
                        </li>
                      </ul>
                      <div>
                        <button className='flexCenter gap-3 rounded-full border btn_green'><Image alt='usuario' src='/user.svg' width={24} height={24}></Image>Agent-Username</button>
                      </div>
                    </>
 }
                    
 return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      {navbarContent}

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />

    </nav>
  )
}

 

