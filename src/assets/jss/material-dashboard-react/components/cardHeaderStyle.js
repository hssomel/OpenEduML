import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  primary1CardHeader,
  primary2CardHeader,
  primary3CardHeader,
  primary4CardHeader,
  primary5CardHeader,
  roseCardHeader,
  whiteColor,
} from "../../material-dashboard-react.js";

const cardHeaderStyle = {
  cardHeader: {
    padding: "0.25rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$primary1CardHeader,&$primary2CardHeader,&$primary3CardHeader,&$primary4CardHeader,&$primary5CardHeader,&$roseCardHeader":
      {
        margin: "0 15px",
        padding: "0",
        position: "relative",
        color: whiteColor,
      },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0",
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$primary1CardHeader,&$primary2CardHeader,&$primary3CardHeader,&$primary4CardHeader,&$primary5CardHeader,&$roseCardHeader":
      {
        "&:not($cardHeaderIcon)": {
          borderRadius: "3px",
          marginTop: "-20px",
          padding: "10px",
        },
      },

    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px",
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px",
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right",
    },
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important",
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right",
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important",
    },
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$primary1CardHeader,&$primary2CardHeader,&$primary3CardHeader,&$primary4CardHeader,&$primary5CardHeader,&$roseCardHeader":
      {
        background: "transparent",
        boxShadow: "none",
      },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px",
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px",
    },
  },
  warningCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...warningCardHeader,
    },
  },
  successCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...successCardHeader,
    },
  },
  dangerCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...dangerCardHeader,
    },
  },
  infoCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...infoCardHeader,
    },
  },
  primaryCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...primaryCardHeader,
    },
  },
  roseCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...roseCardHeader,
    },
  },
  primary1CardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...primary1CardHeader,
    },
  },
  primary2CardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...primary2CardHeader,
    },
  },
  primary3CardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...primary3CardHeader,
    },
  },
  primary4CardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...primary4CardHeader,
    },
  },
  primary5CardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...primary5CardHeader,
    },
  },
};

export default cardHeaderStyle;
