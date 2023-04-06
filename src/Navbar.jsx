import React from "react";
import { useState } from "react";

const Navbar=()=>{
    let [name,setname]=useState("siri");

    let changedata=()=>{
        setname("payal")
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={changedata}>ChangedName</button>
        </div>
    )
}
export default Navbar