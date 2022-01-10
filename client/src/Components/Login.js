import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login() {
    //state for login form information
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const navigate=useNavigate();

    //logs in new user by posting user information to /login, creating session
    async function handleSubmit(e) {
        e.preventDefault()
        const user = {
            user_name:username,
            password:password
        }
        const res = await fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({user})
        })
        const userData = await res.json();
        if (userData.id) {
            //add user information to local storage
            localStorage.setItem("user_id", userData.id)
            localStorage.setItem("username", userData.user_name)
            navigate("/")
        }else{
            setErrors(userData.errors)
            console.log(errors)
        }

    }


    return (
        <div className="login-auth">
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    name="username"
                    onChange={(e)=>setUserName(e.target.value)}>
                </input>
                <br/>
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}>
                </input>
                <br/>
                <input className="btn" type="submit" value="Log In"></input>
            {errors? errors.map(error => <div key={error}>{error}</div>) : null}
            </form>
        </div>
    )
}

export default Login