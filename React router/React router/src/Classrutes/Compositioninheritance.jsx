import React from "react";
import { Component } from "react";
import Listandkeys from "./Listandkeys";
class Compositioninheritance extends Component {

    render() { 
        let data="amit"
        return (
            <>
                <h1>Compositioninheritance</h1>
                <Listandkeys name={data}>
                <h1>amitpatel</h1>
                </Listandkeys>
            </>
        );
    }
}
 
export default Compositioninheritance;