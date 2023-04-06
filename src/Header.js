import React from "react";

function Header(props){
    console.log('props: ', props);
    return(
        <div className="header">
            <h2>{props.userName}</h2>
        </div>
    )
}
export default Header;