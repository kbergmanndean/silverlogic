import Wall from "./Wall"

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <a href="/log-in-auth">Sign Up/Log In</a>
            <Wall/>
        </div>
    )
}
export default Home