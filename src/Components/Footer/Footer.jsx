import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles(() => ({
  root: {},
  container: {},
  item: {},
}));
function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container classsName={classes.container}>
        <Grid item className={classes.item}></Grid>
      </Grid>
    </div>
  );
}

export default Footer;
