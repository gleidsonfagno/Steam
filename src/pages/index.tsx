import CardShowcase from "../components/Cards/CardShowcase";
import Carrosel from "../components/Carrosel";
import { CategoryBar } from "../components/CategoryBar";
import Search from "../components/Search";

import { ApiData, ShowCaseItem, ReleaseItem } from "../@types/styled";

import {
  HomeContainer,
  Section,
  SectionCategory,
  SectionRelease,
} from "./styles";
import Button from "../components/Button";
import CardRelease from "../components/Cards/CardRelease";

const DadosApi: ApiData[] = [
  {
    type: "showcase",
    data: [
      {
        id: "facary",
        Imgbackground: "/assets/1copy.png",
        imgLogo: "/assets/logo-farcry.svg",
      },
      {
        id: "forza",
        Imgbackground: "/assets/2copy.png",
        imgLogo: "/assets/logo-forza.svg",
      },
      {
        id: "fifa",
        Imgbackground: "/assets/3copy.png",
        imgLogo: "/assets/logo-fifa.svg",
      },
      {
        id: "minecraft",
        Imgbackground: "/assets/4copy.png",
        imgLogo: "/assets/logo-minecraft.svg",
      },
    ],
  },
  {
    type: "release",
    data: [
      {
        id: 1,
        img: "/assets/5.png",
        title: "Assassin's Creed Valhalla",
        price: {
          value: 100,
          discount: 0.1,
        },
      },
      {
        id: 2,
        img: "/assets/6.png",
        title: "Grand Theft Auto V",
        price: {
          value: 100.0,
          discount: 0.5,
        },
      },
      {
        id: 3,
        img: "/assets/7.png",
        title: "Minecraft",
        price: {
          value: 100,
          discount: 0.2,
        },
      },
      {
        id: 4,
        img: "/assets/8.png",
        title: "Detroit Become Human",
        price: {
          value: 100,
          discount: 0.33,
        },
      },
      {
        id: 5,
        img: "/assets/9.png",
        title: "Fall Guys",
        price: {
          value: 100,
          discount: 0.85,
        },
      },
      {
        id: 6,
        img: "/assets/10.png",
        title: "God of War",
        price: {
          value: 100,
          discount: 0.1,
        },
      },
      {
        id: 7,
        img: "/assets/11.png",
        title: "Cyberpunk 2077",
        price: {
          value: 199.9,
          discount: 0.5,
        },
      },
      {
        id: 7,
        img: "/assets/12.png",
        title: "Ghostwire: Tokyo",
        price: {
          value: 100,
          discount: 0.5,
        },
      },
    ],
  },
  {
    type: "category",
    data: [{ img: "dikgjdpg" }],
  },
];

export default function Home() {
  const showcaseData = DadosApi.find((item) => item.type === "showcase")
    ?.data as ShowCaseItem[];
  // console.log(showcaseData[0].imgLogo);

  const realeaseData = DadosApi.find((item) => item.type === "release")
    ?.data as ReleaseItem[];
    
  return (
    <>
      <Carrosel />
      <HomeContainer>
        <CategoryBar />
        <Search />
        <Section>
          {showcaseData?.map((item) => (
            <CardShowcase
              key={item.id}
              Imgbackground={item.Imgbackground}
              imgLogo={item.imgLogo}
            />
          ))}
        </Section>

        <SectionCategory>
          <h2>navegar pelo steam</h2>
          <article>
            <ul>
              <li>
                <Button title="lançamentos" />
              </li>
              <li>
                <Button title="ofertas" />
              </li>
              <li>
                <Button title="jogos gratuitos" />
              </li>
              <li>
                <Button title="vendidos" />
              </li>
            </ul>
          </article>
        </SectionCategory>

        <SectionRelease>
          <h2>explore por categoria</h2>
          <div>
            {realeaseData?.map((item) => {
              const originalPrice = item.price.value;
              const discountAmount = originalPrice * item.price.discount;
              const finalPrice = originalPrice - discountAmount;

              return (
                <CardRelease
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  originalPrice={originalPrice}
                  discountAmount={discountAmount}
                  finalPrice={finalPrice}
                />
              );
            })}
          </div>
        </SectionRelease>
      </HomeContainer>
      
    </>
  );
}
