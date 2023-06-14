import React, { useState } from 'react';

function TimeCard() {

const [input, setInput] = useState("");

function manejarCambio (e){
  console.log(e.target.value)
  setInput(e.target.value)
}

function manejarEnvio(e){
  e.preventDefault();
  console.log("enviandoinformación")
  const tareaNueva={
    Id:"1",
    texto: input,
    completada: false
  }

}
  return (
    <div className="col-12">
      <form className="d-flex"
      onSubmit= {manejarEnvio}>
        <input className='form-control' 
        type="text" 
        placeholder='escribe una tarea' 
        onChange={manejarCambio} />
        <button className='btn btn-warning'>Agregar</button>
      </form>
    </div>
  )
}

export default TimeCard




/* import React, { useState } from 'react';
import './TimeCard.css';

function TimeCard() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputValue !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue('');
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <form>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button className="añadirTarea" onClick={handleAddTask}>
          Añadir Tarea
        </button>
      </form>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleToggleTask={handleToggleTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <li className="empty">No hay tareas</li>
        )}
      </ul>
    </div>
  );
}

function Task({ task, handleToggleTask, handleDeleteTask }) {
  const handleTaskClick = () => {
    handleToggleTask(task.id);
  };

  const handleDeleteClick = () => {
    handleDeleteTask(task.id);
  };

  return (
    <li className={task.completed ? 'line-through' : ''}>
      <p onClick={handleTaskClick}>{task.text}</p>
      <button className="btn-delete" onClick={handleDeleteClick}>
        X
      </button>
    </li>
  );
}

export default TimeCard;
 */