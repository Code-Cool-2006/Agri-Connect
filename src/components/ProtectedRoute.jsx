import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../Services/auth";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser().then((u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" />;
}
