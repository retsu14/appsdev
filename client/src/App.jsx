import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Sidebar } from "./components/Sidebar";
import { Navbar1 } from "./components/Navbar1";
import Dashboard from "./pages/Dashboard";
import BarangayOfficials from "./pages/BarangayOfficials";
import SKMembers from "./pages/SKMembers";
import HouseholdRecords from "./pages/HouseholdRecords";
import ResidentsList from "./pages/ResidentsList";
import Feedback from "./pages/Feedback";
import Announcement from "./pages/Announcement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Routes>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-grow overflow-hidden">
            <Navbar1 />
            <div className="flex-grow overflow-y-auto">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/barangayofficials"
                  element={<BarangayOfficials />}
                />
                <Route path="/skmembers" element={<SKMembers />} />
                <Route
                  path="/householdrecords"
                  element={<HouseholdRecords />}
                />
                <Route path="/residentslist" element={<ResidentsList />} />
                <Route path="/announcements" element={<Announcement />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
