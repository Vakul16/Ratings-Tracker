import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {},
  root: {
    height: 160,
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: "10px",
    paddingLeft: 10,
    paddingRight: 10,
  },
  percent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontSize: 30,
    color: "#e2e2e2",
    fontWeight: 800,
  },
  rating: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  rated: {
    fontSize: "50px",
    color: "#c2302a",
    fontWeight: 600,
    marginTop: "16px",
    marginBottom: "12px",
  },
  overAllRating: {
    color: "#2f3f5f",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: "0px",
  },
  reviews: {
    color: "#2f3f5f",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: 10,
  },
  rate: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#8f95a3",
  },
  progressBar: {
    color: "#0fa9de",
    // color: theme.palette.grey[theme.palette.type === "light" ? 100 : 700],
    marginBottom: "10px",
  },
  divider: {
    backgroundColor: "lightgray",
    marginTop: "5px",
    height: "150px",
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

export default function StarRating({
  StarRatingData,
  backgroundColor,
  label,
  ratingNum,
  ...props
}) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  console.log(progress);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 0 ? 125 : prevProgress));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function CircularProgressWithLabel() {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={125}
          size="5.5rem"
          className={classes.progressBar}
          thickness={2.5}
          // backgroundColor="red"
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={80}
          thickness={4}
          {...props}
        />
        <Box
          top={0}
          left={0}
          bottom={10}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          {...props}
        >
          <Typography
            variant="caption"
            component="div"
            // color="textSecondary"
            className={classes.rate}
          >
            {ratingNum}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Grid
      xs={12}
      className={classes.root}
      style={backgroundColor && { backgroundColor }}
    >
      <Grid xs={8} className={classes.percent}>
        <CircularProgressWithLabel />
        <Typography className={classes.overAllRating}>
          {label}
          OVERALL RATING
        </Typography>
      </Grid>
      <Divider
        className={classes.divider}
        orientation="vertical"
        variant="middle"
        flexItem
        {...props}
      />
      <Grid xs={4} className={classes.rating}>
        <Typography className={classes.rated}>14</Typography>
        <Typography className={classes.reviews}> REVIEWS RECEIVED</Typography>
      </Grid>
    </Grid>
  );
}

StarRating.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  ratingNum: PropTypes.number.isRequired,
  /**
   *
   * Optional click handler
   */
  // onClick: PropTypes.func,
};
StarRating.defaultProps = {
  backgroundColor: null,
  // primary: false,
  size: "medium",
  // onClick: "clicked",
  label: "",
};
