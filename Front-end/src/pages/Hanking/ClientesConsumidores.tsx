import React, { useEffect } from "react";
import M from "materialize-css";
import Select from "react-select";


interface Option {
    value: number;
    label: string;
}

interface TableItem {
  ranking: number;
  nome: string;
  quantidade: number;
  valor: string;
}



const ClientesConsumidores: React.FC = () => {
  useEffect(() => {
    const selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
  }, []);

  const tabelaOptions: Option[] = [
    { value: 1, label: 'Nenhum' },
    { value: 2, label: 'Valor R$' },
    { value: 3, label: 'Quantidade' },

];

const categoriaOptions: Option[] = [
    { value: 1, label: 'Nenhum' },
    { value: 2, label: 'Serviço' },
    { value: 3, label: 'Produto' },

];

  const getTableItens = (): TableItem[] => [
    {
      ranking: 1,
      nome: "Maria Aparecida de Jesus",
      quantidade: 17,
      valor: "R$ 2500,00",
    },
    {
      ranking: 2,
      nome: "Claudio Pereira da Silva",
      quantidade: 15,
      valor: "R$ 2400,00",
    },
    {
      ranking: 3,
      nome: "Maria Antonieta Alves",
      quantidade: 14,
      valor: "R$ 1750,00",
    },
    {
      ranking: 4,
      nome: "Vitor Tadeu de Lima",
      quantidade: 12,
      valor: "R$ 1250,00",
    },
    {
      ranking: 5,
      nome: "Ágatha Oliveira Goncalves",
      quantidade: 11,
      valor: "R$ 1250,00",
    },
    {
      ranking: 6,
      nome: "Erick Barros Oliveira",
      quantidade: 9,
      valor: "R$ 1150,00",
    },
    {
      ranking: 7,
      nome: "João Goncalves Lima",
      quantidade: 9,
      valor: "R$ 1000,00",
    },
    {
      ranking: 8,
      nome: "Giovana Ribeiro Araujo",
      quantidade: 7,
      valor: "R$ 650,00",
    },
    {
      ranking: 9,
      nome: "Laura Santos Martins",
      quantidade: 7,
      valor: "R$ 500,00",
    },
    {
      ranking: 10,
      nome: "Julieta Barbosa Azevedo",
      quantidade: 4,
      valor: "R$ 320,00",
    },
  ];
  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12">
        <div className="center-align">
          <h2>Top 10 Clientes Consumidores</h2>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            <div
              className="input-field"
              style={{
                width: "40%",
                display: "inline-block",
                marginRight: "1rem",
              }}
            >
              <label htmlFor="categoria">Categoria:</label>
              <br />
              <br />

              <Select
                id="categoria"
                options={categoriaOptions}
                styles={{
                  menu: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
                placeholder="Selecione uma categoria"
              />
            </div>
            <div className="input-field"style={{width: "40%",display: "inline-block",marginLeft: "1rem",}}>
              <label htmlFor="ordenarTabela">Ordenar por:</label>
              <br />
              <br />

              <Select
                id="ordenarTabela"
                options={tabelaOptions}
                styles={{
                  menu: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
                placeholder="Selecione como deseja ordenar a Tabela"
              />
            </div>
            <button
              className="btn"
              type="button"
              style={{ marginLeft: "1rem" }}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </form>

      {/* Tabela */}
      <div className="row">
        <div className="col s6 offset-s3 ">
          <table className="striped responsive-table custom-width blue lighten-4">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Nome</th>
                <th>Quantidade de Itens</th>
                <th>Valor Total</th>
              </tr>
            </thead>
            <tbody>
              {getTableItens().map((item) => (
                <tr>
                  <td>{item.ranking}</td>
                  <td>{item.nome}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientesConsumidores;
