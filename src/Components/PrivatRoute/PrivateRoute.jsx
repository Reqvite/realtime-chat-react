import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "Service/firebaseAuth";

export const PrivateRoute = ({ component: Component, redirecTo = "/" }) => {
  const [user, loading] = useAuthState(auth);

  const shouldRedirect = !user && !loading;
  console.log(shouldRedirect);

  return shouldRedirect ? <Navigate to={redirecTo} /> : Component;
};
