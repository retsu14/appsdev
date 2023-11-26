import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        progressStyle: { visibility: "hidden" },
        autoClose: 1000,
      });
    }
    if (isSuccess || user) {
      navigate("/dashboard");
      toast.success("Login Successful!", {
        autoClose: 1000,
        progressStyle: { visibility: "hidden" },
      });
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    await dispatch(login(userData));
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[32rem]"
            // style={"width: 24rem; height: 32rem"}x
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
                    placeholder="Enter password"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    name="password"
                    required
                  />
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
              src="/ibabao.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
