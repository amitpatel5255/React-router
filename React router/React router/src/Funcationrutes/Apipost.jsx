import React, { useState } from 'react'
// import Usestate from './Usestate'

const Apipost = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submit = () => {
        console.log("submit");
        // console.log(name, email, password);password
        let data = { name, email, password }
        console.log(data);
        if (name === "" || email === "" || password === "") {
            alert("plz enter your data")
        }
        else {
            fetch("http://localhost:5000/posts", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((result) => {
                console.log(result);
                result.json().then((resp) => {
                    console.log(resp);
                })
            })
            setName("")
            setEmail("")
            setPassword("")
        }
    }
    return (
        <>
            <h1>Api-post</h1>
            name: <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input><br></br><br></br>
            email: <input type='email' value={email} onChange={(a) => setEmail(a.target.value)}></input><br></br><br></br>
            password: <input type='password' value={password} onChange={(m) => setPassword(m.target.value)}></input><br></br><br></br>
            <button onClick={submit}>Submit</button>
        </>
    )
}

export default Apipost;
