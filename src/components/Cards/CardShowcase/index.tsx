import { Carde } from "./styles";

interface ApiProps {
  Imgbackground: string;
  imgLogo: string;
}

export default function CardShowcase({ Imgbackground, imgLogo }: ApiProps) {

  return (
      <Carde>
        <img src={Imgbackground} alt="imagens" />
        <div>
          <img src={imgLogo} alt="img" />
        </div>
      </Carde>
  );
}
