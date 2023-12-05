import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Table from "../components/Table";
import {
  getHouseholds,
  reset,
} from "../features/householdRecord/householdSlice";
import Spinner from "../components/Spinner";
const HouseholdRecords = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { households, isLoading, isError, isSuccess } = useSelector(
    (state) => state.households
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getHouseholds());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Title title={"HOUSEHOLD RECORDS"} />
      <Table
        title="HOUSEHOLD INFORMATIONS"
        title2="ADD HOUSEHOLD"
        households={households}
        ngalan={user.name}
      />
    </div>
  );
};

export default HouseholdRecords;
