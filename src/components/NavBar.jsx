import "./NavBar.css";
import logo from "../imgs/logo-biker.png";
import CartWidget from "./CartWidget";
import ButtonComponent from "./ButtonComponent";

export default function NavBar() {
    const clickComprar = () => {
        console.log('Ir a comprar');
    };
    const clickBlog = () => {
        console.log('Ir al blog');
    };
    const clickNosotros = () => {
        console.log('Ir a nuestra historia');
    };

  return (
      <header className="container-fluid nav-menu pt-5 section-header">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3">
            <img src={logo} className="logo-header" alt="LogoBiker" />
          </div>
          <div className="col-lg-9">
            <nav className="menu">
              <ButtonComponent name="Comprar" click={clickComprar} />
              <ButtonComponent name="Blog" click={clickBlog} />
              <ButtonComponent name="Nosotros" click={clickNosotros} />
              <CartWidget></CartWidget>
            </nav>
          </div>
        </div>
      </header>
  );
}
