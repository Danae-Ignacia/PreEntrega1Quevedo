import { useState } from "react";

export default function ContadorComponente(){
    const [contador, setContador]=useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    };
    return (
    <>
    <h4>Contador Componente</h4>
<p>{contador}</p>
<button onClick={handleClick}>
    +
</button>
        
</>
    );
}