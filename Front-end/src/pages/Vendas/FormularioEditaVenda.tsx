import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Select from 'react-select';
import M from 'materialize-css';


const FormularioEditaVenda: React.FC = () => {

  useEffect(() => {
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  }, []);

  const clienteOptions = [
    { value: 1, label: 'Maria Aparecida Soares' },
    { value: 2, label: 'Carlos de Almeida' },
    { value: 3, label: 'Eduardo Carvalho' },
  ];

  const itensOptions = [
    { value: 1, label: 'Banho' },
    { value: 2, label: 'Tosa' },
    { value: 3, label: 'Cortar Unhas' },
    { value: 4, label: 'Vacinação tipo A' },
    { value: 5, label: 'Vermifugação tipo C' },
    { value: 6, label: 'Banho Anti-pulgas' },
  ];

  const categoriaOptions = [
    { value: 1, label: 'Serviço' },
    { value: 2, label: 'Produto' },
  ];

  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12">
        <div className="center-align">
          <h2>Dados da Venda</h2>
        </div>
        <div className="row">
          <div className="input-field col s3 offset-s4">
            <label htmlFor="tipoItem">Cliente:</label>
            <br />
            <br/>
            <Select
              id="tipoItem"
              options={clienteOptions}
              styles={{
                menu: provided => ({ ...provided, zIndex: 9999 }),
              }}
              placeholder="Selecione um Cliente"
              value={clienteOptions[0]}

            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3 offset-s4">
            <label htmlFor="tipoItem">Categoria:</label>
            <br />
            <br />

            <Select 
            id="tipoItem"
            options={categoriaOptions}
            value={categoriaOptions[0]}
            />
 
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6 offset-s3">
            <label htmlFor="tipoPet">Item:</label>
            <br />
            <br/>
            <Select
              id="tipoItem"
              options={itensOptions}
              styles={{
                menu: provided => ({ ...provided, zIndex: 9999 }),
              }}
              placeholder="Selecione um Item"
              value={itensOptions[0]}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 center">
            <h5>Valor: R$40</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
          <Link to='/ListaVendas' className="btn" type="submit" style={{ position: "absolute", bottom: 50, left: 50 }}>
              Atualizar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioEditaVenda;