import React from "react";
import { Component } from "react";

const Updatecounter=Orignalcomponent=>{
    class Newcomponent  extends Component {

        render() { 
            return (
                <>
                    <Orignalcomponent/>
                </>
            );
        }
    }
    return Newcomponent
     
}
export default Updatecounter ;
