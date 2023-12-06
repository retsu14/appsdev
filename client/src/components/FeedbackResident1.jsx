import React from "react";
import { Label } from "flowbite-react";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { createFeedback } from "../features/feedback/feedbackSlice";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const FeedbackResident1 = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    barangayname: "",
    name: "",
    email: "",
    contact: "",
    feedback: "",
    message: "",
  });

  const { barangayname, name, email, contact, feedback, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      barangayname,
      name,
      email,
      contact,
      feedback,
      message,
    };
    await dispatch(createFeedback(data))
      .then(() => {
        Swal.fire({
          title: "SAVE!",
          icon: "success",
        });
        setFormData({
          barangayname: "",
          name: "",
          email: "",
          contact: "",
          feedback: "",
          message: "",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} id="myForm">
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="BARANGAY NAME:" />
          </div>
          <input
            id="name"
            type="text"
            className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 capitalize"
            value={barangayname}
            onChange={onChange}
            name="barangayname"
            required
          />
        </div>
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="NAME:" />
          </div>
          <input
            id="name"
            type="text"
            className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
            value={name}
            onChange={onChange}
            name="name"
            required
          />
        </div>
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="EMAIL:" />
          </div>
          <input
            id="email"
            type="text"
            className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
            value={email}
            onChange={onChange}
            name="email"
            required
          />
        </div>
        <div className="flex-grow">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="CONTACT:" />
          </div>
          <input
            id="contact"
            type="text"
            className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 capitalize"
            value={contact}
            onChange={onChange}
            name="contact"
            required
          />
        </div>
        <div className="max-w-full mb-3">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="FEEDBACK:" />
          </div>
          <select
            id="feedback"
            className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
            value={feedback}
            onChange={onChange}
            name="feedback"
            required
          >
            <option></option>
            <option>Barangay</option>
            <option>System</option>
            <option>Complaint</option>
          </select>
        </div>
        <textarea
          label="Message"
          className="w-full h-[50vh] rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
          placeholder="Enter your feedback"
          value={message}
          onChange={onChange}
          name="message"
        />
      </form>
      <button className="Btn" form="myForm">
        Save <FaSave className="svg" />
      </button>
    </div>
  );
};

export default FeedbackResident1;
