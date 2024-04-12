'use client'
import axios from "axios";
import {useRouter} from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

interface FormProp {
  typo: string;
  onClose: () => void;
  id: number;
  ci: number
  // Añade props para los datos actuales, por ejemplo:
  initialData?: {
     id_pasajero?: number;
     nombre?: string;
     apellido?: string;
     telefono?: string;
     fecha_caducidad?: string
     id_reserva?: number 
     chequeada?: string
     id_emp?: number 
     id_vuelo?: number
     origen?: string
     destino?: string
     ci?: number;
     nombreusuario?: string
     contraseña?: string
     rol?: string
     // Añade otros campos según sea necesario
  };
 }
export function UpdateForm ({ typo, onClose, initialData, id, ci }:FormProp ) {
  const [hide, setHide] = useState(false)
  const [formData, setFormData] = useState(initialData || {});
  const router = useRouter()

  let updateForm

  const handleHide = () => {
    setHide(true)
    onClose()
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${typo}/${id | ci}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
 }, [id])

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    if(typo === 'Usuario'){
      try {
        const updatedData = {
          id_pasajero: formData.ci,
          nombre: formData.nombreusuario,
          apellido: formData.contraseña,
          telefono: formData.rol,
        }

        const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${typo}/${ci}/`, updatedData, {
          headers: {
             'Content-Type': 'application/json'
          } });
          if (res.status === 200) {
            toast.success(`${typo} actualizado exitosamente`)
            console.log('Usuario actualizado exitosamente:', res.data);
            setFormData(updatedData);
            // Aquí puedes actualizar el estado local o mostrar un mensaje de éxito
            // Refresca la página para mostrar los cambios  
            handleHide()
            router.push('/Admin/Users')
            target.reset()
            router.refresh();
          }
      } catch (error) {
           console.error('Error al actualizar usuario:', error);
           // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error.
           toast.error(`Error al actualizar ${typo}`);
        }
    }
    else if(typo === 'Pasajero'){
      try {
        const updatedData = {
          id_pasajero: formData.id_pasajero,
          nombre: formData.nombre,
          apellido: formData.apellido,
          telefono: formData.telefono,
        }

        const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${typo}/${id}/`, updatedData, {
          headers: {
             'Content-Type': 'application/json'
          } });
          if (res.status === 200) {
            toast.success(`${typo} actualizado exitosamente`)
            console.log('Pasajero actualizado exitosamente:', res.data);
            setFormData(updatedData);
            // Aquí puedes actualizar el estado local o mostrar un mensaje de éxito
            // Refresca la página para mostrar los cambios  
            handleHide()
            router.push('/Admin/Pasajeros')
            target.reset()
            router.refresh();
          }
      } catch (error) {
           console.error('Error al actualizar pasajero:', error);
           // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error.
           toast.error(`Error al actualizar ${typo}`);
        }
    }
    else if(typo === 'Reserva'){
      try {
        const updatedData = {
          id_reserva: formData.id_reserva,
          fecha_caducidad: formData.fecha_caducidad,
          chequeada: formData.chequeada,
          id_pasajero: formData.id_pasajero,
          id_emp: formData.id_emp,
        }

        const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${typo}/${id}/`, updatedData, {
          headers: {
             'Content-Type': 'application/json'
          } });
          if (res.status === 200) {
            toast.success(`${typo} actualizado exitosamente`)
            console.log('Pasajero actualizado exitosamente:', res.data);
            setFormData(updatedData);
            // Aquí puedes actualizar el estado local o mostrar un mensaje de éxito
            // Refresca la página para mostrar los cambios
            handleHide()
            router.push('/Admin/Reservas')
            target.reset()
            router.refresh();
        }
      } catch (error) {
           console.error('Error al actualizar pasajero:', error);
           // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error.
            toast.error(`Error al actualizar ${typo}`);
        }
    }
    else if(typo === 'Vuelo'){
      try {
        const updatedData = {
          id_vuelo: formData.id_vuelo,
          origen: formData.origen,
          destino: formData.destino,
        }

        const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${typo}/${id}/`, updatedData, {
          headers: {
             'Content-Type': 'application/json'
          } });
          if (res.status === 200) {
            toast.success(`${typo} actualizado exitosamente`)
            console.log('Pasajero actualizado exitosamente:', res.data);
            setFormData(updatedData);
            // Aquí puedes actualizar el estado local o mostrar un mensaje de éxito
            // Refresca la página para mostrar los cambios
            handleHide()
            router.push('/Admin/Vuelos')
            target.reset()
            router.refresh();
        }
      } catch (error) {
           console.error('Error al actualizar pasajero:', error);
           // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error.
           toast.error(`Error al actualizar ${typo}`);
        }
    }
  }
      
  if(typo === 'Usuario'){
    updateForm= <form  onSubmit={handleSubmit} className=' flex flex-col py-1 items-center'>
                  <label className=' text-black w-max font-bold'>
                    <p>CI</p>
                    <input type='number' name="id_pasajero" value={formData.ci || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                  </label>
                  <label className=' text-black w-max font-bold'>
                    <p>Nombre de Usuario</p>
                    <input type='text'  name="nombre" value={formData.nombreusuario || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                  </label>
                  <label className=' text-black w-max font-bold'>
                    <p>Contraseña</p>
                    <input type='password'  name="apellido" value={formData.contraseña || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                  </label>
                  <label className=' text-black w-max font-bold'>
                    <p>Rol</p>
                    <input type='text'  name="telefono" value={formData.rol || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                  </label>
                  <button type="submit" onSubmit={handleHide} className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-2/4">Guardar</button>
                </form>
    }

  if(typo === 'Pasajero'){
    updateForm= <form  onSubmit={handleSubmit} className=' flex flex-col py-1 items-center'>
                  <label className=' text-black w-max font-bold'>
                    <p>ID</p>
                    <input type='number' name="id_pasajero" value={formData.id_pasajero || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                  </label>
                  <label className=' text-black w-max font-bold'>
                    <p>Nombre</p>
                    <input type='text'  name="nombre" value={formData.nombre || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                  </label>
                  <label className=' text-black w-max font-bold'>
                    <p>Apellido</p>
                    <input type='text'  name="apellido" value={formData.apellido || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                  </label>
                  <label className=' text-black w-max font-bold'>
                    <p>Telefono</p>
                    <input type='text'  name="telefono" value={formData.telefono || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                  </label>
                  <button type="submit" onSubmit={handleHide} className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-2/4">Guardar</button>
                </form>
    }

    if(typo === 'Reserva'){
      updateForm= <form  onSubmit={handleSubmit} className=' flex flex-col py-1 items-center'>
                    <label className=' text-black w-max font-bold'>
                      <p>ID</p>
                      <input type='number' name="id_reserva" value={formData.id_reserva || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                    </label>
                    <label className=' text-black w-max font-bold'>
                      <p>Fecha de caducidad</p>
                      <input type='date' name="fecha_caducidad" value={formData.fecha_caducidad || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                    </label>
                    <label className=' text-black w-max font-bold'>
                      <p>Chequeada</p>
                      <input type='checkbox' name='chequeada' value={formData.chequeada || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                    </label>
                    <label className=' text-black w-max font-bold'>
                      <p>ID_pasajero</p>
                      <input type='number' name="id_pasajero" value={formData.id_pasajero || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                    </label>
                    <label className=' text-black w-max font-bold'>
                      <p>ID_empleado</p>
                      <input type='number' name="id_emp" value={formData.id_emp || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                    </label>
                    <button type="submit" className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-2/4">Guardar</button>
                  </form>
    }

    if(typo === 'Vuelo'){
       updateForm=  <form  onSubmit={handleSubmit} className=' flex flex-col py-1 items-center'>
                      <label className=' text-black w-max font-bold'>
                        <p>ID</p>
                        <input type='number' name="id_vuelo" value={formData.id_vuelo || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                      </label>
                      <label className=' text-black w-max font-bold'>
                        <p>Origen</p>
                        <input type='text' name="origen" value={formData.origen || ''} onChange={handleChange} required className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"/>
                      </label>
                      <label className=' text-black w-max font-bold'>
                        <p>Destino</p>
                      <input type='text' name="destino" value={formData.destino || ''} onChange={handleChange} required className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"/>
                      </label>
                      <button type="submit" className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md  w-32">Guardar</button>
                    </form>
    }
    

    return(
      <div className={`flex flex-col items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-50 p-20 rounded-lg z-50 w-2/4 ${hide ? 'hidden' : ''}`}>
        <p className=' text-3xl py-4 font-semibold'>{`Modificar ${typo}`}</p>
        {!hide && updateForm}
        <button onClick={handleHide}  className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-32">Volver</button>
      </div> 
    )
}