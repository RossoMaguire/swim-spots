import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  logout: {
    cursor: "pointer",
    color: "#4183c4",
  },
});

const UserNamePanel = (props: IUserNamePanelProps) => {
  const classes = useStyles();

  return (
    <div className="ui small message">
      <p>
        {`Logged in as: `}
        <b>{props.currentUser}</b>
      </p>
      <div onClick={props.handleLogout} className={classes.logout}>
        Logout
      </div>
    </div>
  );
};

export default UserNamePanel;
