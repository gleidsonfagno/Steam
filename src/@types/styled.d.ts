import "styled-components";
import { defaultTheme } from "../styles/themes/defalt";

// guradando os valores inferido aotomatico pelo typescript
type ThemeType = typeof defaultTheme;

// ta criando uma tipagem pro styled components , sobrescrevendo uma coisa nova
declare module "styled-components" {
  export interface defaultTheme extends ThemeType {}
}

// TIPANDOD OS DADOS FAQUE QUE SIMULA OS RECEBIMENTO DE DADOS DE UMA API

export type ShowCaseItem = {
  id: string;
  Imgbackground: string;
  imgLogo: string;
};

export type ReleaseItem = {
  id: number;
  img: string;
  title: string;
  price: {
    value: number;
    discount: number;
  };
};

export type CardCategoryItem = {
  img: string;
};

export type ApiData =
  | { type: "showcase"; data: ShowcaseItem[] }
  | { type: "release"; data: ReleaseItem[] }
  | { type: "category"; data: CardCategoryItem[] };
