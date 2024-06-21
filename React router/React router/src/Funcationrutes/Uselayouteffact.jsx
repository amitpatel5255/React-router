import React, { useEffect, useLayoutEffect } from 'react';

const Uselayouteffect = () => {


    let user = {
        name: 'sameer',
        age: 26,
        loction: "surat",
        minidata: {
            Lname: "patel"
        }
    }
    // console.log(user.minidata.Lname);
    // let lname = user.minidata.Lname
    // console.log(lname);



    useEffect(() => {
        console.log("useeffect");
    })
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            console.log(result);
        })
    }, [])
    useEffect(() => {
        console.log("useeffect-2");
    })
    useEffect(() => {
        console.log("useeffect-3");
    })
    // console.log("UselayouteffectCompo");
    return (
        <>
            <h1>Uselayouteffect</h1>
        </>
    );
}

export default Uselayouteffect;