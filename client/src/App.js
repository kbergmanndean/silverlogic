import {useState} from "react"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from "./Components/SignUp.js"
import Home from "./Components/Home.js"
import Wall from "./Components/Wall.js"
import LoginAuth from "./Components/LoginAuth.js"
import Login from "./Components/Login.js"

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/wall" element={<Wall/>}/>
          <Route exact path="/log-in-auth" element={<LoginAuth user={user} setUser={setUser}/>}/>
          <Route exact path="/sign-up" element={<SignUp user={user} setUser={setUser}/>}/>
          <Route exact path="/log-in" element={<Login user={user} setUser={setUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
