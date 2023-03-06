import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Application from "./components/application/application";
import LoginPage from "./components/login/loginpage";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? <Application /> : <LoginPage />}
    </div>
  );
};

export default App;
