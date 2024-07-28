import Avatar from '../../components/avatar/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/titulo'
import { Descricao, Botao, SideBarContainer } from './styles'

const sideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas</Titulo>
      <Paragrafo tipo="secundario">Lucashtl</Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Engenheiro front-end
      </Descricao>
      <Botao>Trocar tema</Botao>
    </SideBarContainer>
  </aside>
)

export default sideBar
