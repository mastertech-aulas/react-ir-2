import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Você já clicou {count} vezes</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>Clicar</button>
        </div>
    )
}

export default Counter;