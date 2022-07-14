import React, { useState } from 'react';
import AddEntry from './AddEntry';
import ShowEntry from './ShowEntry';

const Task = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  // const fetchTask = () => {
  //   const list = tasks.map((task) => task);
  //   console.log(list);
  //   return list;
  // };

  // fetchTask();

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='task_Wrapper'>
      <AddEntry onAdd={addTask} />
      {tasks ? (
        <ShowEntry taskValue={tasks} onDelete={deleteTask} />
      ) : (
        'No Data to show'
      )}
    </div>
  );
};

export default Task;
