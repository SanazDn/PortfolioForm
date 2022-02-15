import React from 'react';

 const ButtonList = (props) => {
    return (
        <ul className={props.style}>
            {props.children}
        </ul>
    );
};

export default ButtonList;