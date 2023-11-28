import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal1 from "../components/Modal1";

const BarangayOfficials = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <div className="text-center text-xl font-bold pt-4">
        BARANGAY OFFICIAL
      </div>
      <Modal1 />
    </div>
  );
};

export default BarangayOfficials;
