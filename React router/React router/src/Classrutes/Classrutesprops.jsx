import React, { useState } from "react";
// import Classrutesintro from "./Classrutesintro"
// class Classrutesprops extends Component{
//     render(){
//         const car=()=>
//         return(
//             <>
//                 <h1>my-page</h1>
//                 <input type="text" placeholder="Enter Your Name" onChange={(e)=>console.log(e.target.value)}></input>
//                 <p>My Name is{carname}</p>
//                 <Classrutesintro name="amit"/>
//             </>
//         )
//     }
// }
// export default Classrutesprops
const Car = () => {
    const [carname, setcarname] = useState('')
    return (
        <div>
            <h2>Hi i Am a Amit</h2>
            <input type="text" placeholder="Enter Your Name" onChange={(e) => setcarname(e.target.value)}></input>
            <p>Hello Everyone {carname}</p>
        </div>
    )
}
export default Car