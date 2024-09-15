import { useState } from "react";
import { NavgationContainer, Navicones, Navlink } from "./styles";

import img from "/assets/logoLight.svg";
import ImgSino from "/assets/bell.svg";
import ImgMessege from "/assets/message-circle.svg";
import imgCarrinho from "/assets/carrinho.svg";
import profile from "/assets/profile.png";

import { RiMenuLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';



export default function Menu() {
  // Controla a abertura do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <NavgationContainer>
        <Navlink menuOpen={menuOpen}>
          <img src={img} alt="" />
          <ul className={menuOpen ? "menu-open" : ""}>
            <li>
              <a href="#">Loja</a>
            </li>
            <li>
              <a href="#">Biblioteca</a>
            </li>
            <li>
              <a href="#">Comunidade</a>
            </li>
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
            <button className="open_menu" onClick={toggleMenu}>
            
            
            {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
            </li>
          </ul>
          <button className="open_menu" onClick={toggleMenu}>

          {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </Navlink>

        <Navicones>
          <a href="#">
            <img src={ImgSino} alt="Notificações" />
          </a>
          <a href="#">
            <img src={ImgMessege} alt="Mensagens" />
          </a>
          <a href="#">
            <img src={imgCarrinho} alt="Carrinho" />
          </a>
          <span  className="profile">
            <img src={profile} alt="Perfil" />
          </span>
        </Navicones>
      </NavgationContainer>
    </header>
  );
}
