import { useState } from "react";

type ButtonProps = {
    text?: string;
    children?: string;
}

export function Button(props: ButtonProps) {

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