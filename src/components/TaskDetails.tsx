import React from "react";
import { useHistory, useParams } from "react-router";
import Button from "./Button";
import './TaskDetails.css';

export interface TaskDetailsRouterParams {
    taskId: string
}

const TaskDetails = () => {
    const params = useParams<TaskDetailsRouterParams>();
    const history = useHistory();
    return (
        <>
            <div className='back-button-container'>
                <Button onClick={()=>history.goBack()}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskId}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, quam laborum illo rem repudiandae expedita pariatur
                    recusandae quaerat iusto debitis sint doloremque repellendus
                    temporibus iure ut laudantium praesentium ea in.
                </p>
            </div>
        </>
    )
}

export default TaskDetails