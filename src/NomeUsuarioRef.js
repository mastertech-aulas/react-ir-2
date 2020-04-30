import React from 'react';

function NomeUsuarioRef() {
    const usuarioInput = React.useRef();

    return (
        <div>
            <h1>
                Ref-Nome usuario
            </h1>
            <input ref={usuarioInput} type="text"/>
            <button onClick={() => {
                alert(usuarioInput.current.value)
            }}>Ver valor</button>
        </div>
    );
}

export default NomeUsuarioRef;
