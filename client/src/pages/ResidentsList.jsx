import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Table1 from "../components/Table1";
import { getResidents, reset } from "../features/residents/residentSlice";
import Spinner from "../components/Spinner";

const ResidentsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { residents, isLoading, isError } = useSelector(
    (state) => state.residents
  );

  useEffect(() => {
    if (isError) {
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getResidents());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Title title={"RESIDENTS LIST"} />
      <Table1
        title="RESIDENTS RECORD"
        title2="ADD RESIDENT"
        residents={residents}
      />
    </div>
  );
};

export default ResidentsList;
