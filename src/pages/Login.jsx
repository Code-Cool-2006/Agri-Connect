import { useState } from "react";
import "./Auth.css"; // Importing the new Auth.css
import { supabase } from "../Services/supabaseClient";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Normal login with email & password
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/home");
    }
  };

  // Google login
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/home", // or your production URL
      },
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      console.log("Signed in with Google:", data);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Login</h2>
          <p>Welcome back! Please login to your account.</p>
        </div>
        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            className="auth-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        {error && <p className="auth-error">{error}</p>}

        <div className="auth-divider">
          <span>Or</span>
        </div>
        <button onClick={signInWithGoogle} className="auth-btn google-btn">
          Sign in with Google
        </button>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
