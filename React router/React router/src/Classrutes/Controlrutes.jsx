import React from "react";
import { Component } from "react";



// class Controlrutes extends Component {
//     constructor(){
//         super()
//         this.state={
//             name:""
//         }
//     }
//     submit=(event)=>{
//         event.preventDefault()
//         console.log("submit")
//         console.log(this.state.name);

//     }
//     render() { 
//         return (
//             <>
//             <form onSubmit={this.submit}>
//             <input type="text" value={this.state.name}
//      onChange={(event)=>this.setState({name:event.target.value})}></input>
//             <input type="submit" value="submit"></input>
//             </form>
//         </>
//         );
//     }
// }
 
// export default Controlrutes;
class Controlrutes extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:""
        }
    }
    submit=(event)=>{
                event.preventDefault()
                console.log("submit")
                console.log(this.state.name);
    }

    render() { 
        return ( <>
        <div>
           <form onSubmit={this.submit}>
            <input type="text" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} />
            <input type="submit"/>
           </form>

        </div>
        
        </> );
    }
}
 
export default Controlrutes;