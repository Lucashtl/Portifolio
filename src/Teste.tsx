import styled from 'styled-components'

type Botaoprops = {
  principal: boolean
  fontsize?: string
}

const Botao = styled.button<Botaoprops>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontsize || '20px'};
  width: 300px;
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function teste() {
  return (
    <>
      <Botao fontsize="10px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>cancelar</Botao>
      <BotaoPerigo as="a" principal={false}>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default teste
