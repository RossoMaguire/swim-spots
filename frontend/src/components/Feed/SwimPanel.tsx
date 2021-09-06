import React from "react";

interface ISwimPanelProps {
  name: string;
  county: string;
  desc: string;
  coordinates: string;
  faves: number;
  username: string;
}

const SwimPanel = (props: ISwimPanelProps): React.ReactElement => {
  return (
    <div className="item">
      <div className="image">
        <img alt={props.name} src="/images/wireframe/image.png" />
      </div>
      <div className="content">
        <a className="header" href="#">
          {props.name}
        </a>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{props.desc}</p>
        </div>
        <div className="extra">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${props.coordinates}`}
            target="_blank"
            rel="noreferrer"
          >
            Find on map
          </a>
        </div>
        <div className="extra">{`${props.faves} favourites | Posted by ${props.username}`}</div>
      </div>
    </div>
  );
};

export default SwimPanel;
