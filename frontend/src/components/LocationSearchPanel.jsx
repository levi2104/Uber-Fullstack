/* eslint-disable react/prop-types */
const LocationSearchPanel = ({ setPanel30Open, setPanel70Open, setVehiclePanelOpen }) => {
  const locations = [
    "24B, Near Kapoor's Cafe, Aryan Coding Hub",
    "23B, Near Malhotra's Cafe, Nihar Coding Hub",
    "22B, Near Khan's Cafe, Rajvi Coding Hub",
    "21B, Near Singhania's Cafe, Nisha Coding Hub",
  ]
  return (
    <>
      {locations.map((location, index) => (
        <div 
          onClick={() => {
            setVehiclePanelOpen(true)
            setPanel30Open(false)
            setPanel70Open(false)
          }} 
          key={index} 
          className="mx-3 flex items-center justify-center gap-3 font-semibold border-2 border-white rounded-xl active:border-black p-2"
        >
          <h2 className="bg-[#eee] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <p>
            {location}
          </p>
        </div>
      ))}
    </>
  );
}

export default LocationSearchPanel