import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import TableAnnouncement from "../components/TableAnnouncement";
import {
  getAnnouncements,
  reset,
} from "../features/announcements/announcementSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const Announcement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { announcements, isLoading } = useSelector(
    (state) => state.announcements
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getAnnouncements());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-[800px] bg-gray-100 p-5">
      <Title title={"ANNOUNCEMENTS"} />
      <TableAnnouncement
        title1={"ANNOUNCEMENTS"}
        announcements={announcements}
      />
    </div>
  );
};

export default Announcement;
