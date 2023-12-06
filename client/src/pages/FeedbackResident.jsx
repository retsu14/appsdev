import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import FeedbackResident1 from "../components/FeedbackResident1";
import { getFeedbacks, reset } from "../features/feedback/feedbackSlice";
import Spinner from "../components/Spinner";

const FeedbackResident = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { feedbacks, isLoading } = useSelector((state) => state.feedbacks);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getFeedbacks());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-[800px] bg-gray-100 p-5">
      <Title title={"FEEDBACK"} />
      <div className="bg-white p-4 rounded-md shadow-md mt-10">
        <FeedbackResident1 />
      </div>
    </div>
  );
};

export default FeedbackResident;
