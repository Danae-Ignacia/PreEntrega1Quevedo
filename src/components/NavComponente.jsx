import './NavComponente.css'
import BotonComponente from "./BotonComponente";

export default function NavComponente(){
    return(<>
    <div className="container">
    <nav className='barra'>
    <BotonComponente nombre='About us' background='blue' color='yellow'/>
    <BotonComponente nombre='Product' background='black' color='red'/>
    <BotonComponente nombre='Contact' background='gray' color='white'/>
    </nav>
    </div>
    </>

    )
}
