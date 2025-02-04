import React, { useEffect, useState } from "react";
import style from "./JoinLayout.module.scss";
import Link from "next/link";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export function JoinLayout(props) {
  const { children } = props;
  const router = useRouter();
  const { user } = useAuth();

  if (user) router.push("/");

  const backgrounds = [
    "/images/wallpaper_signup.webp",
    "/images/sign-wallpaper.jpg",
    "/images/sign-wallpaper2.webp",
    "/images/sign-wallpaper3.webp",
  ];

  // Estado para la imagen de fondo
  const [background, setBackground] = useState(backgrounds[0]);

  // Cambiar la imagen solo en el cliente
  useEffect(() => {
    const randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBackground);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.topBar}>
        <Link href="/"></Link>
        <Link href="/" className={style.closeButton}>
          X
        </Link>
      </div>
      <div className={style.blockLeft}> {children} </div>
      <div
        className={style.blockRight}
        style={{ backgroundImage: `url(${background})` }}
      >
        {" "}
      </div>
    </div>
  );
}
