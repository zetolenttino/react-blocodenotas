import React, { useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';
import { Tarefa } from "./types/task";
import AddTask from "./components/AddTask";


const App = () => {
  const [tasks, setTasks] = useState<Tarefa[]>([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

  return (
    <>
      <div className='container'>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;