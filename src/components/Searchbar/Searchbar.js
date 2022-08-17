import React from "react";
// import { debounce } from "lodash";
import { DebounceInput } from "react-debounce-input";

import "./Searchbar.css";
import Users from "../../CustormersList";
import { useState } from "react";
import Table from "../Table/Table";

// console.log(Users);

const Searchbar = () => {
  const [inputChange, setInputChange] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const searchData = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(inputChange))
    );
  };

  const inputChangeHandler = (event) => {
    setInputChange(event.target.value);
  };
  return (
    <section>
      <div className="container">
        <div className="col-sm-2 col-md-2 col-lg-2"></div>
        <div className="col-sm-8 col-md-8 col-lg-8">
          <form className="d-flex" role="search">
            <DebounceInput
              min={5}
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputChange}
              debounceTimeout={500}
              onChange={inputChangeHandler}
            />
          </form>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2"></div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 col-12">
        <Table data={searchData(Users)} />
      </div>
    </section>
  );
};

export default Searchbar;
