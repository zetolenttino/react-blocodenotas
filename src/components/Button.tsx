import React, { MouseEventHandler, ReactNode } from "react";
import './Button.css';

export interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className='button'>
            {children}
        </button>
    );
}

export default Button;