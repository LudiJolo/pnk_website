import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";
import { Link } from "react-router-dom";
import Admin from "../admin/admin";

const Authenticate = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const sign_Out = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <Admin signout={sign_Out}/>
        </>
      ) : (
        <>
          <h1>login first</h1>
          <h1>login first</h1>
          <h1>login first</h1>
          <h1>login first</h1>
          <h1>login first</h1>
          <Link to={"/pnk_login"} class="btn btn-primary">
            Log In
          </Link>
        </>
      )}
    </div>
  );
};

export default Authenticate;
