import React from "react";
import { Card, Grid2, Typography } from "@mui/material";
import SectionLabel from "../common/SectionLabel.tsx";
import TrophiesCard from "./TrophiesCard.tsx";
import backgroundImage from "../../assets/backgroundRed.png";

interface Props {
  source: string;
  year: string;
  isOdd: boolean;
  description: string;
  trophies: [];
}
const HistoryCard: React.FC<Props> = ({
  source,
  year,
  isOdd,
  description,
  trophies,
}) => {
  return (
    <Grid2 container spacing={4}>
      <Grid2 size={{ xs: 12 }}>
        <Grid2
          container
          spacing={4}
          sx={{ background: "#FFFFFF", padding: "0px", margin: "0px" }}>
          {!isOdd && (
            <Grid2
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              sx={{ padding: "15px" }}>
              <Grid2 container>
                <Grid2 size={{ xs: 12 }}>
                  <SectionLabel title={year} isWhiteBackgrond={false} />
                </Grid2>

                <Grid2 size={{ xs: 12 }}>
                  <Typography variant={"body2"}>{description}</Typography>
                </Grid2>
              </Grid2>
            </Grid2>
          )}
          <Grid2
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            sx={{ overflow: "hidden" }}>
            <img
              src={source}
              alt="description"
              style={{
                width: "100%",
                height: "400px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </Grid2>

          {isOdd && (
            <Grid2
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              sx={{ padding: "15px" }}>
              <Grid2 container>
                <Grid2 size={{ xs: 12 }}>
                  <SectionLabel title={year} isWhiteBackgrond={false} />
                </Grid2>

                <Grid2 size={{ xs: 12 }}>
                  <Typography variant={"body2"}>{description}</Typography>
                </Grid2>
              </Grid2>
            </Grid2>
          )}
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <Grid2 container spacing={3}>
          {trophies.map((trophy) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <TrophiesCard source={trophy?.src} header={trophy?.name} />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default HistoryCard;
