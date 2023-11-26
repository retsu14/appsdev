import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BarangayOfficials = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="h-screen bg-gray-200">
      <div className="text-center font-bold text-xl pt-4">
        BARANGAY OFFICIALS
      </div>
    </div>
  );
};

export default BarangayOfficials;
