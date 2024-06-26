import {FaStar} from 'react-icons/fa6'

import './index.css'

const Profile = () => (
  <>
    <div className="profile-bg-container">
      <div className="profile-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oen0QfknI4qf6qmgX~ar9NXcmnzj0PELT3IvqseAdUDwjvD1qj-UVTj5DuRj~MyVBNmLXIyG9Gr6nT~L1yJqL0i1RoF4JwzZd0WlL29KWZ5a9qoWPtXH6SozWWl3zvbEbUmDBBYDGJWT5iPaNe~2V6ywZXm-8KJLYPNs4iCiB0SCbQIjindq5VC-YTdI6ebQUGFbw2vgJzgoA089c0zw6f8JD4VP6TgXFvhYzsIZX4sEr--yK8NWifD9x7nEzJZ6j9eRst86yCm2sDEYEstr54YJyK4BM8Z0zOmbBjbZxhbawdooaScKN9PLcYNhqQppFFQGTck1JlCo5e7mR49JNg__"
          alt="profile-img"
          className="img"
        />
        <div className="profile-left-card">
          <h3>Dr. Bruce Willis</h3>
          <p>Gynecologist</p>
          <p>
            4.2
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
        <div className="profile-center-card">
          <div className="profile-cards">
            <p className="title">Followers</p>
            <p className="numbers">850</p>
          </div>
          <div className="profile-cards">
            <p className="title">Following</p>
            <p className="numbers">18K</p>
          </div>
          <div className="profile-cards">
            <p className="title">Posts</p>
            <p className="numbers">250</p>
          </div>
        </div>
        <div className="profile-right-card">
          <button type="button" className="appointment-button">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  </>
)

export default Profile
