import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";

const BarangayOfficials = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="h-screen bg-gray-200 p-5">
      <div className="text-center text-xl font-bold pt-4">
        BARANGAY OFFICIAL
      </div>
      <Button name={"Barangay Official"} />
      <Modal />
    </div>
  );
};

export default BarangayOfficials;
