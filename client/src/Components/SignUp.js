import {useState} from "react"

function SignUp({user, setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        const user = {
            user_name:username,
            password:password
        }
        const res = await fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({user})
        }); const userData = await res.json();
        if (userData.id) {
            setUser(userData)
            console.log(userData)
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
                placeholder="password"
                value={password}
                name="password"
                onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <input type="submit" value="Sign Up"></input>
            {errors.length > 0 ? errors.map(error => <div>{error}</div>) : null}
            {user ? <p>Welcome, {user.user_name}</p> : null}
            </form>
        </div>
        
    )
}
export default SignUp