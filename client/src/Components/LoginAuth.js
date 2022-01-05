import Login from "./Login.js"
import SignUp from "./SignUp.js"
import {useState} from "react"

function LoginAuth({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true)

    return(
       <div>
           {showLogin ? 
                <div>
                    <Login user={user} setUser={setUser}/>
                    <br/>
                    <p>Don't have an account? &nbsp;
                        <button onClick={() => setShowLogin(false)}>Sign Up</button>
                    </p>
               </div>
           :
                <div>
                    <SignUp setUser={setUser}/>
                    <br/>
                    <p>Already have an account? &nbsp;
                        <button onClick={() => setShowLogin(true)}>Log In</button>
                    </p>
                </div>    
            }
       </div>
    )
}

export default LoginAuth