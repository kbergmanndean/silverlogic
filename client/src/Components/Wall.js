import {useState} from "react"

function Wall({messages, setMessages}) {
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

    async function logOut() {
        const res = await fetch("http://localhost:3000/logout",{
            method:"DELETE"
        })
        if (res.ok) {
            localStorage.clear()
        }
    }

    return(
        <div>
            <h1>Home</h1>
            {user_id ?
            <button onClick={logOut}>Log Out</button>
            : 
            <a href="/log-in-auth">Sign Up/Log In</a>}
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
            {messages.map(message=>{return <li key={message.id}><p>{message.text}</p><p>({message.user.user_name})</p></li>})}
            </ul>
            :null}
        </div>
        )
}

export default Wall