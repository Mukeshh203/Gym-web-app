import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Auth0Provider
    domain="dev-kz85snwpype8efe7.us.auth0.com"
    clientId="R3RlttVwsypkePsj0Z0dbVh4S7atVdKA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    > 
          <App />
    
    </Auth0Provider>
   
    
    
  // </React.StrictMode>
);


// reportWebVitals();
