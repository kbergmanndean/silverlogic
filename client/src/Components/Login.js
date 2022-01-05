import {useState} from "react"

function Login({user, setUser}) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

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
            setUser(userData);
            console.log(user)
        }else{
            setErrors(userData.errors)
            console.log(errors)
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    name="username"
                    onChange={(e)=>setUserName(e.target.value)}>
                </input>
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}>
                </input>
                <input type="submit" value="Log In"></input>
            </form>
            {errors? errors.map(error=><div key={error}>{error}</div>):null}
        </div>
    )
}

export default Login