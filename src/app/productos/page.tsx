"use client"
import ContadorComponente from "@/components/ContadorComponente";
import listaProducto from "@/date/datos";
import "@/styles/producto.css"

export default function productos() {
  console.log(listaProducto)
return(
<div className="container">
  
  <div className="row">
  {listaProducto.map( (producto)=> (
    <div key={producto.id} className="card card-producto" style={{ width: "18rem" }}>
  <div className="card-body ">
    <h5 className="card-title">{producto.nombre}</h5>
    <p className="card-text">{producto.descripcion}</p>
    <ContadorComponente valorInicial={producto.cantidad}/>
  </div>
</div>
  )
  
  
)}

</div>
</div>
    
    )
}