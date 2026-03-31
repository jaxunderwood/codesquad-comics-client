function Login() {
    return (
        <div>
            <main>
            <div class="container">
            <h1>LOGIN</h1>
                <form>
                    <label htmlFor="emailaddy">Email address:</label>
                    <input type="email" id="emailaddy" name="emailaddy" placeholder="Email" /><br />
                    <label htmlFor="emailpassword">Email address:</label>
                    <input type="password"
                     id="emailpassword"
                     name="emailpassword"
                    placeholder="Password" /><br />
                    <input type="submit" value="Submit" />

                </form>
            </div>
            </main>
        </div>
    );
}

export default Login;
