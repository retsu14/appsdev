import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import { ToastContainer, toast } from "react-toastify";
import DashboardBoxes from "../components/DashboardBoxes";
import { getResidents } from "../features/residents/residentSlice";
import { useDispatch } from "react-redux";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.residents);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getResidents());
  }, [user, navigate]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-[800px] bg-gray-100 p-5">
      <Title title={"DASHBOARD"} />
      <DashboardBoxes />
    </div>
  );
};

export default Dashboard;
