import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </button>
    </div>
  );
};
