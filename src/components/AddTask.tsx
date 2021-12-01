import React, { ChangeEvent, useState } from "react";
import { cadastrarTarefa } from "../state/bancoDeDadosDeTarefas";
import './AddTask.css';
import Button from "./Button";

export interface AddTaskProps {
    
}

const AddTask = ({}: AddTaskProps) => {
    const [inputData, setInputData] = useState('')

    // com spead
    // const handleInputChange = ( {target}:ChangeEvent<HTMLInputElement>) => {
    //     setInputData(target.value);
    // }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        cadastrarTarefa(inputData);
        setInputData('');

    }

    return (
        <div className='add-task-container'>
            <input
                onChange={handleInputChange}
                value={inputData}
                className='add-task-input'
                type='text' />
            <div className='add-task-button-container' >
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};

export default AddTask;