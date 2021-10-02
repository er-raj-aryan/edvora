import React from "react";
import useStyle from "../../css/Component";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";

function Home() {
  const classes = useStyle();

  return (
    <div className={classes.home}>
      <Grid className={classes.homeItem1}>
        <img
          className={classes.homeImg}
          src="https://source.unsplash.com/1600x900/?nature,water"
          alt=""
        />
        <Grid className={classes.homeTextContainer}>
          <Typography variant="h5" color="initial" style={{ color: "white" }}>
            EDVORA
          </Typography>
          <Typography
            variant="subtitle2"
            color="initial"
            style={{ color: "white" }}
          >
            {" "}
            &nbsp;&nbsp; &nbsp;e-Learning Platform || Assigment
          </Typography>
          <Divider className={classes.aboutdivide} />

          <Typography
            variant="subtitle2"
            color="initial"
            style={{ color: "white" }}
          >
            Edvora is a long-term mission for the future of edtech plus in
            education, technology, finance, and enterprise.
          </Typography>
        </Grid>
        <div className={classes.homeBlend}></div>
      </Grid>
    </div>
  );
}

export default Home;
