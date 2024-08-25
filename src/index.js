// Login and SignUp

// import React,{useState} from 'react';
// import ReactDOM from "react-dom/client";
// import './index.css';

// let root=ReactDOM.createRoot(document.querySelector("div.main"));

// function App() {
//   const [isSignup, setIsSignup] = useState(false);

//   const toggleForm = () => {
//     setIsSignup(!isSignup);
//   };

//   return (
//     <div className="wrapper">
//       <div className="title-text">
//         <div className={`title ${isSignup ? "signup" : "login"}`}>
//           {isSignup ? "Sign with us" : "Welcome"}
//         </div>
//       </div>
//       <div className="form-container">
//         <div className="slide-controls">
//           <input
//             type="radio"
//             name="slide"
//             id="login"
//             checked={!isSignup}
//             onChange={toggleForm}
//           />
//           <input
//             type="radio"
//             name="slide"
//             id="signup"
//             checked={isSignup}
//             onChange={toggleForm}
//           />
//           <label htmlFor="login" className="slide login">
//             Login
//           </label>
//           <label htmlFor="signup" className="slide signup">
//             Signup
//           </label>
//           <div className={`slider-tab ${isSignup ? "signup" : "login"}`}></div>
//         </div>
//         <div className="form-inner">
//           {!isSignup ? <LoginForm /> : <SignupForm />}
//         </div>
//       </div>
//     </div>
//   );
// }

// const LoginForm = () => {
//   return (
//     <form className="login">
//       <div className="field">
//         <input type="text" placeholder="Email Address" required />
//       </div>
//       <div className="field">
//         <input type="password" placeholder="Password" required />
//       </div>
//       <div className="pass-link">
//         <a href="#">Forgot password?</a>
//       </div>
//       <div className="field btn">
//         <div className="btn-layer"></div>
//         <input type="submit" value="Login" />
//       </div>
//     </form>
//   );
// };

// const SignupForm = () => {
//   return (
//     <form className="signup">
//       <div className="field">
//         <input type="text" placeholder="Email Address" required />
//       </div>
//       <div className="field">
//         <input type="password" placeholder="Password" required />
//       </div>
//       <div className="field">
//         <input type="password" placeholder="Confirm password" required />
//       </div>
//       <div className="field btn">
//         <div className="btn-layer"></div>
//         <input type="submit" value="Signup" />
//       </div>
//     </form>
//   );
// };

// root.render(
//   <>
//     <App/>  
//   </>
// )

// Admin

import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

let root=ReactDOM.createRoot(document.querySelector("div.main"));

const AdminLogin = () => {
  return (
    <div className="admin-wrapper">
      <div className="admin-title">Admin Login</div>
      <div className="admin-form-container">
        <form className="admin-login-form">
          <div className="admin-field">
            <FontAwesomeIcon icon={faUser} className="admin-icon" />
            <input type="text" placeholder="Admin Username" required />
          </div>
          <div className="admin-field">
            <FontAwesomeIcon icon={faUser} className="admin-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="admin-btn">
            <div className="admin-btn-layer"></div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

root.render(
  <>
    <AdminLogin/>  
  </>
)