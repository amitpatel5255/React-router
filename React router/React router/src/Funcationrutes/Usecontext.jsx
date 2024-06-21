import React from 'react';
import ChildA from './ChildA';
import { createContext } from 'react';

const Fname = createContext()

const Usecontext = () => {
    return (
        <>
            <h1>Usecontext</h1>
            <Fname.Provider value="name">
                <ChildA />
            </Fname.Provider>

        </>
    );
}

export default Usecontext;
export { Fname }