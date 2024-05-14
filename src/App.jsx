import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import{library} from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <>
<NavBar/>
<div>
<ItemListContainer greeting='Bienvenidos a Biker Store'/>
<ItemListContainer textGreeting='Suscribete y recibe nuestras increibles promociones'/>
</div>
    </>
  );
}

library.add( faCartShopping);
export default App
