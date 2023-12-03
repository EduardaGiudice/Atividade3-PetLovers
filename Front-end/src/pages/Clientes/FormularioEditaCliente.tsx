import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormularioEditaCliente: React.FC = () => {
  const [nome, setNome] = useState("Pedro Alcântara de Bragança e Bourbon");
  const [nomeSocial, setNomeSocial] = useState("Dom Pedro");
  const [email, setEmail] = useState("pedro@pedro.com");
  const [estado, setEstado] = useState("Rio de Janeiro");
  const [cidade, setCidade] = useState("Rio de Janeiro");
  const [bairro, setBairro] = useState("Centro");
  const [rua, setRua] = useState("Praça Quinze de Novembro");
  const [numero, setNumero] = useState("48");
  const [codigoPostal, setCodigoPostal] = useState("20010-010");
  const [informacoesAdicionais, setInformacoesAdicionais] = useState(
    "O Paço Imperial é um edifício histórico localizado na atual Praça XV de Novembro, no centro da cidade do Rio de Janeiro, Brasil."
  );

  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12">
        <div className="center-align">
          <h2>Dados do Cliente</h2>
        </div>
        <div className="row">
          <div className="input-field col" style={{ width: "25%" }}>
            <label htmlFor="nome">Nome:</label>
            <br />
            <input 
            id="nome" 
            type="text" 
            name="nome" 
            className="validate" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className="input-field col" style={{ width: "25%" }}>
            <label htmlFor="nomeSocial">Nome Social:</label>
            <br />
            <input
              id="nomeSocial"
              type="text"
              className="validate"
              value={nomeSocial} 
              onChange={(e) => setNomeSocial(e.target.value)}
            />
          </div>
          <div className="input-field col" style={{ width: "50%" }}>
            <label htmlFor="email" className="label">
              Email:
            </label>
            <br />
            <input 
            id="email" 
            type="text" 
            className="validate"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
  
          </div>
        </div>
        <label className="label">Telefones:</label>
        <div className="row">
          <div className="input-field col s1">
            <input type="text" placeholder="DDD" />
          </div>
          <div className="input-field col s2">
            <input type="text" placeholder="Número" />
          </div>
          <div className="col s1">
            <br />
            <button
              style={{ fontSize: "1.5rem" }}
              className="btn"
              type="button"
            >
              +
            </button>
          </div>
          <div className="col">
            <div className="row ml-2">
              <div>
                <div className="row">
                  <div className="col s2">
                    <p>12</p>
                  </div>
                  <div className="col s5">
                    <p>982736432</p>
                  </div>
                  <div className="col s3">
                    <button
                      className="btn red btn-floating btn-small valign-wrapper"
                      type="button"
                    >
                      <span className="valign">X</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4>Endereço</h4>
        <div className="row">
          <div className="input-field col s3">
            <label htmlFor="estado" className="label">
              Estado:
            </label>
            <br />
            <input 
            id="estado" 
            type="text" 
            className="validate"
            value={estado} 
            onChange={(e) => setEstado(e.target.value)} />
          </div>
          <div className="input-field col s3">
            <label htmlFor="cidade" className="label">
              Cidade:
            </label>
            <br />
            <input 
            id="cidade" 
            type="text" 
            className="validate"
            value={cidade} 
            onChange={(e) => setCidade(e.target.value)} />
          </div>
          <div className="input-field col s3">
            <label htmlFor="bairro" className="label">
              Bairro:
            </label>
            <br />
            <input 
            id="bairro" 
            type="text" 
            className="validate"
            value={bairro} 
            onChange={(e) => setBairro(e.target.value)} />
          </div>
          <div className="input-field col s3">
            <label htmlFor="rua" className="label">
              Rua:
            </label>
            <br />
            <input 
            id="rua" 
            type="text" 
            className="validate" 
            value={rua} 
            onChange={(e) => setRua(e.target.value)}/>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s1">
            <label htmlFor="numero" className="label">
              Número:
            </label>
            <br />
            <input 
            id="numero" 
            type="text" 
            className="validate" 
            value={numero} 
            onChange={(e) => setNumero(e.target.value)}/>
          </div>
          <div className="input-field col s2">
            <label htmlFor="codigoPostal" className="label">
              Código Postal:
            </label>
            <br />
            <input 
            id="codigoPostal" 
            type="text" 
            className="validate" 
            value={codigoPostal} 
            onChange={(e) => setCodigoPostal(e.target.value)}/>
          </div>
          <div className="input-field col s8">
            <label htmlFor="informacoesAdicionais" className="label">
              Informações Adicionais:
            </label>
            <br />
            <br />
            <textarea
              id="informacoesAdicionais"
              className="materialize-textarea validate"
              style={{ height: "10rem" }}
              rows={3}
              value={informacoesAdicionais} 
              onChange={(e) => setInformacoesAdicionais(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Link to="/" className="btn">
              Atualizar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioEditaCliente;
