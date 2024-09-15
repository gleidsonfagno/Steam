import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { CardSlid, SlideBar } from "./styles";
import Button from "../Button";

const BanerDadoEstaticos = [
  {
    backgoundImage: "/assets/banner-1.png",
    ImgLogo: "/assets/logo-red-dead.png",
    description:
      "Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos.",
  },
  {
    backgoundImage: "/assets/banner-2.jpg",
    ImgLogo: "/assets/dead-by-daylight.png",
    description:
      "Dead by Daylight é um jogo eletrônico multijogador online assimétrico de survival horror desenvolvido pela Behaviour Interactive.",
  },
  {
    backgoundImage: "/assets/banner-3.jpg",
    ImgLogo: "/assets/the-last-of-us.png",
    description:
      "The Last of Us é uma franquia situada em um mundo pós-apocalíptico, com seres humanos hostis e criaturas canibais infectadas por uma mutação do fungo cordyceps.",
  },
  {
    backgoundImage: "/assets/banner-4.jpg",
    ImgLogo: "/assets/assassins-creed.webp",
    description:
      "A série de jogos Assassin's Creed, ao contrário da violência do conflito entre os grupos do game (assassinos e templários), mostra a evolução da sociedade humana como cenário dos jogos.",
  },
];

export default function Carrosel() {
  return (
    <SlideBar>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true} // Adiciona o loop infinito
      >
        {BanerDadoEstaticos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="baner" style={{ backgroundImage: `url(${item.backgoundImage})` }}>
              <CardSlid>
                <div>
                  <img src={item.ImgLogo} alt="logo" />
                  <p>{item.description}</p>
                  <Button title="compre agora" />
                </div>
              </CardSlid>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </SlideBar>
  );
}
