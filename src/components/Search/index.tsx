import { SearchBar } from "./styles";

import imgCarrinho from "/assets/search.svg"

export default function Search() {
    return(
        <SearchBar>
            <input title="mecannismo de busca" type="search" placeholder="BUSCAR" />
            <img src={imgCarrinho} alt="" />
        </SearchBar>
    )
}