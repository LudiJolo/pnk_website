import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";

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
          <h1>this is the admin page</h1>
          <h1>this is the admin page</h1>
          <h1>this is the admin page</h1>
          <h1>this is the admin page</h1>
          <h1>this is the admin page</h1>
          <button class="btn btn-primary" onClick={sign_Out}>Log Out</button>
        </>
      ) : (
        <>
          <h1>login first</h1>
          <h1>login first</h1>
          <h1>login first</h1>
          <h1>login first</h1>
          <h1>login first</h1>
        </>
      )}
    </div>
  );
};

export default Authenticate;
