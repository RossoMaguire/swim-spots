import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Modal } from "semantic-ui-react";
import ApiClient from "../repositories/ApiClient";

const useStyles = makeStyles({
  delete: {
    float: "right",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
});

const DeleteSwim = (props: IDeleteSpotProps) => {
  const [open, setOpen] = useState(false);

  const client = new ApiClient();

  const deleteSpot = () => {
    client
      .deleteSpot(`spots/delete/${props.id}`)
      .then((res) => {
        console.log("Deleting Spot");
        console.log(res.data);
        console.log("Resetting SwimSpots");
        setOpen(false);
        props.resetSwimSpots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();
  return (
    <Modal
      trigger={
        <i className={`trash alternate outline icon ${classes.delete}`}></i>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Delete Swim Spot</Modal.Header>
      <Modal.Description>
        <Modal.Content>
          Are you sure you want to delete this swim spot?
        </Modal.Content>
      </Modal.Description>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Delete"
          labelPosition="right"
          icon="checkmark"
          onClick={deleteSpot}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteSwim;
