import NavBar from '../NavBar'
import Profile from '../Profile'
import AboutMe from '../AboutMe'
import Specialization from '../Specialization'
import Treatment from '../Treatment'
import WorkExperience from '../WorkExperience'
import Review from '../Review'
import Appointment from '../Appointment'

import './index.css'

const AmruthamApp = () => (
  <>
    <NavBar />
    <Profile />
    <div className="main-container">
      <div className="main-left-container">
        <AboutMe />
        <Specialization />
        <Treatment />
        <WorkExperience />
        <Review />
      </div>
      <div className="main-right-container">
        <Appointment />
      </div>
    </div>
  </>
)

export default AmruthamApp
