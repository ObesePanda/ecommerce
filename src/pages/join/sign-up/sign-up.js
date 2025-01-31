import React from "react";
import { JoinLayout } from "@/layouts/JoinLayout/JoinLayout";
import { RegisterForm } from "@/components/Auth/RegisterForm/RegisterForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <div className="flex flex-col items-center justify-center w-[70%] h-full my-auto space-y-4 -mt-8">
          <Link href="/">
            <img
              className="size-52 -mb-11"
              src="/images/logotipo.webp"
              alt="Logotipo Tienda"
            ></img>
          </Link>
          <h2 className="text-xl font-bold mb-2">Crear Cuenta </h2>
          <RegisterForm />
          <div>
            <Link href="/join/sign-in"> Atras </Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
