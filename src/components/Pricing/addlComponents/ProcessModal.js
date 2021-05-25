import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import featuresStyle from "assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js";

const useStyles2 = makeStyles(featuresStyle);

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
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProcessModal = (props) => {
  const classes = useStyles();
  const classes2 = useStyles2();
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
          <h4 className={classes2.title}>Please add a payment method</h4>
        </div>
      </Modal>
    </div>
  );
};

export default ProcessModal;
