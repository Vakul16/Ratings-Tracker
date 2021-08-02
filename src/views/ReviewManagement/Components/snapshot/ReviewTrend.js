import React from "react";
import AreaGraph from "components/GraphsNew/Area/index";
import * as constant from "views/ReviewManagement/constant";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import Radio from "components/form/RadioButton/SimpleRadio";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "15px",
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: "3%",
    color: "red",
  },
  areaGraph: {
    backgroundColor: "#fff",
    borderRadius: "6px",
  },
  exam: {
    color: "#fff",
    backgroundColor: "#4f5b75",
    borderRadius: "5px",
  },
  divide: {
    backgroundColor: "gray",
  },
}));
export default function ReviewTrend({
  // reviewTrendData,
  // filterSelected,
  backgroundColor,
  setFilterSelected,
  filterData,
  ...props
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      style={{
        height: 340,
      }}
    >
      <Grid
        className={classes.exam}
        container
        item
        xs={3}
        direction="column"
        justifyContent="flex-start"
        style={{ paddingTop: 12 }}
      >
        {filterData?.map((item) => (
          <Grid key={item.label} item>
            <Radio
              isChecked={item.value}
              label={item.label}
              // value="1"
              additionalStyles={{
                color: "#fff",
                height: "16px",
              }}
              labelStyles={{
                fontSize: 12,
              }}
              handleChange={(data) => {
                setFilterSelected(item.id);
              }}
            />
            <Divider className={classes.divide} variant="middle" />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={9}>
        {constant?.RatingGraph == null ? (
          <Box
            flexWrap="wrap"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className={classes.title}> No Records Found</Typography>
          </Box>
        ) : (
          <Box mt={0} pl={0.7} pr={0} mb={0}>
            <AreaGraph
              className={classes.areaGraph}
              graphData={constant?.RatingGraph.graphs}
              mainData={constant?.RatingGraph.inputData.data}
              style={backgroundColor && { backgroundColor }}
              height={340}
              {...props}
              // width={52}
              AdditonalLegendsStyles={{
                marginTop: 10,
                marginLeft: 40,
              }}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

ReviewTrend.propTypes = {
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ReviewTrend.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: "clicked",
};
