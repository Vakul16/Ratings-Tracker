import React from "react";
// import PostData from "./PopupData";
import { Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import "./Popup.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  checkboxes: {
    height: "100%",
    width: "26px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  PopupContentMain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "76%",
    height: "100vh",
    // overflowY: "scroll",
    // "&::-webkit-scrollbar": {
    //   width: "3px",
    // },
    // "&::-webkit-scrollbar-track": {
    //   backgroundColor: "#e9e9ec",
    // },
    // "&::-webkit-scrollbar-thumb": {
    //   backgroundColor: "gray",
    // },
  },
});
const PopupContent = ({ handleChange, postData }) => {
  const classes = useStyles();
  return (
    <div className={classes.PopupContentMain}>
      {postData?.map((item) => (
        <Grid item>
          <Checkbox
            name={item.id}
            flexWrap
            className={classes.checkboxes}
            checked={item.value}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {item.name}
        </Grid>
      ))}
    </div>
  );
};
export default PopupContent;
