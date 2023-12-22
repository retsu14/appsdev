import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { CgWindows } from "react-icons/cg";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        progressStyle: { visibility: "hidden" },
        autoClose: 1000,
      });
    }
    if (isSuccess) {
      toast.success("Registered Successfully!", {
        autoClose: 2000,
        progressStyle: { visibility: "hidden" },
      });
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      // Display an error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There are errors in your form. Please check and try again.",
      });
      return;
    }

    setErrors({});

    const userData = {
      name,
      email,
      password,
    };

    try {
      // Dispatch the register action
      await dispatch(register(userData));
    } catch (error) {
      // Handle registration failure
      // Display an error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "An error occurred during registration.",
      });
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <ToastContainer></ToastContainer>
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[25rem]">
            <div className="w-72">
              <h1 className="text-xl font-semibold">Sign Up</h1>
              <small className="text-gray-400">Please enter your details</small>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={name}
                    onChange={onChange}
                    className={`block w-full rounded-md border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500`}
                    name="name"
                    required
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={onChange}
                    className={`block w-full rounded-md border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500`}
                    name="email"
                    required
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
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
                    className={`block w-full rounded-md border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500`}
                    name="password"
                    required
                  />
                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password}</p>
                  )}
                </div>

                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
