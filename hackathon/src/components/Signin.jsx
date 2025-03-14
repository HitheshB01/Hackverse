import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign-in successful!");
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#f5eac4] to-[#f5eac4]">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="w-full max-w-md bg-[#eeeded] p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="ElderNest Logo" className="w-60 h-20" />
        </div>

        {/* Sign In Form */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea]"
            required
          />
          <button
            onClick={handleSignIn}
            className="w-full p-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-lg hover:from-[#764ba2] hover:to-[#667eea] transition-all"
          >
            Sign In
          </button>
          <p className="text-center text-[#667eea] underline cursor-pointer">
            <NavLink to="/signup">Don't have an account? Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
