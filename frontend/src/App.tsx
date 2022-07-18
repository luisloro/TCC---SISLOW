import Cabecalho from "./componentes/cabecalho"
import CadCliente from "./componentes/cad.cliente"
import Menu from "./componentes/menu"

function App() {
  return (
    <>
      <Cabecalho />
      <section id="menu">
          <div className="barra-menu">
            <Menu />
          </div>
        </section>
      <main>
        
        <CadCliente />
      </main>
    </>
  )
}

export default App
