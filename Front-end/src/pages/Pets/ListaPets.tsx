import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


interface Pet {
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
  nomeDono: string;
  cpfDono: string;
  telefoneDono: string;
  telefoneDono2?: string;
}


const ListaPets: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    let petsData: Pet[] = [
      {
        nome: "Belinha",
        tipo: "Cachorro",
        raca: 'Pinsher',
        genero: 'Fêmea',
        nomeDono: 'Francisca de Moraes',
        cpfDono: '28374837421',
        telefoneDono: '13 947362746',
        telefoneDono2: '13 984738473'
      },
      {
        nome: "Max",
        tipo: "Cachorro",
        raca: 'Golden Retriever',
        genero: 'Macho',
        nomeDono: 'Eduardo de Lima',
        cpfDono: '58475847482',
        telefoneDono: '12 994738273'
      },
      {
        nome: "Sofia",
        tipo: "Gato",
        raca: 'Siamês',
        genero: 'Fêmea',
        nomeDono: 'Maria Eduarda de Moraes',
        cpfDono: '58474837243',
        telefoneDono: '13 947384732',
        telefoneDono2: '13 936273643'
      },
      {
        nome: "Lassie",
        tipo: "Cachorro",
        raca: 'Vira-lata',
        genero: 'Fêmea',
        nomeDono: 'Mauricio de Souza',
        cpfDono: '483948394834',
        telefoneDono: '13 948394834',
        telefoneDono2: '13 9493840349'
      }
    ];

    setPets(petsData);
  }, []);

  function listarPets(pets: Pet[]) {
    return pets.map((pet) => {
      return (
        <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
          <a
            className="collection-item"
            style={{ position: "relative" }}
          >
            <div className="row">
              <div className="col s5">
                <h5>Nome: {pet.nome}</h5>
                <h6> Tipo: {pet.tipo}</h6>
                <h6>Raça: {pet.raca}</h6>
                <h6>Gênero: {pet.genero}</h6>
              </div>
              <div className="col s4">
                <br />
                <br />
                <h6>Dono: {pet.nomeDono}</h6>
                <h6>CPF: {pet.cpfDono}</h6>
              </div>
              <div className="col s3">
                <h5>Telefones:</h5>
                <ul>
                  <li>{pet.telefoneDono}</li>
                  {pet.telefoneDono2 && <li>{pet.telefoneDono2}</li>}
                </ul>
              </div>
            </div>
            <Link
              className="btn waves"
              to='/EditarPet'
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              Visualizar
            </Link>
            <button
              className="btn-floating btn waves red pl-2"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </a>
        </div>
      );
    });
  }

  return (
    <>
    <div style={{ margin: "1em" }}>
      <div className="center">
        <br/>
      <h2>Pets</h2>
      </div>
      <Link to="/CadastrarPet" className="btn waves-effect waves-light blue">
        Cadastrar Pet
      </Link>
      <br/>
      <br/>
      <br/>

    </div>
    <div className="collection">{listarPets(pets)}</div>;
  </>
  );
};

export default ListaPets;