import React from "react";

function Footer(props){
    return(
        <div className="footer">
            <p>Hello Guys</p>
            <h2>{props.userName}</h2>
        </div>
    )
}
export default Footer;