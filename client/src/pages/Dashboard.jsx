import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
    };
  });
  return (
    <div className="min-h-full bg-gray-200">
      <div className="text-center text-xl font-bold pt-4">DASHBOARD</div>
    </div>
  );
};

export default Dashboard;
