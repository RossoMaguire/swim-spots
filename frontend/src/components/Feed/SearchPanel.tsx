import React from "react";

const SearchPanel = (): React.ReactElement => {
  return (
    <div className="item">
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search Swim Spots..."
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </div>
  );
};

export default SearchPanel;
