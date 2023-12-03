import { useState, useEffect } from "react";
import M from 'materialize-css';
import Select from 'react-select';

interface ProdServ {
  nome: string;
  categoria: string;
  valor: string;
}

export default function ListaProdServ() {
  const [prodserv, setProdserv] = useState<ProdServ[]>([]);
  const [editedCategoria, setEditedCategoria] = useState<string>("");
  const [editedNome, setEditedNome] = useState<string>("");
  const [editedValor, setEditedValor] = useState<string>("");
  
  useEffect(() => {
    const selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
  }, []);

  const categoriaOptions = [
    { value: 1, label: 'Serviço' },
    { value: 2, label: 'Produto' },
  ];


  function handleEditClick(index: number) {
    const itemToEdit = prodserv[index];
    setEditedNome(itemToEdit.nome);
    setEditedValor(itemToEdit.valor);
  }

  useEffect(() => {
    const prodservData: ProdServ[] = [
      {
        nome: "Anti-Pulgas",
        categoria: "Produto",
        valor: "70",
      },
      {
        nome: "Cortar Unhas",
        categoria: "Serviço",
        valor: "20",
      },
      {
        nome: "Coleira",
        categoria: "Produto",
        valor: "30",
      },
      {
        nome: "Tosa",
        categoria: "Serviço",
        valor: "60",
      },
      {
        nome: "Banho",
        categoria: "Serviço",
        valor: "50",
      },
    ];
    setProdserv(prodservData);
  }, []);

  function listarProdServ(prodserv: ProdServ[]) {
    return prodserv.map((prod, index) => (
      <div
        key={index}
        style={{ margin: "1em", borderBottom: "1px solid #ddd" }}
      >
        <a className="collection-item" style={{ position: "relative" }}>
          <div className="row">
            <div className="col s5">
              <h5>Nome: {prod.nome}</h5>
            </div>
            <div className="col s3">
              <h5>Categoria: {prod.categoria}</h5>
            </div>
            <div className="col s3">
              <h5>Valor: R${prod.valor}</h5>
            </div>
          </div>
          <button
            className="btn pl-2"
            style={{ position: "absolute", top: "10px", right: "60px" }}
            onClick={() => handleEditClick(index)}
          >
            Editar
          </button>
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
      <div className="row" style={{ margin: "3em" }}>
      <div className="center">
        <br/>
      <h2>Produtos e Serviços</h2>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="input-field col s3">
          <label htmlFor="categoriaItem">Categoria:</label>
          <br />
          <br />
          <Select
            id="categoriaItem"
            options={categoriaOptions}
            placeholder="Selecione uma categoria"
            />
        </div>
        <div className="input-field col s3">
          <label htmlFor="nomeItem" className="label">
            Nome:
          </label>
          <br />
          <br />

          <input
            id="nomeItem"
            type="text"
            className="validate"
            value={editedNome}
            onChange={(e) => setEditedNome(e.target.value)}
          />
        </div>
        <div className="input-field col s1">
          <label htmlFor="valorItem" className="label">
            Valor:
          </label>
          <br />
          <br />
          <input
            id="valorItem"
            type="text"
            className="validate"
            value={editedValor}
            onChange={(e) => setEditedValor(e.target.value)}
          />
        </div>
        <div className="col s1">
          <br />
          <br/>
          <br />

          <button className="btn" type="button">
            Salvar
          </button>
        </div>
      </div>
      <div className="collection">{listarProdServ(prodserv)}</div>
    </>
  );
}
