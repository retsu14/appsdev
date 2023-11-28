import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-70 backdrop-filter backdrop-blur-md">
      {/* Registration Card Modal */}
      <div className="bg-black bg-opacity-75 p-8 rounded-2xl max-w-md w-full flex">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            SIG<span className="text-red-600 font-bold">N</span> UP
          </h2>
          {/* Form Inputs */}
          <form>
            {/* First Name */}
            <div className="mb-4">
              <input
                className="border rounded-3xl w-full py-2 px-3 text-black focus:outline-none"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <input
                className="border rounded-3xl w-full py-2 px-3 text-black focus:outline-none"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                className="border rounded-3xl w-full py-2 px-3 text-black focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                className="border rounded-3xl w-full py-2 px-3 text-black focus:outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <input
                className="border rounded-3xl w-full py-2 px-3 text-black focus:outline-none"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Attach File */}
            <div className="mb-4 flex items-center">
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                className="hidden"
                // Additional attributes for file input if needed
              />
              <label
                htmlFor="fileInput"
                className="text-gray-500  cursor-pointer"
              >
                <FontAwesomeIcon icon={faFile} className="ml-2 text-2xl" />
                Attach File (s)*required
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="bg-red-500 text-white px-40 py-2 font-bold rounded-3xl hover:bg-red-700 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Empty Space on the Right */}
        <div className="flex-1">{/* Add your images and text here */}</div>
      </div>
    </div>
  );
};

export default Register;
