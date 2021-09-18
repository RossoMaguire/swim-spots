import React from "react";

const SortPanel = (props: IOrderProps): React.ReactElement => {
  return (
    <div className="item" style={{ marginBottom: "40px" }}>
      <p>Order Alphabetically</p>
      <div className="ui toggle checkbox">
        <input type="checkbox" name="public" onChange={props.toggleOrder} />
        <label>{`${
          props.order ? "Currently: Descending" : "Currently: Ascending"
        }`}</label>
      </div>
    </div>
  );
};

export default SortPanel;
