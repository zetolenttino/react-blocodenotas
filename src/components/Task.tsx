import React from "react";
import { Tarefa } from "../types/task";
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'
import { excluirTarefa, inverterTarefaCompleta } from "../state/bancoDeDadosDeTarefas";
import { State } from "@hookstate/core";

export interface TaskProps {
    taskState: State<Tarefa>
}

const Task = ({ taskState }: TaskProps) => {
    
    const task = taskState.get()
    const history = useHistory();

    return (
        <div className='task-container' style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className='task-title' onClick={() => inverterTarefaCompleta(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => excluirTarefa(task.id)}>
                    <CgClose />
                </button>
                <button className='see-task-details-button' onClick={() => history.push('/'+task.id)}>
                    <CgInfo />
                </button>
            </div>
        </div>
    )

    // return <div className='task-container'>
    //     {task.title}:{task.id}
    // </div>;
};

export default Task;