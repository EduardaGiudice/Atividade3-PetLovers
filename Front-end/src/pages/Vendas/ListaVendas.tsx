import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


interface Venda {
  nome: string;
  cpf: string;
  item: string;
  categoria: string;
  valor: string;
}



const ListaVendas: React.FC = () => {
  const [vendas, setVendas] = useState<Venda[]>([]);

  useEffect(() => {
    const vendasData: Venda[] = [
      {
        nome: "Maria Aparecida de Moraes",
        cpf: '48475647382',
        item: 'Banho',
        categoria: 'Serviço',
        valor: '50'
      },
      {
        nome: "Marcos Antonio Souza",
        cpf: '584958485743',
        item: 'Coleira',
        categoria: 'Produto',
        valor: '30'
      },
      {
        nome: "Celso Tadeu",
        cpf: '584947364732',
        item: 'Cortar Unhas',
        categoria: 'Serviço',
        valor: '20'
      },
      {
        nome: "Vitor Antônio",
        cpf: '103947362345',
        item: 'Tosa',
        categoria: 'Serviço',
        valor: '60'
      }
    ];
    setVendas(vendasData);
  }, []);

  function listarVendas(vendas: Venda[]) {
    return vendas.map((venda, index) => (
      <div key={index} style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
        <a
          className="collection-item"
          style={{ position: "relative" }}
        >
          <div className="row">
            <div className="col s5">
              <h5>Cliente: {venda.nome}</h5>
              <h6>CPF: {venda.cpf}</h6>
            </div>
            <div className="col s4">
              <h5>Item: {venda.item}</h5>
              <h6>Categoria: {venda.categoria}</h6>
            </div>
            <div className="col s3">
              <br />
              <h5>Valor: R${venda.valor}</h5>
            </div>
          </div>

          <Link
          to="/EditarVenda"
            className="btn waves"
            style={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            Visualizar
          </Link>
          <button
            className=" btn-floating btn waves red pl-2"
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
      <h2>Vendas</h2>
      </div>
      <Link to="/CadastrarVenda" className="btn waves-effect waves-light blue">
        Cadastrar Venda
      </Link>
      <br/>
      <br/>
      <br/>
    </div>
    <div className="collection">
      {listarVendas(vendas)}
    </div>
    </>
  );
};

export default ListaVendas;