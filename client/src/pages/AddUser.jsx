import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableAdmin from "../components/TableAdmin";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { getUser, reset } from "../features/users/userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getUser());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-gray-100 min-h-[800px] p-5">
      <Title title={"Add Barangay"} />
      <TableAdmin title="Users" title2="ADD BARANGAY" users={users} />
    </div>
  );
};

export default AddUser;
