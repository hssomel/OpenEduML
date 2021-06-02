import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

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
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            padding: "10px 5px 0px 5px",
            minWidth: 360,
          }}
        >
          {/* <DialogTitle id="alert-dialog-title">{header}</DialogTitle> */}
          {message && message.type === "success" && (
            <CheckCircleIcon
              style={{
                color: "lawngreen",
                alignSelf: "center",
                marginBottom: 10,
                height: 36,
                width: 36,
              }}
            />
          )}
          {message && message.type === "error" && (
            <ErrorIcon
              style={{
                color: "#dc3546",
                alignSelf: "center",
                marginBottom: 10,
                height: 36,
                width: 36,
              }}
            />
          )}
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              style={{ fontWeight: 300, color: "black" }}
            >
              {message ? message.message : null}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseFunction} style={{ color: "#dc3545" }} autoFocus>
              Accept
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
