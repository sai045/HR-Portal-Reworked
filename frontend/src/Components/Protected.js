import React from "react";
import { Navigate } from "react-router-dom";
function Protected({ isSignedIn, isAllowed = true, children }) {
  // console.log(isAllowed)
  // console.log(!isSignedIn && isAllowed)
  if (!isSignedIn || !isAllowed) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default Protected;
