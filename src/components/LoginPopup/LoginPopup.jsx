import "./LoginPopup.css";
import { useState } from "react";

const LoginPopup = ({ setShowLogin }) => {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <span onClick={() => setShowLogin(false)}>✖</span>
        </div>

        <div className="login-popup-inputs">
          {isSignup && <input type="text" placeholder="Your name" />}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
        </div>

        <button>{isSignup ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {isSignup ? (
          <p className="login-popup-bottom">
            Already have an account?{" "}
            <span onClick={() => setIsSignup(false)}>Login here</span>
          </p>
        ) : (
          <p className="login-popup-bottom">
            Create a new account?{" "}
            <span onClick={() => setIsSignup(true)}>Click here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
