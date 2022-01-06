import {useState} from "react"

function Wall({user}) {
    const [messages, setMessages] = useState([])
    const [messageText, setMessageText] = useState("")


    async function postMessage(e) {
        e.preventDefault();
        const post = {
            user_id: user.id,
            text: messageText
        }
        const res = await fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({post})
        })
        const messageData = await res.json();
        setMessages(...messages, messageData)
        setMessageText("")
    }

    return(
         user?
        <h1>Wall</h1>
        : null
        )
}

export default Wall