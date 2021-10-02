import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import useStyle from "../../css/Component";

function About() {
  const classes = useStyle();
  return (
    <div className={classes.about}>
      <Grid className={classes.aboutItem1}>
        <img
          className={classes.aboutImg}
          src="https://source.unsplash.com/1600x900/?nature,water"
          alt=""
        />
        <Grid className={classes.aboutTextContainer}>
          <Typography variant="h5" color="initial" style={{ color: "#7c9fad" }}>
            ABOUT ASSIGMENT
          </Typography>
          <Divider className={classes.aboutdivide} />
          <Typography
            variant="subtitle2"
            color="initial"
            style={{ color: "grey" }}
          >
             The main aim of assigment to develop a font-end with the help any technology ans intigrate the <strong>Pokemon</strong> API and fetch the data.
          </Typography>
          <br/>
          <Typography variant="h5" color="initial" style={{ color: "#7c9fad" }}>
          Technology Used in this Assigment:-
          </Typography>
          <Divider className={classes.aboutdivide} />
          <Typography
            variant="body1"
            color="initial"
            style={{ color: "grey",padding:'5px' }}
          >
             React, Material-UI, React-Router-Dom, Axios, PokemonAPI, Firebase, HTML, CSS, Javascript
          </Typography>
          <Typography variant="h5" color="initial" style={{ color: "#7c9fad" }}>
            Let's Talk
          </Typography>
          <Divider className={classes.aboutdivide} />
          <Typography
            variant="body1"
            color="initial"
            style={{ color: "grey",padding:'5px' }}
          >
             +918102903831
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            style={{ color: "grey",padding:'5px' }}
          >
             raj267447@gmail.com
          </Typography>
        </Grid>
        <div className={classes.aboutBlend}></div>
      </Grid>
    </div>
  );
}

export default About;
