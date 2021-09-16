import React from "react";

const SearchPanel = (props: ISearchPanelProps): React.ReactElement => {
  return (
    <div className="item" style={{ marginBottom: "20px" }}>
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            name="searchBy"
            placeholder={`Search by ${props.searchBy}`}
            onChange={(e) => props.handleSearch(e)}
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </div>
  );
};

export default SearchPanel;
