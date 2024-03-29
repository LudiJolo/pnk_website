import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        navigate("/pnk_auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="login-container d-flex justify-content-center align-items-center">
      <form class='card p-5 ' onSubmit={signIn}>
        <h1>Login</h1>
        <input
          type="email"
          class='my-2'
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          class='my-2'
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button class="btn btn-primary my-2" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
