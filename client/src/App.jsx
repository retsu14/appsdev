import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Sidebar } from "./components/Sidebar";
import { Navbar1 } from "./components/Navbar1";
import Dashboard from "./pages/Dashboard";
import BarangayOfficials from "./pages/BarangayOfficials";
import SKMembers from "./pages/SKMembers";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-grow overflow-hidden">
            <Navbar1 />
            <div className="flex-grow overflow-y-auto p-4">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/barangayofficials"
                  element={<BarangayOfficials />}
                />
                <Route path="/skmembers" element={<SKMembers />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
