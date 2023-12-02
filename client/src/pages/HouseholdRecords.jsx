import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Table from "../components/Table";

const HouseholdRecords = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Title title={"HOUSEHOLD RECORDS"} />
      <Table title="HOUSEHOLD INFORMATIONS" title2="ADD HOUSEHOLD" />
    </div>
  );
};

export default HouseholdRecords;
