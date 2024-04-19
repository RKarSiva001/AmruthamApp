import {FaClinicMedical} from 'react-icons/fa'
import './index.css'

const WorkExperience = () => (
  <>
    <div>
      <h2>My Work Experience</h2>
      <p>I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</p>
      <hr />
      <div className="">
        <FaClinicMedical />
        <div>
          <p className="clinic">Midtown Medical Clinic</p>
          <p className="role">Senior doctor</p>
        </div>
        <p className="duration">2016-PRESENT</p>
      </div>
      <div className="">
        <FaClinicMedical />
        <div>
          <p className="clinic">Midtown Medical Clinic</p>
          <p className="role">Senior doctor</p>
        </div>
        <p className="duration">2010-2015</p>
      </div>
    </div>
  </>
)

export default WorkExperience
