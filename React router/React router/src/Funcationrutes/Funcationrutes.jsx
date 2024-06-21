import React, { Component } from "react";
// import React from "react";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Funcationrutesmenu from "./Funcationrutesmenu";
import Funcationrutesintro from "./Funcationrutesintro";
import Funcationrutesprops from "./Funcationrutesprops";
import Usestate from "./Usestate";
import User from "./User";
import Useeffect from "./Useeffect";
import Uselayouteffact from "./Uselayouteffact";
import Usememo from "./Usememo";
import Usecallback from "./Usecallback";
import Api from "./Api";
import Usecontext from "./Usecontext";
import Usecontexthook from "./Usecontexthook";
import Usereducer from "./Usereducer";
import Usenavigate from "./Usenavigate";
import Apipost from "./Apipost";
import Crud from "./Crud";
import Crud2 from "./Crud2";
import Crud3 from "./Crud3";
class Funcationrutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Funcationrutesmenu />}>
                    <Route path="Funcationrutesintro" element={<Funcationrutesintro />} />
                    <Route path="Funcationrutesprops" element={<Funcationrutesprops />} />
                    <Route path="Usestate" element={<Usestate />} />
                    <Route path="User" element={<User />} />
                    <Route path="Useeffect" element={<Useeffect />} />
                    <Route path="Uselayouteffact" element={<Uselayouteffact />} />
                    <Route path="Usememo" element={<Usememo />} />
                    <Route path="Usecallback" element={<Usecallback />} />
                    <Route path="Api" element={<Api />} />
                    <Route path="Usecontext" element={<Usecontext />} />
                    <Route path="Usecontexthook" element={<Usecontexthook />} />
                    <Route path="Usereducer" element={<Usereducer />} />
                    <Route path="Usenavigate" element={<Usenavigate />} />
                    <Route path="Apipost" element={<Apipost />} />
                    <Route path="Crud" element={<Crud />} />
                    <Route path="Crud2" element={<Crud2 />} />
                    <Route path="Crud3" element={<Crud3 />} />
                </Route>
            </Routes>
        )
    }
}
export default Funcationrutes
