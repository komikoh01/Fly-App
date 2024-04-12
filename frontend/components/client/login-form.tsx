'use client';

import {
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Button } from "../button";
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  
  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-lime-500 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>
          Regístrate para continuar.
        </h1>
        <div className="w-full">
          
        <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="CI"
            >
              CI
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="text"
                type="number"
                name="CI"
                placeholder="CI"
                required
              />
              </div>
          </div>

          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Nombre de Usuario
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="tetx"
                type="text"
                name="nombre_de_usuario"
                placeholder="nombre_de_usuario"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="pass"
                placeholder="contraseña"
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        
        <LoginButton />

        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 mx-auto justify-center w-44 " aria-disabled={pending} >
      Registrarse <ArrowRightIcon className="ml-auto h-5 w-5 text-withe" />
    </Button>
  );
}