import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const GoogleAuth = () => {
 const clientId = "666039992045-emngg4pb6fdeh7h2fcqb8f6p715qorhe.apps.googleusercontent.com";
  return (
   <GoogleOAuthProvider clientId={clientId}>
     <GoogleLogin
       onSuccess={credentialResponse => {
         console.log(credentialResponse);
       }}
       onError={() => {
         console.log('Login Failed');
       }}
     />
   </GoogleOAuthProvider>
   );
 };
export default GoogleAuth;