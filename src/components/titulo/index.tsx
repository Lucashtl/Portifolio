import { Titulo as TituloEstilo } from './style'

export type props = {
  children: string
  fontSize?: number
}

const titulo = (props: props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default titulo
