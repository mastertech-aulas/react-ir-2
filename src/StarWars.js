import React from 'react';

function StarWars() {
    const [planetas, setPlanetas] = React.useState([]);

    return (
        <div>
            <button onClick={() => {
                // url = https://swapi.dev/api/planets/
                fetch("https://swapi.dev/api/planets/")
                    .then(response => response.json())
                    .then((json) => {
                        setPlanetas(json.results);
                    })
            }}>Consultar planetas</button>
            <p>Lista de planetas:</p>
            {
                planetas.map((planeta) => {
                    return <div>
                        <p>Nome: {planeta.name}</p>
                        <p>Tipo de terreno: {planeta.terrain}</p>
                    </div>
                })
            }
        </div>
    )

}

export default StarWars;