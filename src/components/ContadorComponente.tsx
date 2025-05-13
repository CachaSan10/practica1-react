"use client";
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function ContadorComponente({valorInicial = 0}) {
    const [contador,setContador] = useState(valorInicial);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    const resetear = () => {
        setContador(valorInicial);
    }

    return ( 
        <div className="container">
            <h1>Contador {contador}</h1>
            <button onClick={incrementar} className="btn btn-secondary">Incrementar</button>
            <button onClick={decrementar} className="btn btn-warning"> Decrementar</button>
            <button onClick={resetear} className="btn btn-success">Resetear</button>


        </div>

     );
}

export default ContadorComponente;