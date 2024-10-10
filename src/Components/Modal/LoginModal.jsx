import { useState } from "react";

function LoginModal() {
  const [showLogin, setShowLogin] = useState(false);
  function handleShowModal() {
    setShowLogin(true);
  }
  return (
    <div className="login">
      <p>Login</p>
      <button onClick={() => handleShowModal()}>Open Modal</button>

      {showLogin && (
        <form>
          <div className="form">
            <p className="cancel" onClick={() => setShowLogin(false)}>
              ❌
            </p>
            <p>LOGIN TO MY ACCOUNT</p>
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

            <button className="login-btn">Login</button>
            <p>Forget your Password?</p>
            <p>Create a New Account</p>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginModal;
