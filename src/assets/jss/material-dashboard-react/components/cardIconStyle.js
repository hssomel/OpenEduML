import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  grayColor,
  pinkCardHeader,
  primary1CardHeader,
  primary2CardHeader,
  primary3CardHeader,
  primary4CardHeader,
  primary5CardHeader,
} from "../../material-dashboard-react.js";

const cardIconStyle = {
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$pinkCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$primary1CardHeader,&$primary2CardHeader,&$primary3CardHeader,&$primary4CardHeader,&$primary5CardHeader":
      {
        borderRadius: "3px",
        backgroundColor: grayColor[0],
        padding: "8px",
        marginTop: "-20px",
        marginRight: "15px",
        float: "left",
      },
  },
  warningCardHeader,
  pinkCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  primary1CardHeader,
  primary2CardHeader,
  primary3CardHeader,
  primary4CardHeader,
  primary5CardHeader,
};

export default cardIconStyle;
