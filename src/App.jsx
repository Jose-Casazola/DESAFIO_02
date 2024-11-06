import React, { useState } from 'react'
import './App.css'

function App() {

const [tasks, setTasks] = useState([]);
const [newTask, setNewTaks] = useState('');

const handleInputChange = (event) => {
  setNewTaks(event.target.value);
}

const handleAddTask = () => {
  if(newTask.trim() !== '') {
    setTasks([...tasks, newTask]);
    setNewTaks('');
  }
};

const handleDeleteTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
};

  return (
    <div>
    <h1>LISTA DE TARREAS</h1>

<div className="input-group mb-3">
    <input type="text" className="form-control" placeholder='Agregar Tarea' aria-label="Recipient's username" aria-describedby="button-addon2"
      value={newTask}
      onChange={handleInputChange}
    />
    <button className="btn btn-secondary" type="button" id="button-addon2" onClick={handleAddTask}>Agregar Tarea</button>
</div>
<hr />

      {tasks.map((task, index) => (
        
      <button className='Tarea' key={index}>
          {task}

      <button className="borrar" type="button" id="button-addon2" onClick={() => handleDeleteTask(index)}>Eliminar</button>
      </button>
       
      ))}

</div>
       
  );
}

export default App