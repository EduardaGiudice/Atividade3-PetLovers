import { Link } from "react-router-dom";

const Index = () => {
  return (
    <nav className="yellow darken-1">
      <div className="nav-wrapper" style={{ marginLeft: '10px' }}>
        <Link to="/" className="brand-logo">
          PetLovers ♥
        </Link>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/" className="white-text">
              Clientes
            </Link>
          </li>
          <li>
            <Link to="/ListaPets" className="white-text">
              Pets
            </Link>
          </li>
          <li>
            <Link to="/ListaProdServ" className="white-text">
              Produtos e Serviços
            </Link>
          </li>
          <li>
            <Link to="/ListaVendas" className="white-text">
              Vendas
            </Link>
          </li>
          <li>
            <Link to="/ClientesConsumidores" className="white-text">
              Clientes Consumidores
            </Link>
          </li>
          <li>
            <Link to="/MaisConsumidos" className="white-text">
              Mais Consumidos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
