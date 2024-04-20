import {FiPlus} from 'react-icons/fi'
import {CiFacebook, CiInstagram, CiYoutube, CiTwitter} from 'react-icons/ci'

import './index.css'

const AboutMe = () => (
  <>
    <div className="about-container">
      <div className="about-heading-container">
        <h2 className="about-heading">A Little About Me</h2>
        <button type="button" className="about-follow-button">
          Follow <FiPlus />
        </button>
      </div>
      <div className="about-card-container">
        <div className="about-me-description-container">
          <p className="about-me-description">
            Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. Love to work with all my hospital staff and senior doctors.
            Completed my graduation in Gynaecologist Medicine from the
          </p>

          <hr className="about-hr" />
          <span className="about-read-more">Read More</span>
        </div>
        <div className="about-me-language-container">
          <h3>Language Spoken</h3>
          <div className="lang-item">English</div>
          <div className="lang-item">Hindi</div>
          <div className="lang-item">Telugu</div>
        </div>
        <div className="about-me-social-media-container">
          <div className="about-me-social-media-handles">
            <CiFacebook />
          </div>
          <div className="about-me-social-media-handles">
            <CiInstagram />
          </div>
          <div className="about-me-social-media-handles">
            <CiYoutube />
          </div>
          <div className="about-me-social-media-handles">
            <CiTwitter />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default AboutMe
