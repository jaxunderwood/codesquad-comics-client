import PropTypes from 'prop-types'


function Header(prop) {
  return (
    <div>
    <header>
        <figure><a href="#"><img src="public/images/CodeSquad-Comics-logo.jpg" /></a></figure>
    <ul>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">About</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Login</a></li>
    </ul>
    </header>
    </div>
  )
}

export default Header
