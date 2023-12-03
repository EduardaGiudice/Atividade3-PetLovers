import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css';
import Select from 'react-select';

interface OwnerOption {
    value: number;
    label: string;
}

export default function FormularioCadastroPet(props: any) {

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
                    <h2>Cadastro de Pets</h2>
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
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="tipoPet">Tipo:</label>
                        <br />
                        <br />
                        <Select 
                        id="tipoPet"
                        options={tipoOptions}
                        styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 }),
                        }}
                        placeholder="Selecione um tipo"
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
                        />
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="generoPet">Gênero:</label>
                        <br />
                        <br />
                        <Select 
                        id="generoPet"
                        options={generoOptions}
                        styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 }),
                        }}
                        placeholder="Selecione um gênero"
                         />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Link to='/ListaPets' className="btn" type="submit" style={{ position: "absolute", bottom: 50, left:50 }}>
                            Cadastrar
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}