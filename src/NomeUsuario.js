import React from 'react';

function NomeUsuario() {
    const [usuario, setUsuario] = React.useState("");

    return (
        <div>
            <h1>
                Nome {usuario}
            </h1>
            <input value={usuario} onChange={(e) => {
                setUsuario(e.target.value)
            }} type="text"/>
            <button onClick={() => {
            }}>Ver valor</button>
        </div>
    );
}

export default NomeUsuario;
