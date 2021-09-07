import React from "react";

interface IOrderProps {
  toggleOrder: React.ChangeEventHandler;
  order: boolean;
}

const SortPanel = (props: IOrderProps): React.ReactElement => {
  return (
    <div className="item">
      <p>Order Alphabetically</p>
      <div className="ui toggle checkbox">
        <input type="checkbox" name="public" onChange={props.toggleOrder} />
        <label>{`${props.order ? "Ascending" : "Descending"}`}</label>
      </div>
    </div>
  );
};

export default SortPanel;
