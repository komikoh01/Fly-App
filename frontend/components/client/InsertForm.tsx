"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface FormProps {
  option0: string;
  option: string;
  info0: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  type0: string;
  type1: string;
  type2: string;
  type3: string;
}

export function InsertForm({
  option0,
  option,
  info0,
  info1,
  info2,
  info3,
  info4,
  type0,
  type1,
  type2,
  type3,
}: FormProps) {
  const [ci, setCi] = useState(0);
  const [id_pasajero, setIdPasajero] = useState(0);
  const [id_reserva, setIdReserva] = useState(0);
  const [id_emp, setIdEmpleado] = useState(0);
  const [id_vuelo, setIdVuelo] = useState(0);
  const [nombreusuario, setNombreusuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rol, setRol] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelNum] = useState("");
  const [fecha_caducidad, setFechaCaducidad] = useState("");
  const [chequeada, setChequeada] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");

  const [ciError, setCiError] = useState("");
  const [nombreUsuarioError, setNombreUsuarioError] = useState("");
  const [contrasenaError, setContrasenaError] = useState("");
  const [idPasajeroError, setIdPasajeroError] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [telefonoError, setTelefonoError] = useState("");
  const [fechaCaducidadError, setFechaCaducidadError] = useState("");
  const [idVueloError, setIdVueloError] = useState("");
  const [origenError, setOrigenError] = useState("");
  const [destinoError, setDestinoError] = useState("");

  const router = useRouter();

  let dataForm;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    if (option === "Usuario") {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/Usuario/`,
          {
            method: "POST",
            body: JSON.stringify({ ci, nombreusuario, contraseña, rol }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        router.push(`/${option0}#gestionar-usuario`);
        toast.success(`${option} añadido con éxito`);
        target.reset();
        router.refresh();
      } catch (error) {
        toast.error(`Error al añadir ${option}`);
      }
    } else if (option === "Pasajero") {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/Pasajero/`,
          {
            method: "POST",
            body: JSON.stringify({ id_pasajero, nombre, apellido, telefono }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        router.push(`/${option0}#gestionar-pasajero`);
        toast.success(`${option} añadido con éxito`);
        target.reset();
        router.refresh();
      } catch (error) {
        toast.error(`Error al añadir ${option}`);
      }
    } else if (option === "Reserva") {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/Reserva/`,
          {
            method: "POST",
            body: JSON.stringify({
              id_reserva,
              fecha_caducidad,
              chequeada,
              id_pasajero,
              id_emp,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        router.push(`/${option0}#gestionar-reserva`);
        toast.success(`${option} añadida con éxito`);
        target.reset();
        router.refresh();
      } catch (error) {
        toast.error(`Error al añadir ${option}`);
      }
    } else if (option === "Vuelo") {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/Vuelo/`,
          {
            method: "POST",
            body: JSON.stringify({ id_vuelo, origen, destino }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        router.push(`/${option0}#gestionar-vuelo`);
        toast.success(`${option} añadido con éxito`);
        target.reset();
        router.refresh();
      } catch (error) {
        toast.error(`Error al añadir ${option}`);
      }
    }
  };

  if (option === "Usuario") {
    dataForm = (
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col py-1 items-center"
      >
        <label className=" text-black w-max font-bold">
          <p>{`${info0}:`}</p>
          <input
            type={type0}
            onChange={(event) => {
              const value = event.target.value;
              setCi(Number(value));
              if (!/^\d+$/.test(value)) {
                setCiError("El CI debe contener solo números");
              } else {
                setCiError("");
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {ciError && <p className="text-red-500">{ciError}</p>}
        <label className=" text-black w-max font-bold">
          <p>{`${info1}:`}</p>
          <input
            type={type1}
            onChange={(event) => {
              const value = event.target.value;
              setNombreusuario(value);
              if (value.length < 3) {
                setNombreUsuarioError(
                  "El Nombre de Usuario debe tener al menos 3 caracteres"
                );
              } else {
                setNombreUsuarioError("");
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {nombreUsuarioError && (
          <p className="text-red-500">{nombreUsuarioError}</p>
        )}
        <label className=" text-black w-max font-bold">
          <p>{`${info2}:`}</p>
          <input
            type={type2}
            onChange={(event) => {
              const value = event.target.value;
              setContraseña(value);
              if (value.length < 6) {
                setContrasenaError(
                  "La contraseña debe tener al menos 6 caracteres"
                );
              } else {
                setContrasenaError("");
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {contrasenaError && <p className="text-red-500">{contrasenaError}</p>}
        <label className=" text-black w-max font-bold">
          <p>{`${info3}:`}</p>
          <select
            name="select"
            onChange={(event) => setRol(event.target.value)}
            className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"
          >
            <option value="value1" selected></option>
            <option value="administrador">Administrador</option>
            <option value="agente">Agente</option>
          </select>
        </label>
        <button
          type="submit"
          className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-28"
        >
          Insertar
        </button>
      </form>
    );
  } else if (option === "Pasajero") {
    dataForm = (
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col py-1 items-center"
      >
        <label className=" text-black w-max font-bold">
          <p>{`${info0}:`}</p>
          <input
            type={type0}
            onChange={(event) => {
              const value = event.target.value;
              setIdPasajero(Number(value));
              if (!/^\d+$/.test(value)) {
                setIdPasajeroError('El ID de Pasajero debe ser un número válido');
              } else {
                setIdPasajeroError('');
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {idPasajeroError && <p className="text-red-500">{idPasajeroError}</p>}
        <label className=" text-black w-max font-bold">
          <p>{`${info1}:`}</p>
          <input
            type={type1}
            onChange={(event) => {
              const value = event.target.value;
              setNombre(value);
              if (value.trim() === "") {
                setNombreError("El nombre es obligatorio");
              } else if (value.length < 3) {
                setNombreError(
                  "El Nombre de Usuario debe tener al menos 3 caracteres"
                );
              } else {
                setNombreError("");
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {nombreError && <p className="text-red-500">{nombreError}</p>}
        <label className=" text-black w-max font-bold">
          <p>{`${info2}:`}</p>
          <input
            type={type2}
            onChange={(event) => setApellido(event.target.value)}
            required
            className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"
          />
        </label>
        <label className=" text-black w-max font-bold">
          <p>{`${info3}:`}</p>
          <input
            type={type3}
            onChange={(event) => {
              const value = event.target.value;
              setTelNum(value);
              if (!/^\d{7,14}$/.test(value)) {
                setTelefonoError("Ingrese un número de teléfono válido");
              } else {
                setTelefonoError("");
              }
            }}
            required
            className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"
          />
        </label>
        {telefonoError && <p className="text-red-500">{telefonoError}</p>}
        <button
          type="submit"
          className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-28"
        >
          Insertar
        </button>
      </form>
    );
  } else if (option === "Reserva") {
    dataForm = (
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col py-1 items-center"
      >
        <label className=" text-black w-max font-bold">
          <p>{`${info0}:`}</p>
          <input
            type={type0}
            onChange={(event) => {
              const value = event.target.value;
              setFechaCaducidad(value);
              if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
                setFechaCaducidadError(
                  "Ingrese una fecha válida en formato YYYY-MM-DD"
                );
              } else {
                setFechaCaducidadError("");
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {fechaCaducidadError && (
          <p className="text-red-500">{fechaCaducidadError}</p>
        )}
        <label className=" text-black w-max font-bold">
          <p>{`${info1}:`}</p>
          <input
            type={type1}
            onChange={(event) => setFechaCaducidad(event.target.value)}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        <label className=" text-black w-max font-bold">
          <p>{`${info2}:`}</p>
          <input
            type={type2}
            onChange={(event) => setChequeada(event.target.value)}
            required
            className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"
          />
        </label>
        <label className=" text-black w-max font-bold">
          <p>{`${info3}:`}</p>
          <input
            type={type3}
            onChange={(event) => setIdPasajero(Number(event.target.value))}
            required
            className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"
          />
        </label>
        <label className=" text-black w-max font-bold">
          <p>{`${info4}:`}</p>
          <input
            type={type3}
            onChange={(event) => setIdEmpleado(Number(event.target.value))}
            required
            className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"
          />
        </label>
        <button
          type="submit"
          className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-28"
        >
          Insertar
        </button>
      </form>
    );
  } else if (option === "Vuelo") {
    dataForm = (
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col py-1 items-center"
      >
        <label className=" text-black w-max font-bold">
          <p>{`${info0}:`}</p>
          <input
            type={type0}
            onChange={(event) => {
              const value = event.target.value;
              setIdVuelo(Number(value));
              if (!/^\d+$/.test(value)) {
                setIdVueloError('El ID de Vuelo debe ser un número válido');
              } else {
                setIdVueloError('');
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {idVueloError && <p className="text-red-500">{idVueloError}</p>}
        <label className=" text-black w-max font-bold">
          <p>{`${info1}:`}</p>
          <input
            type={type1}
            onChange={(event) => {
              const value = event.target.value;
              setOrigen(value);
              if (value.trim() === '') {
                setOrigenError('El campo Origen es obligatorio');
              } else {
                setOrigenError('');
              }
            }}
            required
            className=" p-2 border border-gray-800 rounded-md my-2 outline-1 text-black"
          />
        </label>
        {origenError && <p className="text-red-500">{origenError}</p>}
        <label className=" text-black w-max font-bold">
          <p>{`${info2}:`}</p>
          <input
            type={type2}
            onChange={(event) => {
              const value = event.target.value;
              const nonNumericValue = value.replace(/[0-9]/g, '');
              setDestino(nonNumericValue);
              if (nonNumericValue.trim() === '') {
                setDestinoError('El campo Destino es obligatorio');
              } else {
                setDestinoError('');
              }
            }}            required
            className="my-2 p-2 border border-gray-800 rounded-md outline-offset-1 text-black"
          />
        </label>
        {destinoError && <p className="text-red-500">{destinoError}</p>}
        <button
          type="submit"
          className=" text-center mt-4 btn_dark_green text-white px-2 py-2 rounded-md w-28"
        >
          Insertar
        </button>
      </form>
    );
  }

  return (
    <div className=" flex flex-col items-center bg-lime-300 py-4 w-1/2 mx-auto rounded-3xl border-solid border-x-2 border-zinc-400">
      <p className=" text-3xl py-4 font-semibold">{`Insertar ${option}`}</p>
      {dataForm}
    </div>
  );
}
