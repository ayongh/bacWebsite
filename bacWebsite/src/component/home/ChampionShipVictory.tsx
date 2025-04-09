import React from "react";
import { Grid2, Typography } from "@mui/material";
import "./homePage.css";

interface Props {
  tournamentName: string;
  location: number;
  years: string[];
}

const ChampionShipVictory: React.FC<Props> = ({
  tournamentName,
  location,
  years,
}) => {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12 }}>
        <Typography variant={"body2"}>{tournamentName}</Typography>
        <Typography variant={"body2"}>{location}</Typography>
        <Typography variant={"body2"}>{years}</Typography>
      </Grid2>
    </Grid2>
  );
};

export default ChampionShipVictory;
