import { Titulo as TituloEstilo } from './style'

export type props = {
  children: string
  fontsize?: number
}

const titulo = (props: props) => (
  <TituloEstilo fontsize={props.fontsize}>{props.children}</TituloEstilo>
)

export default titulo
