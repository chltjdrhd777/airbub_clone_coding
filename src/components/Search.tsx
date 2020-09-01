import React, { useState } from "react";
import "../css/Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guest <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button>Air</Button>
    </div>
  );
}

export default Search;
