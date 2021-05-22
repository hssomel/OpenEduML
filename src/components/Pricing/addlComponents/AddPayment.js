import React from "react";
import Button from "@material-ui/core/Button";
import ErrorIcon from "@material-ui/icons/Error";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import InfoArea from "components/proTheme/InfoArea/InfoArea.js";

const AddPayment = (props) => {
  return (
    <>
      <Button
        variant={"outlined"}
        onClick={props.onClick}
        style={{
          backgroundColor: "transparent",
          minHeight: 80,
          width: "60%",
          margin: "5px 0px 10px 0px",
          borderColor: "#DCDCDC",
          borderWidth: 3,
          color: "black",
        }}
      >
        <AddCircleOutlineIcon style={{ color: "#1d8cf8" }} />
        Add a Payment Method
      </Button>

      <hr style={{ width: "80%" }} />
      <InfoArea
        title="No payment methods found"
        description="Please add a payment method to change your subscription plan"
        icon={ErrorIcon}
        iconColor="danger"
      />
    </>
  );
};

export default AddPayment;
