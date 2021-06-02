import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = (props) => {
  const { onCloseFunction, open, message, header } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={onCloseFunction}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseFunction} style={{ color: "#dc3545" }} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
