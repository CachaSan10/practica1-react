"use client";
import { useState } from "react";
import "@/styles/contador.css"

function ContadorComponente({valorInicial = 0}) {
    const [contador,setContador] = useState(valorInicial);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    return ( 
        <div className="container text-center ">
              <h1>Cantidad</h1>
            <div className="d-flex justify-content-center">
                  <div className="cantidad-class ">
                {contador}
            </div>
            </div>
          
            <button onClick={incrementar} className="btn btn-secondary boton">
             Incrementar
            </button>
             <button onClick={decrementar} className="btn btn-warning boton">
           Decrementar
            </button>
    </div>

     );
}

export default ContadorComponente;