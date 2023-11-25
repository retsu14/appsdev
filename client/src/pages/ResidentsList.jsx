import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResidentsList = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="min-h-full bg-gray-200">
      <div className="text-center font-bold text-xl pt-4">RESIDENTS LIST</div>
    </div>
  );
};

export default ResidentsList;
