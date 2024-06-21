import React from "react";
import { Button, Table } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Crudemploy from "./Crudemploy";
function Home(){
    return(
        <>
        <div style={{margin:"10rem"}}>
        <Table stiped bordered hover size="sm">
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
            </tr>
        </thead>
        <tbody>
            {
                Crudemploy && Crudemploy.length>0 ? Crudemploy.map((item)=>{
                    return(
                        <tr>
                            <td>
                                {item.Name}
                            </td>
                            <td>
                                {item.Age}
                            </td>
                        </tr>
                    )
                })
                :"no data avaible"
            }
        </tbody>
        </Table>
        </div>
        </>
    )
}
export default Home;