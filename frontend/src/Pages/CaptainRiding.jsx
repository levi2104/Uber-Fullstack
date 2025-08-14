import { Link } from "react-router-dom";
import { MdNavigation } from "react-icons/md"
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanelOpen, setFinishRidePanelOpen] = useState(false)
  const finsihRidePanelRef = useRef(null)
  const [navigationPanelOpen, setNavigationPanelOpen] = useState(true)
  const navigationPanelRef = useRef(null)

  useGSAP(() => {
    if (finishRidePanelOpen) {
      gsap.to(finsihRidePanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(finsihRidePanelRef.current, {
        y: "100%",
      });
    }
  }, [finishRidePanelOpen]);

  useGSAP(() => {
    if (navigationPanelOpen) {
      gsap.to(navigationPanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(navigationPanelRef.current, {
        y: "100%",
      });
    }
  }, [navigationPanelOpen]);

  return (
    <div className="h-screen overflow-hidden fixed">
      <div className="h-[85%]">
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

      <div ref={navigationPanelRef} className="h-[15%] p-4 relative flex flex-col items-start justify-center">
        <div className="w-full text-center text-2xl -mt-3">
          <i
            onClick={() => {
              setFinishRidePanelOpen(true);
              setNavigationPanelOpen(false)
            }}
            className="ri-arrow-up-wide-line"
          ></i>
        </div>

        <div className="flex justify-start gap-6">
          <div className="bg-yellow-500 rounded-full p-3">
            <MdNavigation size={32} />
          </div>

          <div>
            <h3 className="text-gray-400">Pickup at</h3>
            <h2 className="text-2xl font-semibold">7958 Swift Village</h2>
          </div>
        </div>
      </div>

      <div
        ref={finsihRidePanelRef}
        className="absolute w-full z-10 bottom-0 bg-white p-3"
      >
        <FinishRide 
          setFinishRidePanelOpen={setFinishRidePanelOpen} 
          setNavigationPanelOpen={setNavigationPanelOpen} 
        />
      </div>
    </div>
  );
}

export default CaptainRiding