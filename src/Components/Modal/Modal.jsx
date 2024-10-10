import LoginModal from "./LoginModal";
import RegestrationModal from "./RegestrationModal";
import "./style.css";

function Modal() {
  return (
    <div>
      <div className="container">
        <LoginModal />
        <RegestrationModal />
      </div>
    </div>
  );
}

export default Modal;
