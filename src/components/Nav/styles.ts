import styled from "styled-components";

export const NavgationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1rem;
    background: ${props => props.theme["darck-500"]};
`

export const Navlink = styled.div`
    display: flex;
    gap: 80px;
    align-items: center;
    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 2.5rem;

        li{
            a{
                text-decoration: none;
                color: ${props => props.theme.text};
                font-size: 1.125rem;
                font-style: normal;
                font-weight: 500;
                text-transform: uppercase;
                line-height: 21.78px;
                
                padding-bottom: 1.7rem;
                &:hover{
                    color: ${props => props.theme["blue-300"]};

                    border-bottom: .25rem solid ${props => props.theme["blue-300"]};
                }
            }
        }
    }

    @media (max-width: 53.625rem) {
        ul{
            display: none;
        }
    }
`

export const Navicones = styled.div`
    display: flex;
    gap: 2rem;

    a{
        padding: .5rem;
        border-radius: 50%;
        background: ${props => props.theme["darck-300"]};

        /* &:hover{
            background: ${props => props.theme["blue-300"]};
        } */
        img {
            display: block;
            max-width: 24px;
        }
    }
    div{
        padding: .5rem;
        border-radius: 50%;
        background: ${props => props.theme["darck-300"]};
    }

    @media (max-width: 26.5625rem) {
        span{
            display: none;
        }
    }
`