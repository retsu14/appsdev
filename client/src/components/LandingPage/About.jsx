const About = () => {
  return (
    <div className="w-full py-[6rem] pt-5 mt-12">
      <h2 className="text-3xl text-center font-bold mb-8">
        AB<span className="text-red-600 font-bold">O</span>UT
      </h2>
      <div className="max-w-[1240px] p-12 mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          {/* Mission Section */}
          <div className="w-full mb-4 border border-black border-solid border-b-4 shadow-xl rounded-lg hover:scale-105 duration-300">
            <div className="flex flex-col items-center pl-12 pr-6 pt-5 pb-11">
              <h2 className="text-2xl font-bold mb-2 text-justify">
                <span className="text-red-600 font-bold">MIS</span>SION
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-disc mt-4">
                <li>Objective 1</li>
                <li>Objective 2</li>
                <li>Objective 3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* Vision Section */}
          <div className="w-full border border-black border-solid border-b-4 shadow-xl rounded-lg hover:scale-105 duration-300">
            <div className="flex flex-col items-center pl-12 pr-6 pt-5 pb-11">
              <h2 className="text-2xl font-bold mb-2 text-justify">
                VISI<span className="text-red-600 font-bold">ON</span>
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-disc mt-4">
                <li>Goal 1</li>
                <li>Goal 2</li>
                <li>Goal 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
