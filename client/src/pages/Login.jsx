import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[32rem]"
            // style={"width: 24rem; height: 32rem"}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>

              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    id="email"
                    value={email}
                    onChange={onChange}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    name="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    placeholder="*********"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    name="password"
                    required
                  />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700"
                  />
                  <label className="mr-auto text-xs font-semibold">
                    Remember
                  </label>
                  <a href="#" className="text-xs font-semibold text-purple-700">
                    Forgot password?
                  </a>
                </div>

                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                    Sign in
                  </button>
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Don't have account?
                </span>
                <a href="#" className="text-xs font-semibold text-purple-700">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-[32rem]"
            // style={{width: 24rem; height: 32rem}}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md bg-stone-200"
              src="/ibabao2.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
