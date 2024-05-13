import './NavBar.css';
import CartWidget from './CartWidget';
import ButtonComponent from './ButtonComponent';

export default function NavBar(){
    return ( 
    <>
    <div className="container nav-menu pt-5">
      
    <nav className='barra'>
    <h1>Rider Store</h1>
 <ButtonComponent name='Comprar' />
 <ButtonComponent name='Blog' />
 <ButtonComponent name='inicio' />
 <CartWidget></CartWidget>
    </nav>

    </div>
    </>

    )
}
