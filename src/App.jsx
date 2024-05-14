import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import{library} from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import BannerPrincipal from './components/BannerPrincipal';


function App() {

  return (
    <>
<NavBar/>
<div>
<BannerPrincipal/>
<ItemListContainer greeting='Bienvenidos a Biker Store'/>
<ItemListContainer textGreeting='Suscribete y recibe nuestras increibles promociones'/>

</div>
    </>
  );
}

library.add( faCartShopping);
export default App
