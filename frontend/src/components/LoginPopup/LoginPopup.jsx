import "./LoginPopup.css";
import { useContext, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setToken } = useContext(StoreContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please accept terms & Conditions");
      return;
    }
    try {
      const url = isSignup
        ? "http://localhost:4000/api/user/register"
        : "http://localhost:4000/api/user/login";

      const response = await axios.post(url, data);

      if (response.data.success) {
        alert("Success ✅");

        // save token
        // localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        // close popup
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error ❌");
    }
  };
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="login-popup">
      <form onSubmit={onSubmitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <span onClick={() => setShowLogin(false)}>✖</span>
        </div>

        <div className="login-popup-inputs">
          {isSignup && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your email"
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
          />
        </div>

        <button type="submit">{isSignup ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
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
      </form>
    </div>
  );
};

export default LoginPopup;
