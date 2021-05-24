import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import ProcessModal from "components/Pricing/addlComponents/ProcessModal";
import InfoArea from "components/proTheme/InfoArea/InfoArea.js";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
import pricingStyle2 from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";
const useStyles = makeStyles(pricingStyle);
const useStyles3 = makeStyles(pricingStyle2);

const SwitchTier = ({ currentUser }) => {
  const classes = useStyles();
  const classes3 = useStyles3();
  // STATE
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState(currentUser.tier);
  const [price, setPrice] = useState("0");
  const [buttonColor, setButtonColor] = useState("lightgray");
  // EVENT HANDLERS ------------------------------------------->
  const openModal = () => {
    if (buttonColor !== "lightgray") setModalOpen(!modalOpen);
  };

  const handleButtonChange = (event) => {
    const { value } = event.target;
    setValue(value);
    if (value === "free") setPrice("0");
    else if (value === "plus") setPrice("10");
    else setPrice("30");
    if (value !== currentUser.tier) setButtonColor("#f6a4eb");
    else setButtonColor("lightgray");
  };
  // ---------------------------------------------------------
  return (
    <>
      <h1 className={classes3.cardTitle} style={{ paddingTop: 0, marginTop: 0, marginBottom: "5px" }}>
        <small>$</small>
        {price}
        <small>/{"MO."}</small>
      </h1>
      {modalOpen && <ProcessModal modalOpen={modalOpen} onClick={openModal} />}
      <FormControl
        component="div"
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <InfoArea
          title="Select to update your current tier"
          description="Please add a payment method before processing"
          icon={TrackChangesIcon}
          second
          iconColor="info"
        />
        <RadioGroup row aria-label="tiers" name="tierSelect" value={value} onChange={handleButtonChange}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <FormControlLabel value="free" control={<Radio />} label="Free" />
            <FormControlLabel value="plus" control={<Radio />} label="Plus" />
            <FormControlLabel value="pro" control={<Radio />} label="Pro" />
          </div>
        </RadioGroup>

        <Button
          variant="contained"
          className={classes.tabButtons}
          onClick={openModal}
          style={{
            backgroundColor: buttonColor,
            color: "white",
            width: "70%",
            alignSelf: "center",
            marginTop: 32,
          }}
        >
          Process Change
        </Button>
      </FormControl>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SwitchTier);
