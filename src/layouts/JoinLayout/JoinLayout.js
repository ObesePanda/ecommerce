import React from "react";
import style from "./JoinLayout.module.scss";
import Link from "next/link";

export function JoinLayout(props) {
  const { children } = props;
  const backgrounds = [
    "/images/wallpaper_signup.webp",
    "/images/sign-wallpaper.jpg",
    "/images/sign-wallpaper2.webp",
    "/images/sign-wallpaper3.webp",
  ];
  // Selecciona una imagen aleatoria
  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
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
        style={{ backgroundImage: `url(${randomBackground})` }}
      >
        {" "}
      </div>
    </div>
  );
}
