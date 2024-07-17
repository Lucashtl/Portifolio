import styled, { createGlobalStyle } from 'styled-components'

const EstiloGobal = createGlobalStyle`
*{
padding: 0;
Margin: 0;
box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body{
padding-top:80px;

@media (max-width: 768px){
padding-top: 16px;
}
}
`

export const Containers = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`

export default EstiloGobal
