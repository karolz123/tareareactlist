import React from "react";
import "./tarea.css"

function Tarea({id,tarea, completada, completarTarea, eliminarTarea}){
    return (
<div className="card my-2 p-2"
 onClick= { () => completarTarea(id)}>
        
    <div className="d-flex justify-content-between align-items-center">
        <p className={completada ? "mb-0 tachado" : "mb-0"}>{tarea}</p>
        <button onClick={() => eliminarTarea(id)} className="btn btn-danger">Eliminar</button>
    </div>
</div>
    )
}

export default Tarea