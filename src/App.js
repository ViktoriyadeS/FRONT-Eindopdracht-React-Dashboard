import * as React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Profile from "./components/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const home = <FontAwesomeIcon icon={faHouse} className="icon" />;
const students = <FontAwesomeIcon icon={faUserGroup} className="icon" />;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="link" to="/">
              <div id="logo" className="App-top">
                _\ . board
              </div>
            </Link>
            <nav>
              <NavLink className="link" to="/">
                {home} <p> Home</p>
              </NavLink>
              <NavLink className="link" to="/students">
                {students} <p>Students</p>
              </NavLink>
            </nav>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/students" element={<Students />} />
              <Route exact path="/students/Aranka" element={<Profile />} />
              <Route exact path="/students/Evelyn" element={<Profile />} />
              <Route exact path="/students/Floris" element={<Profile />} />
              <Route exact path="/students/Hector" element={<Profile />} />
              <Route exact path="/students/Martina" element={<Profile />} />
              <Route exact path="/students/Maurits" element={<Profile />} />
              <Route exact path="/students/Rahima" element={<Profile />} />
              <Route exact path="/students/Sandra" element={<Profile />} />
              <Route exact path="/students/Storm" element={<Profile />} />
              <Route exact path="/students/Wietske" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
