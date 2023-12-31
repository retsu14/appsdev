import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Spinner from "../components/Spinner";
import { getFeedbacks, reset } from "../features/feedback/feedbackSlice";
import TableFeedback from "../components/TableFeedback";

const Feedback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <TableFeedback title={"FEEDBACKS"} feedbacks={feedbacks} />
    </div>
  );
};

export default Feedback;
