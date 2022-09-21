import React from "react";
import "./SideBar.css";
import './App.css';
import "./icon.js"
import "./SideBarChild"
import { icon } from "./icon.js";
import SideBarChild from "./SideBarChild";


function SideBar() {

  const [objectNames, setObjectName] = React.useState([{ name: "test", state: false }]);
  const [value, setValue] = React.useState("")

  ///Combines charackters in input box
  function handleChange(event) {
    const newValue = event.target.value
    setValue(newValue)
  }

  ///Adds the value from input box to objectNames and checks if there is another with same name 
  function handleClick() {
    if (!objectNames.map(objectName => objectName.name).includes(value) && value !== "") {
      setObjectName((prevValue) => ([...prevValue, { name: value, state: false }]))
    }
    else {
      alert("Input can't have same name or be empty!!!")
    }

  }
  ///Clicking on a list row this function changes its state to opposite
  function handleState(index) {
    let newState = [...objectNames]
    newState[index] = { name: objectNames[index].name, state: !objectNames[index].state }
    setObjectName(newState)
  }

  return (
    <div className="SideBarContainer">
      <ul className="SideBarList">

        <li className="TopRow">Top row</li>

        {objectNames.map((objectName, index) => (
          <div key={index}>
            <li className="SideBarListElement" onClick={() => handleState(index)} >
              {objectName.name}
              {objectName.state ? icon.iconTriangleRight : icon.iconTriangleDown}

            </li>
            <SideBarChild
           
              objectName={objectName} />

          </div>
        ))}

        <li>test value</li>
      </ul>

      <div>valuee: {value}</div>
      <input type="text" onChange={handleChange} value={value} />
      <button type="submit" onClick={handleClick}> test </button>

    </div>
  )
}

export default SideBar;
