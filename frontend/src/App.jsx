import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserLogout from "./pages/UserLogout";
import UserHome from "./pages/UserHome";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <div className="regular-fonts">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-logout" element={<UserLogout />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-home" element={<CaptainHome />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-logout" element={<CaptainLogout />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
