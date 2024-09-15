import { ButtonStyles } from "./styles";


interface ButtonProps {
    title: string;
}

export default function Button({title}:ButtonProps) {
    return(
        <ButtonStyles>
            {title}
        </ButtonStyles>
    )
}