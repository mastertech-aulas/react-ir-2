import React from 'react';


function Cep() {
    const [cep, setCep] = React.useState("");
    const [rua, setRua] = React.useState("");

    return (
        <div>
            <span>Você mora em: {rua}</span><br/>
            <input type={"text"} value={cep} onChange={(e) => {
                setCep(e.target.value);
            }}/>
            <button onClick={() => {
                // url = https://viacep.com.br/ws/01001000/json/
                fetch("https://viacep.com.br/ws/" + cep + "/json/")
                    .then(response => response.json())
                    .then((json) => {
                        setRua(json.logradouro);
                    })
            }}>Consultar</button>
        </div>
    )
}

export default Cep;

