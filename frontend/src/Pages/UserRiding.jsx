import { Link } from "react-router-dom";

const UserRiding = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Link to='/user-home' className="fixed right-2 top-2 h-12 w-12 bg-white flex justify-center items-center rounded-full">
        <i className="text-2xl font-semibold ri-home-5-line"></i>
      </Link>
      <div className="h-2/5">
        <img
          className="w-full h-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber-map.png"
        />
      </div>
      <div className="h-3/5">
        <div className="flex justify-between items-center m-6">
          <img
            className="h-20"
            src="data:image/jpeg;base64,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"
            alt="uber-car"
          />

          <div>
            <h3 className="bold-fonts text-[26px]">GJ 11 PP 2183</h3>
            <div className="flex flex-col items-end">
              <h3 className="text-xl font-semibold">Aryan Tanna</h3>
              <h3 className="text-lg">Color: Blue</h3>
            </div>
          </div>
        </div>

        <hr className="border-2" />

        <div className="p-6">
          <h4 className="text-xl font-semibold">Destination</h4>
          <p>24B, Near Malhotra&apos;s Cafe, Nihar Coding Hub</p>

          <div className="flex justify-between items-center text-2xl font-semibold mt-12">
            <h4>Total Amount</h4>
            <h4>₹ 193.20</h4>
          </div>

          <button
            onClick={() => {
              // setLookingForDriverPanelOpen(true);
              // setConfirmedVehiclePanelOpen(false);
            }}
            className="inline-block text-center bg-green-500 text-white w-full py-2 text-[22px] rounded-[6px] mt-6"
          >
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserRiding