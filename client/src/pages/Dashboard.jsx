import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import DashboardBoxes from "../components/DashboardBoxes";
import { getResidents } from "../features/residents/residentSlice";
import { useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  const { residents } = useSelector((state) => state.residents);
  const maleCount = residents.filter(
    (resident) => resident.gender === "MALE"
  ).length;
  const femaleCount = residents.filter(
    (resident) => resident.gender === "FEMALE"
  ).length;
  const others = residents.filter(
    (resident) => resident.gender === "OTHERS"
  ).length;
  const petcount = residents.filter((resident) => resident.pet).length;
  const votercount = residents.filter(
    (resident) => resident.registeredvoter === "YES"
  ).length;
  const votercount1 = residents.filter(
    (resident) => resident.registeredvoter === "NO"
  ).length;
  const pwd = residents.filter((resident) => resident.pwd === "YES").length;
  const seniorcitizen = residents.filter(
    (resident) => resident.seniorcitizen === "YES"
  ).length;
  const singleparents = residents.filter(
    (resident) => resident.singleparents === "YES"
  ).length;
  const data = {
    labels: [
      "Population",
      "Male",
      "Female",
      "Pets",
      "Registered Voters",
      "Non-registered Voters",
      "PWDs",
      "Senior Citizen",
      "Single Parents",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          residents.length, // Population count
          maleCount,
          femaleCount,
          petcount,
          votercount,
          votercount1,
          pwd,
          seniorcitizen,
          singleparents,
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 659)",
          "rgb(200, 159, 664)",
          "rgb(123, 190, 123)",
        ],
        hoverOffset: 4,
      },
    ],
  };

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
      <Title title={"CHART"} />
      <div className="w-[100] h-[100]">
        <PieChart data={data} weight={5000} height={5000} />
      </div>
    </div>
  );
};

export default Dashboard;
