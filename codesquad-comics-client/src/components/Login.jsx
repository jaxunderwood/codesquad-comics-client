import { useState } from 'react';
import { useNavigate } from "react-router-dom";




function Login() {
    const [user, setUser] = useState(localStorage.getItem("user") || {})
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        console.log("Signed In!")
        console.log("Email address:", e.target.emailaddy.value);
        console.log("User password:", e.target.userpassword.value);

        fetch("https://course-project-codesquad-comics-server.onrender.com/login/local", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("You have successfully logined:", result);
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/admin");
            })
            .catch((error) => console.log("Fetch error:", error));

    }
    return (
        <div>
            <main>
                <div className="container">
                    <h1>LOGIN</h1>
                    <form>
                        <label htmlFor="emailaddy">Email address:</label>
                        <input type="email" id="emailaddy" name="emailaddy" placeholder="Email" /><br />
                        <label htmlFor="userpassword">User password:</label>
                        <input type="password"
                            id="userpassword"
                            name="userpassword"
                            placeholder="Password" /><br />
                        <input type="submit" value="Submit" />

                    </form>
                </div>
            </main>
        </div>
    );
}

export default Login;
