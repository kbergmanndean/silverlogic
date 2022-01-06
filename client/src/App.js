import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Wall from "./Components/Wall.js"
import LoginAuth from "./Components/LoginAuth.js"
import {useEffect, useState} from "react"

function App() {
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    async function fetchMessages() {
      const res = await fetch("http://localhost:3000/posts")
      const messageData = await res.json()
      setMessages(messageData)
    }
    fetchMessages();
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Wall messages={messages} setMessages={setMessages}/>}/>
          <Route exact path="/log-in-auth" element={<LoginAuth/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
