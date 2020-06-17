import React from 'react';
import { FiSearch} from 'react-icons/fi';
import { IoIosSettings } from "react-icons/io";

const Search =()=> {
  return (
    <div className="search-container">
        <div className="search">
        <div className="icon"><FiSearch color="red" size="1.5em"/></div>
        <input type="text" placeholder="Search near by salon"/>
    </div>
</div>
  );
}

export default Search;
