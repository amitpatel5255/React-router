import React from "react";
import { Component } from "react";

class Classrutesstate extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        console.log("increment");
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        console.log("decrement");
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <>
                <h1>Classrutesstate</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

            </>
        )
    }
}
export default Classrutesstate