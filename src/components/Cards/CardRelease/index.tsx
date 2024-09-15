import { CardReleaseStyle } from "./styles";

interface ReleaseProps {
  img: string,
  title: string,
  originalPrice: number;
  discountAmount: number;
  finalPrice: number;
}

export default function CardRelease({ img, title, originalPrice, discountAmount, finalPrice}:ReleaseProps) {
  return (
    <CardReleaseStyle>
      <div className="image">
      <img src={img} alt="" />
      </div>
      <p>{title}</p>

      <div className="price">
        <span className="desconto">- {discountAmount.toFixed(2)} %</span>
        <span className="preco">R$ {originalPrice.toFixed(2)} </span>
        <span>R$ {finalPrice.toFixed(2)} </span>
      </div>
    </CardReleaseStyle>
  );
}
