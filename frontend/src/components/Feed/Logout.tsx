import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  logout: {
    cursor: "pointer",
    bottom: "15px",
    position: "absolute",
  },
});

const Logout = (props: IFeedProps) => {
  const classes = useStyles();
  return (
    <button
      className={`ui secondary button ${classes.logout}`}
      onClick={props.handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
