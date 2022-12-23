import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "Service/firebaseAuth";

interface PrivateRouteProps {
  component: JSX.Element;
  redirecTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirecTo = "/",
}) => {
  const [user, loading] = useAuthState(auth);

  const shouldRedirect: boolean = !user && !loading;

  return shouldRedirect ? <Navigate to={redirecTo} /> : Component;
};
