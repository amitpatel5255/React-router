import React from 'react';
import { Fname } from './Usecontext';
// import { Consumer } from './Usecontext';

const ChildC = () => {
    return (

        <>
            <p>this is my web page data</p>

            <Fname.Consumer>
                {
                    (Hello) => {
                        return <h1>hello{Hello}</h1>
                    }
                }
            </Fname.Consumer>


        </>
    );
}

export default ChildC;