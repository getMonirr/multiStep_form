import Login from "../components/pages/Login";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (user) {
    return children;
  }

  return <Login />;
};

export default PrivateRoute;
