import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../App.css";

export const RegisterPageOne = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [complete, setComplete] = useState(false);

  if (complete == true) {
    return <Navigate to="/register/two" />;
  }
  console.log(complete);
  return (
    <div style={{ width: "50%", backgroundColor: "rgb(56, 250, 185)", margin:"auto" }}>
      <h3 style={{ textAlign: "center" }}>User Registration</h3>
      <div style={{ marginLeft: "10px" }}>
        <p>User Name</p>
        <input
          style={{ width: "90%" }}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter User Name"
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p>Email</p>
        <input
          style={{ width: "90%" }}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter Email"
        />
      </div>
      <br />
      <button
        style={{
          width: "100px",
          height: "30px",
          marginBottom: "10px",
          marginLeft: "70%",
          color: "black",
          fontSize: "medium",
          backgroundColor: "white",
        }}
        disabled={name === null && email === null}
        className="RPOBTN"
        onClick={() => setComplete(!complete)}
      >
        Next
      </button>
    </div>
  );
};
