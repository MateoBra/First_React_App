import './App.css';
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Main from "./Main"
import Secondary20System from "./Transmission System/SecondarySystem"
import "./Main.css"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="NavBarGrid">
        <NavBar />
      </div>
      <div className='SideBarGrid'>
        <SideBar />
      </div>
      <div className='MainGrid'>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Secondary%20System" element={<Secondary20System />}></Route>

        </Routes>

      </div>


    </div>
  );
}

export default App;
