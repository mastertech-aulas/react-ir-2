import React from 'react';
import './counter.css'
import {Link} from "react-router-dom";

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div className={"counter"}>
            <p>Você já clicou {count} vezes</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>Clicar</button>
            <Link to={"/usuario"}>Voltar</Link>
        </div>
    )
}

export default Counter;