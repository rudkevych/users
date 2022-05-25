import styles from './Buton.module.css';
import React from "react";

const Button = props => {
    return (
        <button
            type={props.type || 'button'}
            className={styles.button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;

