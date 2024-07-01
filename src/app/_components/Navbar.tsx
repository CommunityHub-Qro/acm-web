'use client'
import Link from 'next/link';
import React, {useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  const logo_white = '/images/ACM_logo_W.png'
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <>
        <nav className='max-w-screen p-3 items-center acm-color flex justify-between'>
            <div className='flex justify-between w-full items-center'>
                <Link href='/' className='flex items-center'>
                    <h1 className='font-bold text-4xl'>ACM</h1>
                    <img src={logo_white} className='w-20 ml-2'/> 
                </Link>
                <div className="menuIcon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faBars : faX} size="2x"/>
                </div>
            </div>
            <ul className={click ? 'navbar-menu' : 'navbar-menu active'}>
                <li>
                    <Link href=''>
                        Sobre Nosotros
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        Proyectos
                    </Link>
                </li>
                <li >
                    <Link href=''>
                        Actividades
                    </Link>
                </li>
                <li >
                    <Link href=''>
                        Recursos
                    </Link>
                </li>
                <li >
                    <Link href=''>
                        Colaboradores
                    </Link>
                </li>
                <li >
                    <Link href=''>
                        Contactos
                    </Link>
                </li>
                
            </ul>
            
        </nav>
    </>
  )
}

export default Navbar