function Signup() {
    return (
        <div>
        <main>
            <div class="container">
            <h1>LOGIN</h1>
                <form>
                        <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" /><br />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text"
                     id="lastName"
                     name="lastName"
                    placeholder="Last Name" /><br />
                    <input type="submit" value="Submit" />


                    <label htmlFor="lastName">User Name:</label>
                    <input type="text" id="lastName" name="lastName" placeholder="User Name" /><br />

                    <label htmlFor="password">Password:</label>
                    <input type="password"
                     id="password"
                     name="password"
                    placeholder="Password" /><br />
                    <input type="submit" value="Submit" />

                </form>
            </div>
            </main>
        </div>
    );
}

export default Signup;
