import './App.css';
import {Routes,Route} from "react-router-dom"
import SignUp from "./Components/SignUp.js"
import Home from "./Components/Home.js"
import Wall from "./Components/Wall.js"

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        <Route exact path="/wall" element={<Wall/>}/>
      </Routes>
    </div>
  );
}

export default App;
