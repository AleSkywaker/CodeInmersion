import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo_code.png';

const Menu = () => (
  <>
    <p>
      <a href='#home'>Inicio</a>
    </p>
    <p>
      <a href='#code'>¿Que es Code Inmersion?</a>
    </p>
    <p>
      <a href='#solutions'>Soluciones</a>
    </p>
    <p>
      <a href='#trainning'>Cursos</a>
    </p>
    <p>
      <a href='#biblio'>Bibliografia</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='code_navbar'>
      <div className='code_navbar-links'>
        <div className='code_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='code_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='code_navbar-sign'>
        <p>Entrar</p>
        <button type='button'>Registrarse</button>
      </div>
      <div className='code_navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className='code_navbar-menu_container scale-up-center'>
            <div className='code_navbar-menu_container-links'>
              <Menu />
              <div className='code_navbar-menu_container-links-sign'>
                <p>Entrar</p>
                <button type='button'>Registrarse</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
