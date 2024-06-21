import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classrutesmenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="Classrutesintro">Classrutesintro</Link></li>
                <li><Link to="Classrutesprops">Classrutesprops</Link></li>
                <li><Link to="Classrutescard">Classrutescard</Link></li>
                <li><Link to="Classrutesstate">Classrutesstate</Link></li>
                <li><Link to="Conditionalrendaring">Conditionalrendaring</Link></li>
                <li><Link to="Uncontrolrutes">Uncontrolrutes</Link></li>
                <li><Link to="Controlrutes">Controlrutes</Link></li>
                <li><Link to="Listandkeys">Listandkeys</Link></li>
                <li><Link to="Compositioninheritance">Compositioninheritance</Link></li>
                <li><Link to="Maincounter">Maincounter</Link></li>
                <Outlet></Outlet>
            </ul>
        )
    }
}
export default Classrutesmenu