import { Link, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types'



function Header({ user, setUser }) {
  const navigate = useNavigate();
  const { bookId } = useParams();


  const handleLogout = (e) => {
    e.preventDefault()

    fetch("https://course-project-codesquad-comics-server.onrender.com/logout", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => console.log("Fetch error:", error));
  };

  return (
    <div>
      <header>
        <figure><Link to="/"><img src="public/images/CodeSquad-Comics-logo.jpg" alt="4 illustrated books next to the words CodeSquad Comics" /></Link></figure>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {user.username ? (
            <>
              <li><Link to="/admin">Admin</Link></li>
              <li><a href="#" onClick={handleLogout}>LOGOUT</a></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </header>
    </div>
  )
}

export default Header
