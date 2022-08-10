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
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

const routes = [
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

const routes1 = [
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
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className={classes.main_container}>
      <motion.div
        animate={{ width: isOpen ? "200px" : "45px" }}
        className={classes.sidebar}
      >
        <div className={classes.top_section}>
          <div className={classes.brand_icon}>
            {<FaDharmachakra onClick={toggleNav} />}
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={logoNameAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={classes.logo_name}
              >
                Charac
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.group_set}>
            <div className={classes.first_set}>
              {routes.map((route) => (
                <Link
                  to={route.path}
                  key={route.name}
                  className={classes.link}
                  style={{ padding: isOpen ? "11px 20px" : "11px 10px" }}
                >
                  <div className={classes.icon}>{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={classes.link_name}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </div>

            <div className={classes.second_set}>
              {routes1.map((route) => (
                <Link
                  to={route.path}
                  key={route.name}
                  className={classes.link}
                  style={{ padding: isOpen ? "11px 20px" : "11px 10px" }}
                >
                  <div className={classes.icon}>{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={classes.link_name}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <main>{props.children}</main>
    </div>
  );
};

export default Sidebar;
