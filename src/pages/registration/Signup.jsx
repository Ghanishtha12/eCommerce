import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNoteError, setShowNoteError] = useState(false);

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading(true);
    setShowNoteError(false);

    if (name === "" || email === "" || password === "") {
      toast.error("Please fill all the fields");
      setLoading(false);
      return;
    }

    if (password.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setShowNoteError(true);
      setLoading(false);
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now()
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      toast.success("Signup Successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Signup failed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen px-2">
      {loading && <Loader />}
      <div className="bg-gray-800 px-6 py-10 rounded-xl w-full max-w-sm">
        <h1 className="text-center text-white text-xl mb-4 font-bold">Signup</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none pr-10"
          />
          <div
            className="absolute right-3 top-3 text-black cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div
          className={`rounded-lg px-4 py-3 text-sm mb-4 ${
            showNoteError ? "bg-red-400 text-white" : "bg-gray-700 text-gray-200"
          }`}
        >
          <strong className="block mb-1">Note:</strong>
          <ul className="list-disc list-inside space-y-1">
            <li>Password must be at least 8 characters long</li>
            <li>Password must contain one uppercase, one lowercase, and one number</li>
          </ul>
        </div>

        <button
          onClick={signup}
          className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg mb-3"
        >
          Signup
        </button>

        <p className="text-white text-center">
          Have an account?{" "}
          <Link to="/login" className="text-red-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
