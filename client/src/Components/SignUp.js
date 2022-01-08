import {useState} from "react"
import {useNavigate} from "react-router-dom"

function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])

    const navigate=useNavigate();

    //function to create a new user and log new user in, posts to /users
    async function handleSubmit(e) {
        e.preventDefault()
        const user = {
            user_name:username,
            password:password,
            email:email
        }
        const res = await fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({user})
        }); const userData = await res.json();
        if (userData.id) {
            localStorage.setItem("user_id", userData.id)
            localStorage.setItem("username", userData.user_name)
            navigate("/")
        } else {
            console.log(userData.error)
            setErrors(userData.error)
        }
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Sign Up</h1>
                <input
                type="text" 
                placeholder="username"
                value={username}
                name="username"
                onChange={(e)=>setUsername(e.target.value)}>
            </input>
            <input
                type="text"
                placeholder="email"
                value={email}
                name="email"
                onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <input
                type="text"
                placeholder="password"
                value={password}
                name="password"
                onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <input type="submit" value="Sign Up"></input>
            {errors.length > 0 ? errors.map(error => <div>{error}</div>) : null}
            </form>
        </div>
        
    )
}
export default SignUp