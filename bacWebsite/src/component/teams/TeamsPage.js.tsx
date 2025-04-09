import React from "react";
import { Grid2, Typography } from "@mui/material";
import BodyWrapper from "../common/BodyWarpper.tsx";
import PlayerCard from "../common/PlayerCard.tsx";
import {
  defender,
  forward,
  goalKeepers,
  midfilder,
  playerList,
} from "../home/homePageConstant.js.js";

interface Props {}

const TeamsPage: React.FC<Props> = () => {
  return (
    <BodyWrapper
      title={"Roster"}
      body={
        <Grid2
          container
          spacing={4}
          sx={{
            padding: {
              xs: "0px 20px",
              sm: "0px 20px",
              md: "0px 20px",
              lg: "0px 0px",
            },
          }}>
          <Grid2 size={{ xs: 12 }}>
            <Grid2 container spacing={3}>
              {playerList.map((player) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                  <PlayerCard
                    firstName={player?.firstName}
                    lastName={player?.lastName}
                    position={player?.position}
                    jerseyNumber={player?.jerseyNumber.toString()}
                    src={player?.imageURL}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      }
    />
  );
};

export default TeamsPage;
