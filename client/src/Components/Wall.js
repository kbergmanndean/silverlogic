import {useState} from "react"

function Wall() {
    const [messages, setMessages] = useState([])
    const [messageText, setMessageText] = useState("")

    const user_id = localStorage.getItem("user_id")

    async function postMessage(e) {
        e.preventDefault();
        const post = {
            user_id: user_id,
            text: messageText
        }
        const res = await fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({post})
        })
        const messageData = await res.json();
        setMessages([messageData,...messages])
        console.log(messages)
        setMessageText("")
    }

    return(
        <div>
            <h1>Home</h1>
            <a href="/log-in-auth">Sign Up/Log In</a>
            {user_id?
            <form onSubmit = {postMessage}>
                <input 
                    type="text"
                    placeholder="message"
                    value={messageText}
                    onChange={(e)=>setMessageText(e.target.value)}>
                </input>
            </form>
            :null}
            {messages?
            <ul>
            {messages.map(message=>{return <li key={message.id}><p>{message.text}</p><p>{message.username}</p></li>})}
            </ul>
            :null}
        </div>
        )
}

export default Wall