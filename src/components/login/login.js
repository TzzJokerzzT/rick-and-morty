import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";
export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="logout-style ">
      <h1 className="logout-text min-width-sm">
        Morty I don't need to say this but just click in Log In button to get pls
      </h1>
      <button
        className="position-absolute top-50 start-50 translate-middle btn btn-light btn-lg mt-5"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  );
};
