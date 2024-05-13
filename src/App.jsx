import './App.css';
import NavBar from './components/NavBar';
import{library} from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <>
<NavBar/>

    </>
  );
}

library.add( faCartShopping);
export default App
