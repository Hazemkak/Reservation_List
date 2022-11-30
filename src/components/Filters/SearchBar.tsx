import React from "react";
import TextField from "@mui/material/TextField";
// import {AiOutlineFilter} from '';
import "./styles/SearchBar.css";

interface SearchBarProps {
  search: string;
  setSearch: Function;
}

function SearchBar(props: SearchBarProps) {
  const { search, setSearch }: SearchBarProps = props;

  return (
    <div className="parent_div">
      <div className="search_div">
        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          id="outlined-required"
          label="Search By Customer Name"
        />
      </div>
      <div className="filter_div">
        <div>🎥</div>
      </div>
    </div>
  );
}

export default SearchBar;
