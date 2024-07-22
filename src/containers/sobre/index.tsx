import Titulo from '../../components/titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem iParagrafosum dolor sit amet consectetur adipisicing elit. Excepturi
      quo, deleniti ipsam voluptatem quia error voluptatum ut neque doloremque
      cum. Eos laudantium maiores est quis. Cumque suscipit corrupti distinctio
      facere.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=lucashtl&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucashtl&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
