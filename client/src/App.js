import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Wall from "./Components/Wall.js"
import LoginAuth from "./Components/LoginAuth.js"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Wall/>}/>
          <Route exact path="/log-in-auth" element={<LoginAuth/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
