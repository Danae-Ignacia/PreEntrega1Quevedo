import './App.css'
import ContadorComponente from './components/ContadorComponente'
import NavComponente from './components/NavComponente'
import TituloComponente from './components/TituloComponente'

function App() {
  const styleimg={
  width:'500px',
  height:'auto',
  borderRadius:'50%',
  border:'2px solid gray',
  marginTop:'2rem',
  marginBottom:'2rem'
  }

  return (
    <>
<h2 className='titulo'> Hola React</h2>
<NavComponente/>
<TituloComponente/>
<ContadorComponente/>

    </>
  )
}

export default App
