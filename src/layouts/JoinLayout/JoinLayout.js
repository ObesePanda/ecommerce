import React from 'react'
import style from './JoinLayout.module.scss'
import Link from 'next/link'


export  function JoinLayout(props) {
  const { children } = props;
  
  return (
    <div className={style.container}>
     
      
    <div className='{style.topBar}'>
      <Link href="/"> 
      <img src='/images/logo.png' alt='Logotipo Tienda'></img>
       </Link>
      <Link href="/">Cerrar</Link>
    </div>

    <div> {children} </div>


    </div>
  )
}
