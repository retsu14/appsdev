import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal1 from "../components/Modal1";
import Spinner from "../components/Spinner";
import Cardd from "../components/Cardd";
import Title from "../components/Title";
import {
  getBarangayOfficials,
  reset,
} from "../features/barangayOfficials/barangaySlice";

const BarangayOfficials = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { barangayofficials, isLoading, isError } = useSelector(
    (state) => state.barangayofficials
  );

  const positions = [
    { name: "BRGY. CAPTAIN" },
    { name: "BRGY. SECRETARY" },
    { name: "BRGY. TREASURER" },
    { name: "BRGY. COUNCILOR" },
  ];

  useEffect(() => {
    if (isError) {
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getBarangayOfficials());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Title title={"BARANGAY OFFICIALS"} />
      <Modal1 name={"Barangay Official"} positions={positions} />

      <div className="w-full">
        {barangayofficials.length > 0 ? (
          <div className="lg:justify-start flex gap-5 flex-wrap md:justify-center sm:justify-center">
            {barangayofficials.map((barangayofficial) => (
              <Cardd
                key={barangayofficial._id}
                barangayofficial={barangayofficial}
                positions={positions}
              />
            ))}
          </div>
        ) : (
          <h3 className="text-center">
            <i>NO BARANGAY OFFICIALS YET</i>
          </h3>
        )}
      </div>
    </div>
  );
};

export default BarangayOfficials;
