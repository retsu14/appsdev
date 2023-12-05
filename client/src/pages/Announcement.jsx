import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const Announcement = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="min-h-[800px] bg-gray-100 p-5">
      <Title title={"ANNOUNCEMENTS"} />
    </div>
  );
};

export default Announcement;
