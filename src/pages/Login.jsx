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
      // Prompt user for name and purpose
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
      <div className="fixed-cards">
        <div className="card" style={{ top: "50px" }}>
          To Change the language, go to the top right corner and click the 3
          Dots ⁝ you will find the Google Translate button Here. When you click
          it, a small popup will appear from here select your preferred
          language. The entire website will be translated into the selected
          language.
        </div>
        <div className="card" style={{ top: "200px" }}>
          भाषा बदलने के लिए, ऊपर दाएँ कोने में जाएं और 3 बिंदुओं पर क्लिक करें ⁝
          आपको यहाँ गूगल ट्रांसलेट बटन मिलेगा। जब आप इसे क्लिक करेंगे, तो एक
          छोटा पॉपअप दिखाई देगा, यहाँ से अपने पसंदीदा भाषा का चयन करें। पूरा
          वेबसाइट चयनित भाषा में अनुवादित होगा।
        </div>
        <div className="card" style={{ top: "350px" }}>
          ಭಾಷೆ ಬದಲಾಯಿಸಲು, ಮೇಲ್ಮಟ್ಟದ ಬಲ ಕೋಣೆಗೆ ಹೋಗಿ 3 ಬಿಂದುಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ⁝
          ನೀವು ಇಲ್ಲಿ Google Translate ಬಟನ್ ಅನ್ನು ಕಾಣುತ್ತೀರಿ. ಅದನ್ನು ಕ್ಲಿಕ್
          ಮಾಡಿದಾಗ, ಇಲ್ಲಿಂದ ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ഒരു ಚಿಕ್ಕ ಪೋಪ್
          ಅಪ್ ಇರಲಿದೆ. ಸಂಪೂರ್ಣ ವೆಬ್‌ಸೈಟ್ ಆಯ್ದ ಭಾಷೆಯಲ್ಲಿ ಅನುવાદಿಸಲಾಗುತ್ತದೆ.{" "}
        </div>
      </div>
    </div>
  );
}
