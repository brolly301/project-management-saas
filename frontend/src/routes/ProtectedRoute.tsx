import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function ProtectedRoute() {
  const { data: user, isPending, isError } = useCurrentUser();

  if (isPending) {
    return <div>Checking session...</div>;
  }

  if (isError || !user) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
}
