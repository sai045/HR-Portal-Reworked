import React from "react";
import "./Signup.css"

const Signup = () => {
  return (
    <>
      <div className="signup">
        <div className="signupForm">
          <div>
            <h2>Plexus Signup</h2>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Street" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="number" placeholder="Zip Code" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Confirm Password" />
              <button>Signup</button>
            </form>
            <a href="/">Login here</a>
          </div>
        </div>
        <div className="photo">
          <img
            src="https://res.cloudinary.com/dxcnrukd1/image/upload/f_auto,q_auto/jarckq3r1dkrbsgcdmqg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
