import React, { useState } from 'react';

import "./style1.css";

const App = () => {

    const [count, setCount] = useState(4);
    const [name, setName] = useState("sdfsdf");

    const adder = () => {
        setCount(count + 1)
    }

    const deductor = () => {
        setCount(count - 1)
    }

    console.log("refreshed");

    const styling = {
        color: "red",
        background: "black",
        height: 50,
        fontSize: 100
    }

    return (
        <div className={` ${count < 0 ? "neg" : count >=10 ? "over" : ""}`}>
            <h1> Count is :  {count} </h1>
            <button onClick={deductor}>Deduct</button>
            <button onClick={adder}>Add</button>
        </div>
    );
}

export default App

/**
 * 
 *  <h1 style=""> sdfjdlf</h1>
 * 
 */