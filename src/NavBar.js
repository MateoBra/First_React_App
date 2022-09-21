import React from "react"
import "./NavBar.css"
import "./NavBarChild"
import "./NavBarChild.css"
import { useNavigate } from "react-router-dom"

import NavBarChild from "./NavBarChild"

function NavBar() {

    const [navBarItems, setNavBarItems] = React.useState({
        activeObject: null,
        objects: [
            { id: "Home", name: "Home" },
            { id: "Tools", name: "Tools" },
            { id: "Transmission_System", name: "Transmission System" },
            { id: "Power_Production", name: "Power Production" },
            { id: "Meteorology", name: "Meteorology" },
            { id: "User", name: "User" }
        ]
    })
    const navigate= useNavigate()

    function handleItemClicked(name) {
        if (name === navBarItems.activeObject) {
            setNavBarItems({ ...navBarItems, activeObject: null })
        } else{
            setNavBarItems({ ...navBarItems, activeObject: name })
        }
        if(name === "Home"){
            navigate("/")
        }if(name === "Meteorology"){
            navigate("/Meteorology")
        }
    }

    function setClassToList(index) {
        if (navBarItems.activeObject === navBarItems.objects[index].id) {
            return "active"
        } else return ""
    }


    React.useEffect(() => {
        function handleClickOutside(e) {
            if (e.target.className !== "active") {
                setNavBarItems({ ...navBarItems, activeObject: null })
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    })



    return (
        <div className="NavBarContainer">
            <ul>
                {navBarItems.objects.map((navBarItem, index) => (
                    <li
                        key={index}
                        id={navBarItem.id}
                        className={setClassToList(index)}
                        onClick={(e) => handleItemClicked(e.target.id)}>
                        {navBarItem.name}

                        {navBarItems.activeObject === navBarItem.id ? <NavBarChild
                            id={navBarItems.activeObject} />
                            : <NavBarChild
                            id={"null"}/>}

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default NavBar;
