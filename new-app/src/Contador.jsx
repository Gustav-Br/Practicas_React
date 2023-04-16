import React, {useState} from 'react';

function Contador(){
    const [count, setCount] = useState(0);

    const handleIncrement = ()=> setCount(count + 1)
    const handleDecrement = ()=> setCount(count - 1)

    return(
        <div>
            <button onClick={handleIncrement}>Incrementar</button>

            <button onClick={handleDecrement}>Decrementar</button>

            <div>{count}</div>
        </div>
    )
}

export default Contador;