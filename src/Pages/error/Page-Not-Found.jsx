import React from "react";
import "./Page-Not-Found.css";
import { Grid, CardMedia, Typography, Button } from "@mui/material";
import useStyle from "../../css/Component";
import { useHistory } from "react-router-dom";

function PAGE_NOT_FOUND() {
  const history = useHistory();
  const classes = useStyle();

  const handleOnClick = () => {
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.imgItem}>
          <CardMedia
            className={classes.img}
            title=""
            image="https://images.unsplash.com/photo-1508943523738-f3e190e2d047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80"
          />
        </Grid>
        <Grid item className={classes.text_container}>
          <Typography className={classes.error} variant="h2" color="initial">
            {" "}
            404 Page NOt Found
          </Typography>
          <Button
            className={classes.btn}
            onClick={handleOnClick}
            variant="contained"
            color="success"
          >
            Back to home
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default PAGE_NOT_FOUND;
