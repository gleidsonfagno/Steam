import styled from "styled-components";

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 1rem;
    background: ${props => props.theme["darck-300"]};
    border-radius: 4px;
    
    input {
        font-size: 18px;
        width: 100%;
        padding: 19px;
        background: transparent;
        border: 0;
        outline: none;
        color: ${props => props.theme["text"]};
    }

    img {
        padding: 1rem;
    }
`
