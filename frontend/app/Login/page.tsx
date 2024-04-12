import { LoginForm } from '../../components/client/login-form'
import Link from 'next/link';
import Image from "next/image"

export default function Login() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-lime-300 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/">
              <Image src="/hilink-logo.svg" alt="logo" width={80} height={34} />
            </Link>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
