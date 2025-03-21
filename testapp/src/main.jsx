import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import App from "./App.jsx";
import "./index.css";

// const GoogleWRAPPER = () => {
//   return (
//     <GoogleOAuthProvider clientId="666039992045-emngg4pb6fdeh7h2fcqb8f6p715qorhe.apps.googleusercontent.com">
//       <GoogleLogin
//         onSuccess={(response) => {
//           console.log("Login Success:", response);
//         }}
//         onError={() => {
//           console.log("Login Failed");
//         }}
//       />
//     </GoogleOAuthProvider>
//   );
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <GoogleWRAPPER /> */}
    <App />
  </StrictMode>
);
