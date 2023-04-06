import React, { useState } from "react";
import { Component } from "react";


class Home extends Component{
constructor(){
    super();
   this.state={
        name:"siri",
        color:"red"

}
    }

changename=()=>{
    this.setState=({name:"payal"})

}
changecolor=()=>{
    this.setState({color:"blue"})
}

    render(){
        return(
            <div>
                <h1>class component</h1>
                <h1 style={{color:this.state.color}}>{this.state.name}</h1>

                <button onClick={this.changecolor}>ChangeColor</button>

                
            </div>
        )
    }
}
export default Home