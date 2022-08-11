import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import {
  FaHome,
  FaRegCalendarPlus,
  FaStethoscope,
  FaUserAlt,
  FaCheckCircle,
  FaClock,
  FaTruckMoving,
  FaDharmachakra,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const firstDataSet = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: <FaRegCalendarPlus />,
  },
  {
    path: "/pharmacists",
    name: "Pharmacists",
    icon: <FaStethoscope />,
  },
  {
    path: "/customers",
    name: "Customers",
    icon: <FaUserAlt />,
  },
  {
    path: "/booking",
    name: "Bookings",
    icon: <FaCheckCircle />,
  },
  {
    path: "/availibilty",
    name: "Availibility",
    icon: <FaClock />,
  },
  {
    path: "/local",
    name: "Local to Local",
    icon: <FaTruckMoving />,
  },
];

const secondDataSet = [
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUserCircle />,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <FaSignOutAlt />,
  },
];
const Sidebar = (props) => {
  const [isOpen, setisOpen] = useState(true);

  const toggleNav = () => {
    setisOpen(!isOpen);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const logoNameAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className={"main_container"}>
      <motion.div
        animate={{ width: isOpen ? "" : "63px" }}
        className={"sidebar"}
      >
        <div className="top_section">
          <div className="brand_icon">
            {<FaDharmachakra onClick={toggleNav} />}
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={logoNameAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo_name"
              >
                Charac
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        <div className="wrapper">
          <div className="group_set">
            <div className="first_set">
              <ul>
                {firstDataSet.map((route) => (
                  <li className={`link ${!isOpen ? "inActive" : ""}`}>
                    <NavLink
                      to={route.path}
                      key={route.name}
                      style={{ padding: isOpen ? " 8px 12px" : "8px 12px" }}
                    >
                      <div
                        className="icon"
                        style={{ minWidth: isOpen ? "35px" : "0px" }}
                      >
                        {route.icon}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_name"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="second_set">
              <ul>
                {secondDataSet.map((route) => (
                  <li className={`link ${!isOpen ? "inActive" : ""}`}>
                    <NavLink
                      to={route.path}
                      key={route.name}
                      style={{ padding: isOpen ? "8px  12px" : "" }}
                    >
                      <div
                        className="icon"
                        style={{ minWidth: isOpen ? "35px" : "0px" }}
                      >
                        {route.icon}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_name"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <main className={`${isOpen ? "isOpen" : "isClose"}`}>
        {props.children}
      </main>
    </div>
  );
};

export default Sidebar;
