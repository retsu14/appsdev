import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SKMembers = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="h-screen bg-gray-200">
      <div className="text-center font-bold text-xl pt-4">SK MEMBERS</div>
    </div>
  );
};

export default SKMembers;
