import { P } from './style'

export type props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
