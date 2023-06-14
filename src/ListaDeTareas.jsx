import { useState } from "react";
import Tarea from "./Tarea";
import TimeCard from "./TimeCard";

function ListaDeTarea() {

            const [tareas, setTareas] = useState([])
        function ListaDeTareas(tarea){
            console.log('tareaagregada...')
            console.log(tarea)
        }

    return (
        <>
        

        < TimeCard 
        />
        {
                    tareas.map( tarea => {
                        <Tarea
                        tarea={tarea.tarea}
                        completada={tarea.completada}
                        
                        />
                    } )
  
        }

        </>
  )

}

export default ListaDeTarea