import {FiPlus} from 'react-icons/fi'
import {CiFacebook, CiInstagram, CiYoutube, CiTwitter} from 'react-icons/ci'

import './index.css'

const AboutMe = () => (
  <>
    <div className="">
      <div>
        <h2>A Little About Me</h2>
        <button type="button">
          Follow <FiPlus />
        </button>
      </div>
      <div>
        <p>
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. Love to work with all my hospital staff and senior doctors.
          Completed my graduation in Gynaecologist Medicine from the
        </p>
        <hr />
        Read More
      </div>
      <div className="">
        <h3>Language Spoken</h3>
        <ul className="">
          <li className="">English</li>
          <li className="">Hindi</li>
          <li className="">Telugu</li>
        </ul>
      </div>
      <div>
        <CiFacebook />
        <CiInstagram />
        <CiYoutube />
        <CiTwitter />
      </div>
    </div>
  </>
)

export default AboutMe
