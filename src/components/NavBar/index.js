import './index.css'

const NavBar = () => (
  <>
    <div className="navbar-container">
      <h1 className="main-heading">A M R U T A M</h1>
      <div className="profile-links-container">
        <div className="profile-link-item">
          <a href="https://github.com" className="link-unhighlight">
            Home
          </a>
        </div>
        <div className="profile-link-item">
          <a href="https://github.com" className="link-highlight">
            Find Doctors
          </a>
        </div>
        <div className="profile-link-item">
          <a href="https://github.com" className="link-unhighlight">
            About Us
          </a>
        </div>
      </div>
      <div>
        <button type="button" className="profile-button profile-login-button">
          Login
        </button>
        <button type="button" className="profile-button profile-sign-up-button">
          Sign-up
        </button>
      </div>
    </div>
  </>
)

export default NavBar
