import React, { useState } from "react";
import "./search.css";
import {SearchOutlined} from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = ()=>{
    query.length > 0 && navigate(`/search?q=${query}`);
  }

  return (
    <>
      <div className="topbar">
        <h1>Search here</h1>
        <div className="searchBar">
          <input
            className="searchInput"
            type="text"
            placeholder="Search across the company name, primary text, headline, and description."
            onChange={(e)=> setQuery(e.target.value)}
          />
          <SearchOutlined onClick={handleSearch} className="searchIcon"/>
        </div>
      </div>

    </>
  );
};

export default Search;
