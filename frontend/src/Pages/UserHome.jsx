import { useRef, useState } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const UserHome = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panel30Open, setPanel30Open] = useState(false)
  const [panel70Open, setPanel70Open] = useState(false)
  const panel30Ref = useRef(null)
  const panel70Ref = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmedVehiclePanelOpen, setConfirmedVehiclePanelOpen] = useState(false)
  const confirmedVehiclePanelRef = useRef(null)
  const [lookingForDriverPanelOpen, setLookingForDriverPanelOpen] = useState(false)
  const lookingForDriverPanelRef = useRef(null)
  const [waitingForDriverPanelOpen, setWaitingForDriverPanelOpen] = useState(false)
  const waitingForDriverPanelRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useGSAP(() => {
    if (panel30Open) {
      gsap.to(panel30Ref.current, {
        top: '0%',
      });
    } else {
      gsap.to(panel30Ref.current, {
        top: '70%',
      });
    }
  }, [panel30Open]);

  useGSAP(() => {
    if (panel70Open) {
      gsap.to(panel70Ref.current, {
        height: "70%",
      });
    } else {
      gsap.to(panel70Ref.current, {
        height: "0%",
      });
    }
  }, [panel70Open]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmedVehiclePanelOpen) {
      gsap.to(confirmedVehiclePanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(confirmedVehiclePanelRef.current, {
        y: "100%",
      });
    }
  }, [confirmedVehiclePanelOpen]);

  useGSAP(() => {
    if (lookingForDriverPanelOpen) {
      gsap.to(lookingForDriverPanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(lookingForDriverPanelRef.current, {
        y: "100%",
      });
    }
  }, [lookingForDriverPanelOpen]);

  useGSAP(() => {
    if (waitingForDriverPanelOpen) {
      gsap.to(waitingForDriverPanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(waitingForDriverPanelRef.current, {
        y: "100%",
      });
    }
  }, [waitingForDriverPanelOpen]);

  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden">
        <img
          className="w-16 absolute top-8 left-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />

        <div className="h-screen w-screen">
          <img
            className="w-full h-full"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="uber-map.png"
          />
        </div>

        <div
          ref={panel30Ref}
          className="absolute bottom-0 h-[30%] bg-white p-5 w-full"
        >
          <h2
            className="absolute top-6 right-6 text-2xl"
            onClick={() => {
              setPanel30Open((prev) => !prev);
              setPanel70Open((prev) => !prev);
            }}
          >
            {panel70Open ? (
              <i className="ri-arrow-down-wide-line"></i>
            ) : (
              <i className="ri-arrow-up-wide-line"></i>
            )}
          </h2>
          <h2 className="absolute top-6 left-6 text-3xl font-bold">
            Find a trip
          </h2>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="line absolute w-2 rounded-full h-2 bottom-[96px] bg-black left-[38px]"></div>
            <div className="line absolute w-1 h-[44px] bg-black bottom-[49px] left-[39.9px] rounded-full"></div>
            <div className="line absolute w-2 rounded-sm h-2 bottom-[38px] bg-black left-[38px]"></div>
            <input
              onClick={() => {
                setPanel30Open(true);
                setPanel70Open(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-5 outline-none"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => {
                setPanel30Open(true);
                setPanel70Open(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-3 outline-none"
              placeholder="Enter destination"
            />
          </form>
        </div>

        <div
          ref={panel70Ref}
          className="absolute bottom-0 h-[70%] bg-white w-full"
        >
          <LocationSearchPanel
            setPanel30Open={setPanel30Open}
            setPanel70Open={setPanel70Open}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>

        <div
          ref={vehiclePanelRef}
          className="absolute z-10 bottom-0 bg-white p-3 translate-y-full"
        >
          <VehiclePanel
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanel30Open={setPanel30Open}
            setPanel70Open={setPanel70Open}
            setConfirmedVehiclePanelOpen={setConfirmedVehiclePanelOpen}
          />
        </div>

        <div
          ref={confirmedVehiclePanelRef}
          className="absolute z-10 bottom-0 bg-white translate-y-full w-full"
        >
          <ConfirmedVehicle
            setConfirmedVehiclePanelOpen={setConfirmedVehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
          />
        </div>

        <div
          ref={lookingForDriverPanelRef}
          className="absolute z-10 bottom-0 bg-white translate-y-full w-full"
        >
          <LookingForDriver
            setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
            setConfirmedVehiclePanelOpen={setConfirmedVehiclePanelOpen}
          />
        </div>

        <div
          ref={waitingForDriverPanelRef}
          className="absolute z-10 bottom-0 bg-white w-full translate-y-full"
        >
          <WaitingForDriver
            setWaitingForDriverPanelOpen={setWaitingForDriverPanelOpen}
            // setConfirmedVehiclePanelOpen={setConfirmedVehiclePanelOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default UserHome