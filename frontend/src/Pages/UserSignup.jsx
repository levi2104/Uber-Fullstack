import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const navigate = useNavigate()

  const { setUser } = useContext(UserDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser,
        { withCredentials: true }
      );

      console.log(response.data)
      setUser(response.data.user);
      navigate("/user-home");  

    } catch (err) {
      console.error({ message: err })
    }

    setEmail('');
    setPassword('');
    setFirstname('')
    setLastname('')
  };

  return (
    <div className="flex flex-col justify-between min-h-screen p-7">
      <div>
        <img
          className="w-16 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo.png"
        />

        <form onSubmit={handleSubmit} className="">
          <h3 className="text-xl mb-2 font-semibold">What&apos;s your name?</h3>

          <div className="flex gap-4 mb-7">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              placeholder="First name"
            />

            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              placeholder="Last name"
            />
          </div>

          <h3 className="text-xl mb-2 font-semibold">
            What&apos;s your email?
          </h3>

          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none mb-7"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />

          <h3 className="text-xl mb-2 font-semibold">Enter Password</h3>

          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none mb-7"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="12345678"
          />

          <button onClick={handleSubmit} className="bg-black text-white rounded px-4 py-2 w-full text-lg placeholder:text-base outline-none mb-2">
            Create account
          </button>
        </form>

        <p className="text-center mb-10">
          Already have an account?{" "}
          <Link to="/user-login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>

      <div className="text-[10px] leading-tight text-center">
        <p>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  );
};

export default UserSignup;
