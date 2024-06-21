import React, { useState } from "react";
import "./Crud.css"
const Crud = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    // const [name3, setName3] = useState("")
    const [alldata, setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [edittext, setEdittext] = useState()
    const Adddata = () => {
        console.log("adddata");
        console.log(name);
        if (name.length !== 0) {
            setAlldata((newdata) => [...newdata, name, age])
            setName("")
            setAge("")
            // setName3("")
        }

    }
    const datadelete = (index) => {
        console.log("datadelete", index);
        alldata.splice(index, 1)
        setAlldata([...alldata])

    }
    console.log(alldata);
    const editdata = (index) => {
        console.log("editdata", index);
        setName(alldata[index])
        setShow(true)
        setEdittext(index)
    }
    const Update = () => {
        console.log("update", edittext);
        alldata.splice(edittext, 1, name)
        setAlldata([...alldata])
        setName('')
        setShow(false)
    }
    return (
        <>
            <div className="amit" >
                <input type="text" className="input_fill" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name"></input>
                <input type="text" className="input_fill" value={age} onChange={(e2) => setAge(e2.target.value)} placeholder="enter your age"></input>
            </div>
            {/* <div> <input type="text" className="input_fill" value={name3} onChange={(e3) => setName3(e3.target.value)} placeholder="enter your password"></input></div> */}
            <div className="amit"> {!show ? <button onClick={Adddata}>Adddata</button> : <button onClick={Update}>Updatedata</button>}</div>
            <table width={100} border={1}>
                <td className="amit2">name</td>
                <td className="age2">age</td>
            </table>

            {alldata.map((val, i) =>
                <div>
                    {/* <td className="age2">{val}</td> */}
                    {/* <span>{val}</span> */}
                    {/* <td className="amit2">{val}</td> */}
                    <td>{val} <button className="edit" onClick={() => editdata(i)} >Edit</button></td>
                    <td><button className="delete" onClick={() => datadelete(i)}>delete</button></td>


                </div>
            )}
        </>
    );
}

export default Crud;