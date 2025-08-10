import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg')] bg-cover bg-center h-screen pt-8 w-full flex flex-col justify-between">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo.png"
        />
        <div className="bg-white p-4 pb-7">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link to='/user-login' className="flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home