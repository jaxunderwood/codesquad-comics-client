import PropTypes from 'prop-types'

function Signup() {
 const handleSubmit = (e) => {
		e.preventDefault()
    console.log("Signup processed")
    console.log("First Name:", e.target.firstName.value);
    console.log("Last Name:", e.target.lastName.value);
    console.log("Last Name:", e.target.lastName.value);
    console.log("Password:", e.target.password.value);

 }

    return (
        <div>
        <main>
            <div className="container">
            <h1>SIGNUP</h1>
                <form onChange={handleSubmit}>
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
