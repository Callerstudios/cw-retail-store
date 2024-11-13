import React from "react";
import CompanyLogo from "../../components/CompanyLogo";
import "./SignIn.css"

function SignIn() {
  return (
    <div className="sign-in">
      <header>
        <CompanyLogo/>
      </header>
      <main className="sign-in-section">
        <section>
          <p>Sign in to your account</p>
        </section>
        <section>
          <div className="form-frame">
            <div className="text-input">
              <label htmlFor="email" >Email Address</label>
              <input type="email" id="email" placeholder="Enter email address"/>
            </div>
            <div className="text-input">
              <label htmlFor="password" >Password</label>
              <input type="password" id="password" placeholder="Enter password"/>
            </div>
          </div>
          <div className="remember-me">
            <input type="checkbox"/>
            <p>Remember Me</p>
          </div>
          <div className="sign-in-button">
            <button>Sign In</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
