import React from 'react';
import LogoReact from './assets/react.svg';
import TimeCard from './TimeCard';
import Tarea from './Tarea';
import ListaDeTarea from './ListaDeTareas';

function App() {
  return (

    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column align-items-center mt-5">
              <img src={LogoReact} alt="" width="100px" />
              <h1 className='mt-4'>Lista de tareas</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <ListaDeTarea />
        </div>
      </div>
    </div>




  )
}

export default App;

/* import React from 'react';
import TimeCard from './TimeCard';

function App() {
  const customToggleTask = (taskId) => {
    // Personaliza la lógica para cambiar el estado de una tarea
    console.log('Tarea con ID', taskId, 'cambiada');
  };

  const customDeleteTask = (taskId) => {
    // Personaliza la lógica para eliminar una tarea
    console.log('Tarea con ID', taskId, 'eliminada');
  };

  return (
    <div>
      <h1>Manu te amo</h1>
      <TimeCard
        handleToggleTask={customToggleTask}
        handleDeleteTask={customDeleteTask}
      />
    </div>
  );
}

export default App;
 */