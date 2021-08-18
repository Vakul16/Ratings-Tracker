import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import ReviewTrend from "views/ReviewManagement/Components/snapshot/ReviewTrend";
import BoxLayout from "views/ReviewManagement/Components/Layouts/BoxLayout";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  //   root: {
  //     height: 180,
  //     position: "relative",
  //   },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  expandMore: {
    color: "#fff",
  },
  expandLess: { color: "#fff" },
  arrow: {
    // display: "flex",
    position: "absolute",
    top: "180px",
    right: "360px",
  },
}));

export default function MaterialAnimation() {
  const classes = useStyles();
  //   const [checked, setChecked] = React.useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [radioData, setRadioData] = useState([
    {
      id: 1,
      value: false,
      label: "Average Star Rating",
    },
    {
      id: 2,
      value: true,
      label: "Number of Reviews",
    },
    {
      id: 3,
      value: false,
      label: "Number of Responses",
    },
    {
      id: 4,
      value: false,
      label: "Responses Pending Approval",
    },
    {
      id: 5,
      value: false,
      label: "Problem Responses",
    },
  ]);
  const handleRadioChange = (e) => {
    console.log(e);
    let newRadioData = radioData.map((item) => {
      if (item.id === e) {
        item.value = true;
        return item;
      } else {
        item.value = false;
        return item;
      }
    });
    setRadioData(newRadioData);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Fade in={setOffsetY} timeout={0}>
          <Paper elevation={0}>
            <BoxLayout label="Review Trends">
              <div button onClick={handleClick} className={classes.arrow}>
                {open ? (
                  <ExpandLess className={classes.expandLess} />
                ) : (
                  <ExpandMore className={classes.expandMore} />
                )}
              </div>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <div component="div" disablePadding>
                  <ReviewTrend
                    filterData={radioData}
                    setFilterSelected={handleRadioChange}
                  />
                </div>
              </Collapse>
            </BoxLayout>
          </Paper>
        </Fade>
        <Fade
          in={offsetY}
          timeout={{
            enter: 2000,
            exit: 1000,
          }}
        >
          <Paper elevation={0}>
            <BoxLayout label="Review Trends">
              <ReviewTrend
                filterData={radioData}
                setFilterSelected={handleRadioChange}
              />
            </BoxLayout>
          </Paper>
        </Fade>
        <Fade
          in={offsetY}
          timeout={{
            enter: 4000,
            exit: 200,
          }}
        >
          <Paper elevation={0}>
            <BoxLayout label="Review Trends">
              <ReviewTrend
                filterData={radioData}
                setFilterSelected={handleRadioChange}
              />
            </BoxLayout>
          </Paper>
        </Fade>
        <Fade
          in={offsetY}
          timeout={{
            enter: 6000,
            exit: 100,
          }}
        >
          <Paper elevation={0}>
            <BoxLayout label="Review Trends">
              <ReviewTrend
                filterData={radioData}
                setFilterSelected={handleRadioChange}
              />
            </BoxLayout>
          </Paper>
        </Fade>
      </div>
    </div>
  );
}
