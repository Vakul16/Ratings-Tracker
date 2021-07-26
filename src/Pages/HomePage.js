import React from "react";
import TabContainer from "../components/TabContainer";
import Filter from "components/Filter";
import { Grid } from "@material-ui/core";
// import ReviewManagemnt from "views/ReviewManagement/Components/innerRoute";
const HomePage = () => {
  return (
    <Grid container className="home" item xs={12}>
      <Grid item xs={9}>
        <TabContainer />
      </Grid>
      <Grid item xs={3}>
        <Filter />
      </Grid>
    </Grid>
  );
};

export default HomePage;
