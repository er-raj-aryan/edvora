import { AppBar, Toolbar, Typography } from "@mui/material";
import useStyle from "../../css/Component";
import React from "react";
import { Link , useHistory} from "react-router-dom";
import  navbarData  from "../../Data/WebsiteData";

function Navbar() {
    const history = useHistory();
    const classes = useStyle();
  
    const handleOnClick = () =>{
      history.push('/')
    }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="sticky" color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography onClick={handleOnClick} variant="h5" color="secoundry">
            EDVORA
          </Typography>
          <Typography variant="h6">
            {navbarData.map((e) => {
              return (
                <Link to={e.link} key={e.id} className={classes.link}>
                  {e.name}
                </Link>
              );
            })}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
