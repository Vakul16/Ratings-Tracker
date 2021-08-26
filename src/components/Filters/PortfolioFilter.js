import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Popup from "./Popup/Popup";
// import Blink from "react-blink-text";
import Bounce from "react-reveal/Bounce";
import { Dialog } from "@material-ui/core";
import PostData from "./Popup/PopupData";
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 45,
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
  textField: {
    justifyContent: "center",
    paddingLeft: "15px",
    color: "red",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    width: 50,
    height: 45,
  },
  filBtn: {
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
    animation: "blink 1s linear infinite",
  },
  // textBlink: {
  //   // transform: "translate(-50%, -50%)",
  // },
  // textBlinkInner: {
  //   color: "#fff",
  //   animation: "blink 2s linear infinite",
  // },
  // "@keyframes textBlink": {
  //   "0%": { opacity: 0 },
  //   "50%": { opacity: 0.5 },
  //   "100%": { opacity: 1 },
  // },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  title: {
    marginLeft: 20,
    fontSize: 13,
    color: "#383e4c",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "75%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    background: "#8f95a3",
    marginTop: 18,
    borderRadius: 10,
  },
  btnBlinking: {
    width: "75%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    background: "#FF6666",
    marginTop: 18,
    borderRadius: 10,
  },
  region: {
    display: "flex",
    flexDirection: "row",
  },
}));
const PortfolioFilter = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [selected, setSelected] = React.useState(PostData);
  const [blink, setBlink] = React.useState(false);
  const handleChange = (event) => {
    // console.log(event);
    // let objIndex = selected.findIndex(
    //   (ele) => ele.id.toString() === event.target.name
    // );
    // console.log(objIndex);
    // PostData[objIndex].value = true;
    let newArray = selected.map((ele) =>
      ele.id.toString() === event.target.name
        ? { ...ele, value: !ele.value }
        : ele
    );
    setSelected(newArray);
    // setSelected({ ...selected, [event.target.name]: event.target.checked });
  };
  const [openPopup, setOpenPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      console.log(title);
    }
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  useEffect(() => {
    console.log(blink);
  }, [blink]);
  return (
    <>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>MY PORTFOLIO:</Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="portfolio-form"
        >
          <Grid className={classes.region}>
            <TextField
              className={classes.textField}
              onChange={(e) => setTitle(e.target.value)}
              // label="378"
              placeholder="378"
              color="secondary"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Typography className={classes.title}>East Region</Typography>
          </Grid>
          {blink ? (
            <Bounce bottom>
              <Button
                className={classes.btnBlinking}
                onClick={() => setOpenPopup(true)}
                type="submit"
                color="primary"
                variant="contained"
                // marginTop="10"
                endIcon={<KeyboardArrowRightIcon className={classes.arrow} />}
              >
                <Typography className={classes.filBtn}>
                  FILTER PROPERTIES
                </Typography>
              </Button>
            </Bounce>
          ) : (
            <Button
              className={classes.btn}
              onClick={() => setOpenPopup(true)}
              type="submit"
              color="primary"
              variant="contained"
              // marginTop="10"
              endIcon={<KeyboardArrowRightIcon className={classes.arrow} />}
            >
              <Typography className={classes.filBtn}>
                FILTER PROPERTIES
              </Typography>
            </Button>
          )}
        </form>
      </Grid>
      <Dialog
        open={openPopup}
        maxWidth="lg"
        aria-labelledby="customized-dialog-title"
      >
        <Popup
          setBlink={setBlink}
          postData={selected}
          handleChange={handleChange}
          close={handleClose}
        />
      </Dialog>
    </>
  );
};

export default PortfolioFilter;
