import { JoinLayout } from "@/layouts/JoinLayout/JoinLayout";
import Link from "next/link";
import { LoginForm } from "@/components/Auth/LoginForm/LoginForm";

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className="flex flex-col items-center justify-center w-[70%] h-full my-auto space-y-4 -mt-8">
          <Link href="/">
            <img
              className="size-52 "
              src="/images/logotipo.webp"
              alt="Logotipo Tienda"
            ></img>
          </Link>
          <h2 className="text-2xl font-bold">Iniciar Sesion </h2>
          <LoginForm />
          <div className="text-sm text-center text-white">
            <Link href="/"> ¿No puedes iniciar sesión? </Link>
            <br />
            <Link href="/join/sign-up"> Crear Cuenta </Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
