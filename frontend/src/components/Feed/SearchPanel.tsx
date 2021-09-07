import React from "react";

interface ISearchPanelProps {
  handleSearch: React.ChangeEventHandler;
  searchBy: string;
}

const SearchPanel = (props: ISearchPanelProps): React.ReactElement => {
  return (
    <div className="item">
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
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
