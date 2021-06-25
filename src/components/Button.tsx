import { useState, ButtonHTMLAttributes } from "react";

import '../styles/button.scss';

type ButtonPropsExample = {
    text?: string;
    children?: string;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {

    return (
        <button className= "button" {...props}/>
    )
}

export function ButtonExample(props: ButtonPropsExample) {

    return (
        <button>{props.children || props.text || 'Default' }</button>
    )
}

export function ButtonIncrement(props: ButtonProps) {
    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
    }


    return (
        <button onClick={increment}>
            { counter }
        </button>
    )
}