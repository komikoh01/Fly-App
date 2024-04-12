
'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { UpdateForm } from "./client/UpdateForm"
import toast from "react-hot-toast"

interface ListProps {
  option: String
  listUse: Usuario[]
  listPass: Pasajero[]
  listRes: Reserva[]
  listVue: Vuelo[]
}

interface Usuario {
  ci: number;
  nombreusuario: string;
  contraseña: string;
  rol: string;
 }

interface Pasajero {
  id_pasajero: number;
  nombre: string;
  apellido: string;
  telefono: string;
 }

 interface Vuelo {
  id_vuelo: number;
  origen: string;
  destino: string;
 }

 interface Reserva {
  id_reserva: number
  fecha_caducidad: string
  chequeada: true | false
  id_pasajero: number
  id_emp: number
 }

export function List({ option, listUse, listPass, listRes, listVue }: ListProps) {
  const [isVisibleUse, setIsVisibleUse] = useState(false)
  const [isVisibleRes, setIsVisibleRes] = useState(false)
  const [isVisiblePas, setIsVisiblePas] = useState(false)
  const [isVisibleVue, setIsVisibleVue] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedci, setSelectedci] = useState<number | null>(null);
  const router = useRouter();

  let listaDatos
  let fields

  const toggleVisibilityUse = (ci: number | null) => {
    setSelectedci(ci);
    setIsVisibleUse(!isVisibleUse)
  }
  const toggleVisibilityPas = (id: number | null) => {
    setSelectedId(id);
    setIsVisiblePas(!isVisiblePas)
  }
  const toggleVisibilityRes = (id: number | null) => {
    setSelectedId(id);
    setIsVisibleRes(!isVisibleRes)
  }
  const toggleVisibilityVue = (id: number | null) => {
    setSelectedId(id);
    setIsVisibleVue(!isVisibleVue)
  }


  const handleUseDelete = async(ci:number) => {
    if(window.confirm('Quieres eliminar los datos de este usuario?')){ 
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Usuario/${ci}/`)
      if(res.status === 204) {
        toast.success(`Usuario eliminado exitosamente`)
        router.refresh()
      }
    }
    
  }

  const handlePasDelete = async(id:number) => {
    if(window.confirm('Quieres eliminar los datos de este pasajero?')){ 
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Pasajero/${id}`)
      if(res.status === 204) {
        toast.success(`Pasajero eliminado exitosamente`)
        router.refresh()
      }
    }
    
  }

  const handleResDelete = async(id:number) => {
    if(window.confirm('Quieres eliminar los datos de esta reserva?')){ 
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Reserva/${id}`)
      if(res.status === 204) {
        toast.success(`Reserva eliminada exitosamente`)
        router.refresh()
      }
    }
  }
  const handleVueDelete = async(id:number) => {
    if(window.confirm('Quieres eliminar los datos de este vuelo?')){ 
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Vuelo/${id}`)
      if(res.status === 204) {
        toast.success(`Vuelo eliminado exitosamente`)
        router.refresh()
      }
    }
  }

  if(option === 'Usuarios') {

    fields =  <div className=" flex flex-row text-3xl mr-40">
                <p className=" mr-28">CI</p>
                <p className=" mr-28 px-24">Nombre</p>
                <p className=" mr-60">Rol</p>
              </div>

    listaDatos = listUse.map(usuario => (
      <li className="  bg-slate-200  py-2 w-full text-center px-8 flex flex-row my-5 font-semibold justify-around items-center" key={usuario.ci}>
        <div className=" w-32 font-semibold">{usuario.ci}</div>
        <hr />
        <div className=" w-32 font-semibold">{usuario.nombreusuario}</div>
        <hr />
        <div className=" w-32 font-semibold">{usuario.rol }</div>
        <div className=" ml-10 ">
          <button onClick={() => toggleVisibilityUse(usuario.ci)} className=" my-2 text-center ml-4 btn_green text-white mr-2 pr-1 py-2 rounded-md w-28">Modificar</button>
          <button onClick={() => handleUseDelete(usuario.ci)} className=" text-center ml-4 bg-red-700 px-8 py-5 text-white  rounded-md w-28">Eliminar</button>
        </div>
      </li>
    ))
    }

  if(option === 'Pasajeros') {

    fields =  <div className=" flex flex-row text-3xl mr-48">
                <p className=" mr-12">Nombre</p>
                <p className=" mr-12 px-28">Apellido</p>
                <p className=" mr-40">Teléfono</p>
              </div>

    listaDatos = listPass.map(pasajero => (
      <li className="  bg-slate-200  py-2 w-full text-center px-8 flex flex-row my-5 font-semibold justify-around items-center" key={pasajero.id_pasajero}>
        <div className=" w-32 font-semibold">{pasajero.nombre}</div>
        <hr />
        <div className=" w-32 font-semibold">{pasajero.apellido}</div>
        <hr />
        <div className=" w-32 font-semibold">{pasajero.telefono}</div>
        <div className=" ml-10 ">
          <button onClick={() => toggleVisibilityPas(pasajero.id_pasajero)} className=" my-2 text-center ml-4 btn_green text-white mr-2 pr-1 py-2 rounded-md w-28">Modificar</button>
          <button onClick={() => handlePasDelete(pasajero.id_pasajero)} className=" text-center ml-4 bg-red-700 px-8 py-5 text-white  rounded-md w-28">Eliminar</button>
        </div>
      </li>
    ))
  }

  if(option === 'Reservas') {

    fields =  <div className=" flex flex-row items-center text-2xl mr-48 font-semibold">
                <p className=" mr-12">Fecha de caducidad</p>
                <p className=" mr-18 px-11">Chequeada</p>
                <p className=" mr-18 pr-4">Id de pasajero</p>
                <p className=" mr-56">Id de empleado</p>
              </div>


    listaDatos =  listRes.map(reserva => (
      <li className=" w-full text-center px-8 flex flex-row my-5 justify-around items-center bg-slate-200  py-2 rounded-lg" key={reserva.id_reserva}>
        <div className=" w-32 font-semibold mr-28">{reserva.fecha_caducidad}</div>
        <hr />
        <div className=" w-24 font-semibold mr-20">{String(reserva.chequeada)}</div>
        <hr />
        <div className=" w-24 font-semibold mr-20">{reserva.id_pasajero}</div>
        <hr />
        <div className=" w-24 font-semibold mr-18">{reserva.id_emp}</div>
        <div className=" ml-10 mr-8">
          <button onClick={() => toggleVisibilityRes(reserva.id_reserva)} className=" my-2 text-center ml-4 btn_green text-white mr-6 pr-1 py-2 rounded-md w-28">Modificar</button>
          <button onClick={() => handleResDelete(reserva.id_reserva)} className=" text-center ml-4 bg-red-700 px-8 py-5 text-white mr-6 rounded-md w-28">Eliminar</button>
        </div>
      </li>
    ))
  }

  if(option === 'Vuelos') {

    fields =  <div className=" flex flex-row text-3xl mr-48 px-4">
                <p className=" mr-64">Origen</p>
                <p className=" mr-80">Destino</p>
              </div>

    listaDatos = listVue.map(vuelo => (
      <li className="  bg-slate-200  py-2 w-full text-center px-8 flex flex-row my-5 justify-around items-center" key={vuelo.id_vuelo}>
        <div className=" w-32 font-semibold">{vuelo.origen}</div>
        <hr />
        <div className=" w-32 font-semibold">{vuelo.destino}</div>
        <hr />
        <div className=" ml-10 ">
          <button onClick={() => toggleVisibilityVue(vuelo.id_vuelo)} className=" my-2 text-center ml-4 btn_green text-white mr-2 pr-1 py-2 rounded-md w-28">Modificar</button>
          <button onClick={() => handleVueDelete(vuelo.id_vuelo)} className=" text-center ml-4 bg-red-700 px-8 py-5 text-white  rounded-md w-28">Eliminar</button>
        </div>
      </li>
    ))
  }

  return(
    <section className='flex flex-col items-center my-20'>
        <h2 className=' text-3xl font-semibold mb-5'>{`Lista de ${option}`}</h2>
        <div className=' flex flexBetween w-11/12 bg-pattern py-10 px-20 rounded-3xl border-solid border-slate-400 border-y-2'>
          <ul className=" flex flex-col items-center text-center text-black w-screen h-auto">
            {fields}
            {listaDatos}
          </ul>
        </div>
        {isVisibleUse &&  <UpdateForm typo='Usuario'  onClose={() => setIsVisibleUse(false)} ci={selectedci ?? 0} id={0} /> }
        {isVisiblePas &&  <UpdateForm typo='Pasajero'  onClose={() => setIsVisiblePas(false)} id={selectedId ?? 0} ci={0} />}
        {isVisibleRes &&  <UpdateForm typo='Reserva'  onClose={() => setIsVisibleRes(false)} id={selectedId ?? 0} ci={0} />}
        {isVisibleVue &&  <UpdateForm typo='Vuelo'  onClose={() => setIsVisibleVue(false)} id={selectedId ?? 0} ci={0} />}
      </section>
  )
}