import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

const useStyles = makeStyles({
  delete: {
    float: "right",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
});

const DeleteSwim = (props: IDeleteSwimProps) => {
  const [modalOpen, setModalOpen] = useState("none");
  const handleModalOpen = () => setModalOpen("block");
  const handleModalClose = () => setModalOpen("none");

  const deleteSpot = () => {
    axios
      .delete(`http://localhost:8090/api/spots/delete/${props.id}`)
      .then((res) => {
        console.log("Deleting Spot");
        console.log(res.data);
        handleModalClose();
        console.log("Resetting SwimSpots");
        props.resetSwimSpots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();
  return (
    <>
      <i
        className={`trash alternate outline icon ${classes.delete}`}
        onClick={handleModalOpen}
      ></i>
      <div className="ui modal" style={{ display: modalOpen }}>
        <i className="close icon" onClick={handleModalClose}></i>
        <div className="header">Delete Swim Spot</div>
        <div className="image content">
          <div className="description">
            Are you sure you want to delete this swim spot?
          </div>
        </div>
        <div className="actions">
          <div className="ui button" onClick={handleModalClose}>
            Cancel
          </div>
          <div className="ui button" onClick={deleteSpot}>
            Delete
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteSwim;
