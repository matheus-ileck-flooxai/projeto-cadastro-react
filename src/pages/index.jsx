import Navegador from '../components/Navegador'

export default function Inicio() {

  return (
    <div style={{

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height:'100vh'
    }}>
      <Navegador destino="/estiloso" texto="Estiloso"></Navegador>
      <Navegador destino="/exemplo"texto="Exemplo" color="#9400d3"></Navegador>
      <Navegador destino="/jsx" texto="Jsx" color="crimson"></Navegador>
      <Navegador destino="/navegacao" texto="Navegação  #01" color="crimson"></Navegador>
      <Navegador destino="/cliente/sp-2/123" texto="Navegação  #02" color="crimson"></Navegador>



    </div>
  )
}