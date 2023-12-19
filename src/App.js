// import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Home from "./pages/Home";


export default function App() {
  
  // const {user, loginWithRedirect } = useAuth0();

  // console.log("Current User", user);

  
  // return (<div className="App">
  //           <header className="App-header">
  //            {isAuthenticated && <h3> Hello {user.name}</h3>}
  //            {isAuthenticated ? (
  //             <button onClick={(e)} => logout()}>Logout</button>
  //             ) : (
  //               <button onClick={(e)} => loginWithRedirect()}>
  //                 Login with redirect
  //               </button>  
              
  //            )}
  //           </header>
  //          </div>


  // ); 
  return <Home />; 
}
 