import { Grid, makeStyles, Box } from "@material-ui/core";
import React from "react";
import starIcon from "./starIcon.png";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    borderRadius: "15px",
    marginBottom: 10,
    backgroundColor: "#2b3b5c",
    padding: "8px",
    boxShadow: "0 5px 8px 2px rgba(0,0,0,0.1)",
  },
  mainGridWhite: {
    borderRadius: "15px",
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: "8px",
    boxShadow: "0 5px 8px 2px rgba(0,0,0,0.1)",
  },
  innerTypographyDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dataText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    padding: "10px 20px",
  },
  dataTextWhite: {
    color: "#8f95a3",
    fontSize: 16,
    fontWeight: 500,
    padding: "10px 12px",
  },
  starIconImg: {
    height: 25,
    width: 25,
    borderRadius: "5px",
    paddingLeft: "9px",
    paddingTop: "4px",
    paddingBottom: "1px",
    backgroundColor: "#2b3b5c",
    "& img": {
      maxWidth: "60%",
    },
  },
  expandCollapse: {
    color: "#fff",
  },
  expandCollapseWhite: {
    color: "#2b3b5c",
  },
}));

export default function BoxLayout(props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();

  const { children, label, white } = props;

  return (
    <Grid className={white ? classes.mainGridWhite : classes.mainGrid}>
      <div className={classes.innerTypographyDiv}>
        {white ? (
          <div className={classes.starIconImg}>
            <img src={starIcon} alt="Img" />
          </div>
        ) : null}

        <Box className={white ? classes.dataTextWhite : classes.dataText}>
          {label}
        </Box>
        <div
          button
          onClick={handleClick}
          className={
            white ? classes.expandCollapseWhite : classes.expandCollapse
          }
        >
          {open ? (
            <ExpandLess className={classes.expandLess} />
          ) : (
            <ExpandMore className={classes.expandMore} />
          )}
        </div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </Grid>
  );
}
