import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({
  children,
}: any) => {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "user") {
    return <Navigate to="/" />;
  }

  return children;
};

export default UserProtectedRoute;