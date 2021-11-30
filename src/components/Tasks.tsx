import React from "react";
import { Tarefa } from "../types/task";
import Task from "./Task";


export interface TasksProps {
    tasks: Tarefa[];
}
const Tasks = ({ tasks }: TasksProps) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} />
            ))}
        </>
    );
};

export default Tasks;