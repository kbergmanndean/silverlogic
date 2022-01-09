import Login from "./Login.js"
import SignUp from "./SignUp.js"
import {useState} from "react"

function LoginAuth() {
    const [showLogin, setShowLogin] = useState(true)

    //shows login or signup page depending on state
    return(
       <div>
           <a href="/">Home</a>
           {showLogin ? 
                <div>
                    <Login/>
                    <br/>
                    <p>Don't have an account? &nbsp;
                        <button onClick={() => setShowLogin(false)}>Sign Up</button>
                    </p>
               </div>
           :
                <div>
                    <SignUp/>
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