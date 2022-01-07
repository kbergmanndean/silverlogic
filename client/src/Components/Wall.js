import {useState} from "react"

function Wall({messages, setMessages}) {
    const [messageText, setMessageText] = useState("")
    const [userId, setUserId] = useState(localStorage.getItem("user_id"))

    async function postMessage(e) {
        e.preventDefault();
        const post = {
            user_id: userId,
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

    async function handleLogOut() {
        const res = await fetch("http://localhost:3000/logout",{
            method:"DELETE"
        })
        if (res.ok) {
            localStorage.clear()
            setUserId("")
        }
    }
        
    async function handleDelete() {
        const res = await fetch(`http://localhost:3000/users/${userId}`,{
            method:"DELETE"
        })
        if (res.ok) {
            localStorage.clear()
            setUserId("")
        }
    }
        
    async function handleDeletePost(id) {
        const res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE"
        })
        if (res.ok) {
            setMessages(messages.filter(m=>m.id!=id))
        }
    }
        
    

    return(
        <div>
            <h1>Home</h1>
            {userId ?
            <div>
                <button onClick={handleDelete}>Delete Account</button>
                <button onClick={handleLogOut}>Log Out</button>
                <form onSubmit = {postMessage}>
                    <input 
                        type="text"
                        placeholder="message"
                        value={messageText}
                        onChange={(e)=>setMessageText(e.target.value)}>
                    </input>
                </form>
            </div>
            : 
            <a href="/log-in-auth">Sign Up/Log In</a>}
            {messages?
            <ul>
            {messages.map(message=>{return <li key={message.id}><p>{message.text}</p><p>({message.user.user_name})</p></li>})}
            </ul>
            :null}
        </div>
    )
}

export default Wall