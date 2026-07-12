import React from 'react';
import type { ButtonType } from './types/button';

const Button: React.FC<ButtonType> = (props) => {

    const { children, handleClick, style, ...rest } = props;

    return (
        <button 
            onClick={handleClick}
            className={style} 
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;
