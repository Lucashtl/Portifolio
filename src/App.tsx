import EstiloGobal, { Containers } from './styles'
import SideBar from './containers/sidebar'

import Sobre from './containers/sobre'
import Projetos from './containers/projetos'
function App() {
  return (
    <>
      <EstiloGobal />
      <Containers>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Containers>
    </>
  )
}

export default App
