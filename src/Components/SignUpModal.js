import React, { useState } from "react";
import "./signUpModal.css";
import SignupImage from "../Images/therapist.png";

function SignUpModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Sign Up</button>
      {modalOpen && (
        <div className="wrapper">
          <div style={{ display: "flex" }}>
            <div className="form" style={{ flex: 1 }}>
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={handleModalClose}>Submit</button>
              </form>
            </div>
            <div
              style={{
                flex: 1,
                paddingLeft: "20px",
              }}
            >
              <img src={SignupImage} alt="Signup" />
            </div>
          </div>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default SignUpModal;
