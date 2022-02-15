import React from 'react';

import classes from './Button.module.css';

 const Button = (props) => {
    return (
        <li className={classes.button}>
            <a
            href={props.href}
            onClick={props.handleClick}
            >
            {props.label}
            </a>
        </li>
    );
};

export default Button;