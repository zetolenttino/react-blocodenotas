import React from "react";
import { Tarefa } from "../types/task";
import './Task.css';

export interface TaskProps {
    task: Tarefa;
}

const Task = ({ task }:TaskProps) => {
    return <div className='task-container'>
        {task.title}
    </div>;
};

export default Task;