import React, { useState } from "react";
import { useEffect } from "react";
import User from "./User";


const Useeffect = () => {
    const [count, setCount] = useState(1)
    const [data, setData] = useState(1)
    useEffect(() => {
        console.log("useEffect");
    }, [count])
    return (
        <>
            <h1>Useeffect</h1>
            <h3>{count}{data}</h3>
            <button onClick={() => setCount(count + 1)}>update</button>
            <button onClick={() => setData(data -1)}>update-data</button>
        </>
    );
}

export default Useeffect;
// why using useEffect
// why not using loop
// es lintconfig
// browser test
// dev dependency
// can we insert own  react dependency
