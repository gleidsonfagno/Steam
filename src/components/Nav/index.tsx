import { NavgationContainer, Navicones, Navlink } from "./styles";

import img from "/assets/logoLight.svg"

import ImgSino from "/assets/bell.svg"
import ImgMessege from "/assets/message-circle.svg"
import imgCarrinho from "/assets/carrinho.svg"
import profile from "/assets/profile.png"

// para colocar classe no styled componentes
// interface ColorProps {
//     // o sinal de ? para nao se obrigatorio
//     variante?: ColorLinkContainer;
// }

export function Navigation() {
    return (
        <NavgationContainer>
            <Navlink>
                <img src={img} alt="" />
                <ul>
                    <li><a href="#">Loja</a></li>
                    <li><a href="#">biblioteca</a></li>
                    <li><a href="#">comunidade</a></li>
                    <li><a href="#">perfil</a></li>
                    
                </ul>

            </Navlink>

            <Navicones>
                <a href="#">
                    <img src={ImgSino} alt="img" />
                </a>

                <a href="#">
                    <img src={ImgMessege} alt="img" />
                </a>

                <a href="#">
                    <img src={imgCarrinho} alt="img" />
                </a>

                <a href="#">
                    <img src={profile} alt="img" />
                </a>
            </Navicones>
        </NavgationContainer>

    )
}