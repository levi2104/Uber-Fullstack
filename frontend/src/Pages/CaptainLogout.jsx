import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/captains/logout`,
        {},
        { withCredentials: true }
      )
      .then(() => {
        navigate("/captain-login");
      })
      .catch((err) => console.error(err));
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
