import React from "react";
import "./AppSearch.css";
function AppSearch(porps) {
  const { value, onValueChange } = porps;
  return (
    <div className="app-search">
      <input
        type="text"
        className="app-search-input"
        placeholder="ค้นหาชื่อรูปภาพ..."
        value={value}
        onChange={(event) => {
          {
            onValueChange(event.target.value);
          }
        }}
      />
    </div>
  );
}

export default AppSearch;
