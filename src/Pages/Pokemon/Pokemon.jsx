import React, { useEffect, useState } from "react";
import useStyle from "../../css/Component";
// import axios from "../../API/axios";
import axios from "axios";
import { Grid } from "@mui/material";
import MediaCard from "./Card/Card";

function Pokemon() {
  const classes = useStyle();
  const [choosePokemon, setChoosePokemon] = useState([]);

  useEffect(() => {
    async function apiData(Data) {
      await axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
        setChoosePokemon(res.data.results);
      });
    }
    apiData();
  }, []);

  const name = choosePokemon;
  console.log(name);

  return (
        <Grid container spacing={2}  className={classes.pokemon}>
          {name.map((e) => {
            return (
              <Grid item key={e.name} xs={12} sm={8} md={6} lg={3} className={classes.pokemonCard}>
                <MediaCard
                  img={`https://source.unsplash.com/1600x900/?pokemon`}
                  imgName={e.name}
                  Name={e.name}
                />
              </Grid>
            );
          })}
        </Grid>
  );
}

export default Pokemon;
