// import React, { Component } from "react";
// import { Link,Outlet } from "react-router-dom";

// class Funcationrutesmenu extends Component{
//     render(){
//         return(
//             <ul>
//                 <li><Link to="Funcationrutesintro">funcationrutesintro</Link></li>
//             <Outlet></Outlet>
//             </ul>
//         )
//     }
// }
// export default Funcationrutesmenu

import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Funcationrutesmenu = () => {
    return (
        <>

            <div className='row '>
                <div className='col-6 offset-6'>
                    <ul>
                        <li><Link to="Funcationrutesintro" >Funcationrutesintro</Link></li>
                        <li><Link to="Funcationrutesprops" >Funcationrutesprops</Link></li>
                        <li><Link to="Usestate" >Usestate</Link></li>
                        <li><Link to="User" >User</Link></li>
                        <li><Link to="Useeffect" >Useeffect</Link></li>
                        <li><Link to="Uselayouteffact" >Uselayouteffact</Link></li>
                        <li><Link to="Usememo" >Usememo</Link></li>
                        <li><Link to="Usecallback" >Usecallback</Link></li>
                        <li><Link to="Api" >Api</Link></li>
                        <li><Link to="Usecontext" >Usecontext</Link></li>
                        <li><Link to="Usecontexthook" >Usecontexthook</Link></li>
                        <li><Link to="Usereducer" >Usereducer</Link></li>
                        <li><Link to="Usenavigate" >Usenavigate</Link></li>
                        <li><Link to="Apipost" >Apipost</Link></li>
                        <li><Link to="Crud" >Crud</Link></li>
                        <li><Link to="Crud2" >Crud-2</Link></li>
                        <li><Link to="Crud3" >Crud-3</Link></li>
                    </ul>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}

export default Funcationrutesmenu;