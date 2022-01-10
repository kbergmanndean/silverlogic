import {useState} from "react"

function Wall({messages, setMessages}) {
    const [messageText, setMessageText] = useState("")
    const [userId, setUserId] = useState(localStorage.getItem("user_id"))
    const [userName, setUserName] = useState(localStorage.getItem("username"))

    //function to post message to wall
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

    //function to log out 
    async function handleLogOut() {
        const res = await fetch("http://localhost:3000/logout",{
            method:"DELETE"
        })
        if (res.ok) {
            localStorage.clear()
            setUserId("")
            setUserName("")
        }
    }
    
    //function to delete account
    async function handleDelete() {
        const res = await fetch(`http://localhost:3000/users/${userId}`,{
            method:"DELETE"
        })
        if (res.ok) {
            localStorage.clear()
            setUserId("")
            setUserName("")
        }
    }
    
    //function to delete a post from wall
    async function deletePost(id) {
        const res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE"
        })
        if (res.ok) {
            setMessages(messages.filter(m=>m.id!=id))
        }
    }
        
    return(
        <div id="home">
            <h1>Home</h1>
            {userId ?
            <div id="user-box">
                <p>Welcome, {userName}!</p>
                <form onSubmit = {postMessage}>
                    <input 
                        id="message-input"
                        type="text"
                        placeholder="message"
                        value={messageText}
                        onChange={(e)=>setMessageText(e.target.value)}>
                    </input>
                    <br/>
                    <input type="submit" className="btn">
                    </input>
                </form>
                <button onClick={handleLogOut}>Log Out</button>
                <button onClick={handleDelete}>Delete Account</button>
            </div>
            : 
            <a href="/log-in-auth">Sign Up/Log In</a>}
            {messages.length>0?
            <div id="wall-container">
                <ul id="wall">
                    {messages.map(message=>{return <li className="post" key={message.id}><p>{message.text}</p><p className="poster">({message.user.user_name})</p>{message.user.id==userId?<button className="delete-post" onClick={()=>deletePost(message.id)}>Delete</button>:null}</li>})}
                </ul>
            </div>
            :<p>~No Posts Yet~</p>}
        </div>
    )
}

export default Wall