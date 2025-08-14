import { Link } from "react-router-dom";
import CaptainHomeDetails from "./CaptainHomeDetails";
import RidePopup from "../components/RidePopup";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanelOpen, setRidePopupPanelOpen] = useState(true)
  const ridePopupPanelRef = useRef(null)
  const [confirmRidePopupPanelOpen, setConfirmRidePopupPanelOpen] = useState(false)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(() => {
    if (ridePopupPanelOpen) {
      gsap.to(ridePopupPanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        y: "100%",
      });
    }
  }, [ridePopupPanelOpen]);

  useGSAP(() => {
    if (confirmRidePopupPanelOpen) {
      gsap.to(confirmRidePopupPanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        y: "100%",
      });
    }
  }, [confirmRidePopupPanelOpen]);

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-1/2">
        <div className="w-full">
          <img className="fixed left-4 top-4 w-16" src="/uber-logo.png" />
          <Link
            to="/user-home"
            className="fixed right-2 top-2 h-12 w-12 bg-white flex justify-center items-center rounded-full"
          >
            <i className="text-2xl font-semibold ri-logout-box-r-line"></i>
          </Link>
        </div>
        <img
          className="w-full h-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber-map.png"
        />
      </div>

      <div className="h-1/2 p-4">
        <CaptainHomeDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed z-10 bottom-0 bg-white p-3 overflow-hidden max-h-screen"
      >
        <RidePopup
          setRidePopupPanelOpen={setRidePopupPanelOpen}
          setConfirmRidePopupPanelOpen={setConfirmRidePopupPanelOpen}
        />
      </div>

      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full z-10 bottom-0 bg-white p-3 overflow-hidden"
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanelOpen={setConfirmRidePopupPanelOpen}
        />
      </div>
    </div>
  );
};

export default CaptainHome;