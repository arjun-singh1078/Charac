import React, { Fragment } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Availibilty from "../pages/Availibilty";
import Booking from "../pages/Booking";
import Calendar from "../pages/Calendar";
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";
import Local from "../pages/Local";
import Pharmacists from "../pages/Pharmacists";
import Logout from "../pages/Logout";
import Profile from "../pages/Profile";

const MainPage = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/pharmacists" element={<Pharmacists />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/availibilty" element={<Availibilty />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/local" element={<Local />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </Fragment>
  );
};

export default MainPage;
