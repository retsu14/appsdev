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
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/LandingPage/Hero";
import Navbar from "./components/LandingPage/Navbar";
import About from "./components/LandingPage/About";
import Events from "./components/LandingPage/Events";
import Cardd from "./components/Cardd";
import { useSelector } from "react-redux";
import Table from "./components/Table";
import BarangayInfo from "./pages/BarangayInfo";
import SidebarForResident from "./components/SidebarForResident";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {/* <div>
        <Navbar />
        <Hero />
        <About />
        <Events />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {(user && user.role === "user") || (user && user.role === "admin") ? (
          <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-hidden">
              <Navbar1 />
              <div className="flex-grow overflow-y-auto lg:ml-[23.5%] lg:mt-[4.5rem] md:mt-[3.5rem] mt-[3.5rem]">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/barangayinformation"
                    element={<BarangayInfo />}
                  />
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
        ) : (
          <div className="flex">
            <SidebarForResident />
            <div className="flex flex-col flex-grow overflow-hidden">
              <Navbar1 />
              <div className="flex-grow overflow-y-auto lg:ml-[23.5%] lg:mt-[4.5rem] md:mt-[3.5rem] mt-[3.5rem]">
                <Routes>
                  <Route path="/residentslist" element={<ResidentsList />} />
                  <Route path="/announcements" element={<Announcement />} />
                  <Route path="/feedback" element={<Feedback />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
