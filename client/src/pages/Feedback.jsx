import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const Feedback = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="h-screen bg-gray-100 p-5">
      <Title title={"FEEDBACK"} />
    </div>
  );
};

export default Feedback;
