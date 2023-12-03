import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import M from 'materialize-css';
import Select from 'react-select';

interface OwnerOption {
    value: number;
    label: string;
}

export default function FormularioCadastroPet(props: any) {
    const [nomePet, setNomePet] = useState("Belinha");
    const [racaPet, setRacaPet] = useState("Pinsher");


    useEffect(() => {
        const selects = document.querySelectorAll('select');
        M.FormSelect.init(selects);
    }, []);

    const donoOptions: OwnerOption[] = [
        { value: 1, label: 'Francisca de Moraes' },
        { value: 2, label: 'Carlos de Almeida' },
        { value: 3, label: 'Eduardo Carvalho' },
    ];

    const generoOptions: OwnerOption[] = [
        { value: 1, label: 'Macho' },
        { value: 2, label: 'Fêmea' },
    ];

    const tipoOptions: OwnerOption[] = [
        { value: 1, label: 'Cachorro' },
        { value: 2, label: 'Gato' },
    ];
    
    return (
        <div style={{ margin: "3em" }}>
            <form className="col s12">
                <div className="center-align">
                    <h2>Dados de Pets</h2>
                </div>
                <div className="row">
                    <div className="input-field col s3 offset-s4">
                        <label htmlFor="tipoItem">Dono:</label>
                        <br />
                        <br/>
                        <Select
                            id="tipoItem"
                            options={donoOptions}
                            styles={{
                                menu: provided => ({ ...provided, zIndex: 9999 }),
                            }}
                            placeholder="Selecione um dono"
                            value={donoOptions[0]}

                        />
                    </div>
                </div>
                <h4>Dados do Pet</h4>
                <div className="row">
                    <div className="input-field col s3">
                        <label htmlFor="nomePet" className="label">
                            Nome:
                        </label>
                        <br />
                        <br />
                        <input
                            id="nomePet"
                            type="text"
                            className="validate"
                            value={nomePet}
                            onChange={(e) => setNomePet(e.target.value)}
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="tipoPet">Tipo:</label>
                        <br />
                        <br />
                        <Select 
                        id="tipoPet" 
                        value={tipoOptions[0]}
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="racaPet" className="label">
                            Raça:
                        </label>
                        <br />
                        <br />
                        <input
                            id="racaPet"
                            type="text"
                            className="validate"
                            value={racaPet}
                            onChange={(e) => setRacaPet(e.target.value)}
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="generoPet">Gênero:</label>
                        <br />
                        <br/>
                        <Select 
                        id="generoPet"
                        options={generoOptions}
                        placeholder="Selecione um gênero"
                        value={generoOptions[1]}
                         />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Link to='/ListaPets' className="btn" type="submit"  style={{ position: "absolute", bottom: 50, left:50 }}>
                            Atualizar
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}