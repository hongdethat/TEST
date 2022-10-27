import React from "react";
import Database from '../../../database/Admin';

function Search(props) {

  return (
    <select onChange={(e) => props.onSearch(e.target.value)} value={props.value} className="Search_sellect">
       {Database.user.map(({ Date }) => (
        <option>
          {Date}
        </option>
      ))}
    </select>
  );
}

export default Search;