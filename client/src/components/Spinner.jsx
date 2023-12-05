import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="bg-gray-900 opacity-50 z-[999999] fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center bg-neutral-800">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
