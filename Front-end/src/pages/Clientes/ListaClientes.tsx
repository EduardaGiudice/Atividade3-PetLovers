import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Cliente {
  nome: string;
  nomeSocial: string;
  email: string;
  codigoPostal: string;
  numero: string;
  telefone1: string;
  telefone2?: string;
}

export default function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const clientes: Cliente[] = [
      {
        nome: "Pedro Alcântara de Bragança e Bourbon",
        nomeSocial: "Dom Pedro",
        email: "pedro@pedro.com",
        codigoPostal: "20010-010",
        numero: "48",
        telefone1: "(21) 22152622",
      },
      {
        nome: " Teresa Cristina de Bourbon-Duas Sicílias",
        nomeSocial: " Mãe dos Brasileiros",
        email: "teresa@teresa.com",
        codigoPostal: "20010-010",
        numero: "48",
        telefone1: "13 374837421",
        telefone2: "13 947362746",
      },
      {
        nome: "Isabel Cristina Leopoldina Augusta Gonzaga de Bourbon e Bragança",
        nomeSocial: "Princesa Isabel",
        email: "isabel@isabel.com",
        codigoPostal: "12857463",
        numero: "48",
        telefone1: "13 374837421",
        telefone2: "13 947362746",
      },
      {
        nome: " Leopoldina Teresa Gonzaga de Bragança e Bourbon-Duas Sicílias",
        nomeSocial: " Pricesa Leopoldina",
        email: "leopoldina@leopoldina.com",
        codigoPostal: "12857463",
        numero: "584",
        telefone1: "13 374837421",
        telefone2: "13 947362746",
      },
    ];
    setClientes(clientes);
  }, []);

  function listarClientes(clientes: Cliente[]) {
    return clientes.map((cliente) => (
      <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
        <a className="collection-item" style={{ position: "relative" }}>
          <div className="row">
            <div className="col s5">
              <h5>Nome: {cliente.nome}</h5>
              <h6>Nome Social: {cliente.nomeSocial}</h6>
              <h6>Email: {cliente.email}</h6>
            </div>
            <div className="col s4">
              <br />
              <br />
              <h6>Código Postal: {cliente.codigoPostal}</h6>
              <h6>Nº Residência: {cliente.numero}</h6>
            </div>
            <div className="col s3">
              <h5>Telefones:</h5>
              <ul>
                <li>{cliente.telefone1}</li>
                <li>{cliente.telefone2}</li>
              </ul>
            </div>
          </div>
          <Link to="/EditarCliente" className="btn waves" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
          Vizualizar
        </Link>

          <button
            className="btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
      </div>
    ));
  }

  return (
    <>
      <div style={{ margin: "1em" }}>
        <div className="center">
          <br/>
        <h2>Clientes</h2>
        </div>
        <Link to="/CadastrarCliente" className="btn waves-effect waves-light blue">
          Cadastrar Cliente
        </Link>
        <br/>
        <br/>
        <br/>

      </div>
      <div className="collection">{listarClientes(clientes)}</div>;
    </>
  );
}
