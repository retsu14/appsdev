import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal1 from "../components/Modal1";

const SKMembers = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const positions = [{ name: "SK. PRESIDENT" }, { name: "SK. COUNCILOR" }];

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <div className="text-center text-xl font-bold pt-4">SK MEMBERS</div>
      <Modal1 name={"SK Member"} positions={positions} />
    </div>
  );
};

export default SKMembers;
