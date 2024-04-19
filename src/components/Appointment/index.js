import './index.css'

const Appointment = () => (
  <>
    <div>
      <div>
        <h3>Appointment</h3>
        <p>Rs. 699.00</p>
      </div>
      <div>
        <h3>Select your mode of session</h3>
        <hr />
      </div>
      <div>
        <div className="">
          <p>In-Clinic</p>
          <p>45 Mins</p>
        </div>
        <div className="">
          <p>Video</p>
          <p>45 Mins</p>
        </div>
        <div className="">
          <p>Chat</p>
          <p>10 Mins</p>
        </div>
      </div>
      <div>
        <h3>Pick a time slot</h3>
        <hr />
      </div>
      <div className="">
        <div className="">
          <p>Mon, 10 Oct</p>
          <p>10 slots</p>
        </div>
        <div className="">
          <p>Tue, 11 Oct</p>
          <p>02 slots</p>
        </div>
        <div className="">
          <p>Wed, 12 Oct</p>
          <p>05 slots</p>
        </div>
      </div>
      <div>
        <h4>Morning</h4>
        <div>
          <div>
            <p className="time">09:00 AM</p>
          </div>
          <div>
            <p className="time">09:30 AM</p>
          </div>
          <div>
            <p className="time">10:00 AM</p>
          </div>
          <div>
            <p className="time">10:15 AM</p>
          </div>
          <div>
            <p className="time">10:45 AM</p>
          </div>
          <div>
            <p className="time">11:00 AM</p>
          </div>
        </div>
        <h4>Evening</h4>
        <div>
          <div>
            <p className="time">04:00 PM</p>
          </div>
          <div>
            <p className="time">04:15 PM</p>
          </div>
          <div>
            <p className="time">04:30 PM</p>
          </div>
          <div>
            <p className="time">04:45 PM</p>
          </div>
          <div>
            <p className="time">05:15 PM</p>
          </div>
          <div>
            <p className="time">11:00 AM</p>
          </div>
        </div>
      </div>
      <button type="button" className="button">
        Make An Appointment
      </button>
    </div>
  </>
)

export default Appointment
