import styled from "styled-components"

export const MovieCard = styled.article`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
column-gap: 1rem;
margin: 1rem 10rem;
img {
    width: 100%;
    max-height: auto;
}
`