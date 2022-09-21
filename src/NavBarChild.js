import React from "react"
import "./NavBarChild.css"
import NavBarChildData from "./NavBarChildData"
import { Link } from "react-router-dom"

function NavBarChild(props) {
    return (

        <>{props.id !== "null" ?
            <div
                className="DropDownContainer active"
                style={props.id === "User" ? { right: 0 } : {}}>

                <div className="DropDownOpen" >
                    <ul className="DropDownListChild">
                        {NavBarChildData[props.id].map(x =>
                            <li key={Math.random()}>
                                <Link id={x} to={"/" + x} className="Link" style={x.type === "hr" ? { padding: 0 } : null}>
                                    {x}
                                </Link>
                            </li>)}
                    </ul>

                </div>
            </div> : <div className="DropDownContainer">
                <div className="DropDownOpen">
                    <ul className="DropDownListChild">
                    </ul>

                </div>
            </div>}
        </>
    )
}

export default NavBarChild;
