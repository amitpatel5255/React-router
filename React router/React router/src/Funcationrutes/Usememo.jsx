import React, { useState } from 'react';
import { useMemo } from 'react';

const Usememo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multicount = useMemo(function multicount() {
        console.log("multicount");
        return count * 5
    }, [count])
    return (

        <>

            <h1>Usememo</h1>
            <h2>{count} count</h2>
            <h2>{item} item</h2>
            <h3>{multicount} multicount</h3>

            <button onClick={() => setCount(count + 1)}>count-multi-call</button>
            <button onClick={() => setItem(item + 5)}>item call</button>

        </>

    );
}

export default Usememo;