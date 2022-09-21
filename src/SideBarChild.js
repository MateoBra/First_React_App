import React from "react"
import "./SideBar.css"

function SideBarChild(props){
    return <div>{props.objectName.state ? <li className="SideBarListChildElement"> Child </li> : null}</div>
}

export default SideBarChild;