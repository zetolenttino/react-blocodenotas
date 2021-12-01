import React, { MouseEventHandler, ReactNode } from "react";
import './Button.css';

export interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

// com spead
// const Button = ({ children, onClick }: ButtonProps) => {
//     return (
//         <button onClick={onClick} className='button'>
//             {children}
//         </button>
//     );
// }

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className='button'>
            {props.children}
        </button>
    );
}

export default Button;