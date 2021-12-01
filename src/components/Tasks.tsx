import React from "react";
import { useTarefas } from "../state/bancoDeDadosDeTarefas";
import { Tarefa } from "../types/task";
import Task from "./Task";

export interface TasksProps {
}

const Tasks = ({ }: TasksProps) => {
    const tasks = useTarefas();
    return (
        <>
            {tasks.map((taskState) => (
                <Task taskState={taskState} />
            ))}
        </>
    );
};

export default Tasks;