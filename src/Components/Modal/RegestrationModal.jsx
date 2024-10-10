import { useState } from "react";

function RegestrationModal() {
  const [showLogin, setShowLogin] = useState(false);
  function handleShowModal() {
    setShowLogin(!showLogin);
  }
  return (
    <div className="login">
      <p>Register</p>
      <button onClick={() => handleShowModal()}>Open Modal</button>

      {showLogin && (
        <form>
          <div className="form">
            <p className="cancel" onClick={() => setShowLogin(false)}>
              ❌
            </p>
            <p>Register</p>
            <input type="email" className="email-input" placeholder="Email" />
            <input
              type="password"
              className="password-input"
              placeholder="Password"
            />
            <div className="checkbox-input">
              <input type="checkbox" className="checkbox" />
              <p>remember me on this computer</p>
            </div>

            <button className="login-btn">Register</button>
            <p>already have an account?</p>
          </div>
        </form>
      )}
    </div>
  );
}

export default RegestrationModal;
