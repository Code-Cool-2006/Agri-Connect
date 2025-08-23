import { useState } from "react";
import { supabase } from "../Services/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { motion } from "framer-motion"; // For animations

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
      const userName = prompt("Please enter your name:");
      const userPurpose = prompt(
        "What is your purpose for using this platform?"
      );

      navigate("/home", {
        state: {
          userName: userName || "User",
          userPurpose: userPurpose || "Not specified",
        },
      });
    }
  };

  // Google login
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/home",
      },
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-600 to-green-400">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-12 md:w-1/2 text-white">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-snug mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome Back 👋 <br />
          Empowering Farmers, <br />
          Connecting Markets
        </motion.h1>

        <p className="text-lg mb-6 opacity-90">
          Login to continue your journey with{" "}
          <span className="font-bold">FarmMarket Pro</span>. Discover tools,
          resources, and opportunities made for you.
        </p>
      </div>

      {/* Right Card */}
      <div className="flex justify-center items-center md:w-1/2 p-8">
        <motion.div
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition"
            >
              Login
            </button>
          </form>

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          <div className="my-6 flex items-center">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-400 text-sm">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button
            onClick={signInWithGoogle}
            className="w-full py-3 flex items-center justify-center gap-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" /> Sign in with Google
          </button>

          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
