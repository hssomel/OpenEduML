import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import StripeAddCard from "components/Pricing/Sections/StripeAddCard";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: "transparent",
    border: "none",
    padding: theme.spacing(2, 4, 3),
  },
}));

const StripeModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        open={props.modalOpen}
        onClose={props.onClick}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <StripeAddCard />
        </div>
      </Modal>
    </div>
  );
};

export default StripeModal;
