import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="h-screen bg-gray-100 p-5">
      <Title title={"DASHBOARD"} />
    </div>
  );
};

export default Dashboard;
