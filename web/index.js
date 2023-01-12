import ReactDOM from "react-dom";
import App from "./app.jsx";
import { AuthContextProvider } from "./context/AuthContext.js";

const app = document.getElementById("app");
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  app
);
