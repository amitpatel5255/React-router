import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Classrutesmenu from "./Classrutesmenu";
import Classrutesintro from "./Classrutesintro";
import Classrutesprops  from "./Classrutesprops";
import Classrutescard from "./Classrutescard"
import Classrutesstate from "./Classrutesstate";
import Conditionalrendaring from "./Conditionalrendaring";
import Uncontrolrutes from "./Uncontrolrutes";
import Controlrutes from "./Controlrutes";
import Listandkeys from "./Listandkeys";
import Compositioninheritance from "./Compositioninheritance";
import Maincounter from "./Hoc/Maincounter";
// import Clickcounter from "./Hoc/Clickcounter";
class Classrutes extends Component{
    render(){
        return(
            <Routes>

                <Route path="/" element={<Classrutesmenu/>}>
                    <Route path="Classrutesintro" element={<Classrutesintro/>}/>
                    <Route path="Classrutesprops" element={<Classrutesprops/>}/>
                    <Route path="Classrutescard" element={<Classrutescard/>}/>
                    <Route path="Classrutesstate" element={<Classrutesstate/>}/>
                    <Route path="Conditionalrendaring" element={<Conditionalrendaring/>}/>
                    <Route path="Uncontrolrutes" element={<Uncontrolrutes/>}/>
                    <Route path="Controlrutes" element={<Controlrutes/>}/>
                    <Route path="Listandkeys" element={<Listandkeys/>}/>
                    <Route path="Compositioninheritance" element={<Compositioninheritance/>}/>
                    <Route path="Maincounter" element={<Maincounter/>}/>
                    {/* <Route path="Clickcounter" element={<Clickcounter/>}/> */}
                </Route>
            </Routes>
        )
    }
}
export default Classrutes