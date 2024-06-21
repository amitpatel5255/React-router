import React from "react"
// import "./Navbar.css"
import { Component } from "react";

class Conditionalrendaring extends Component {
    constructor() {
        super()
        this.state = {
            mylogin: true
        }
    }
    render() {
        // return this.state.mylogin && <> <h1>Wel-come </h1></>
        return this.state.mylogin ? <> <button className="am">log-in</button></> : <><button className="an" >log-out</button></>
        // let msg
        // if (this.state.mylogin) {
        //     msg = <> <h1>Wel-come </h1></>
        // }
        // else {
        //     msg = <><h1>get-out</h1></>
        // }
        // return (
        //     msg
        // // )
        // if (this.state.mylogin) {
        //     return (
        //         <>

        //             <button className="am">log-in</button>
        //         </>
        //     )
        // }
        // else {
        //     return (
        //         <><button className="an" >log-out</button></>
        //     )
        // }
    }
}

export default Conditionalrendaring;