import React from "react";
import { Grid2, Typography } from "@mui/material";
import "./homePage.css";
import { championshipVictories, maxWidth } from "./homePageConstant.js.js";
import soccerTrophies from "../../assets/soccerTrophie.png";
import _ from "lodash";

interface Props {}

const ChampionshipSection: React.FC<Props> = () => {
  return (
    <Grid2
      sx={{
        width: "100%",
        height: "100vh",
        background: "#5a5a5a40",
        zIndex: 200,
        position: "absolute",
        top: 0,
        left: 0,
      }}
      spacing={3}>
      <Grid2
        container
        id={"eventDispalyWrapper"}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          justifyContent: "center",
          marginBottom: "50px",
        }}>
        {/*Grid wrapper*/}
        <Grid2
          container
          sx={{
            maxWidth: maxWidth,
            width: "100%",
          }}>
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: "center" }}>
            <img
              style={{ width: "80px", height: "80px", marginBottom: "10x" }}
              src={soccerTrophies}
              alt="Logo"
            />
            <Typography variant={"h6"} sx={{ color: "#FFFFFF" }}>
              CHAMPIONSHIPS
            </Typography>
          </Grid2>

          <Grid2
            id={"teamResults"}
            size={{ xs: 12 }}
            sx={{
              marginTop: "15px",
              padding: { xs: "0px 20px", sm: "0px 15px", md: "0px 10px" },
            }}>
            <Grid2 container spacing={4} sx={{ justifyContent: "center" }}>
              {championshipVictories.map((championShip) => (
                <Grid2
                  size={{ xs: 5, sm: 3, md: 2 }}
                  sx={{
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}>
                  <Typography
                    variant={"body1"}
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#b10000",
                    }}>
                    {championShip?.tournamentName}
                  </Typography>
                  <Typography
                    variant={"body2"}
                    sx={{
                      fontSize: "12px",
                      fontWeight: 200,
                    }}>
                    {championShip?.location}
                  </Typography>
                  <Typography variant={"body1"}>
                    {_.join(championShip?.years, " | ")}
                  </Typography>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ChampionshipSection;
