import React from "react";
import { Grid2 } from "@mui/material";
import BodyWrapper from "../common/BodyWarpper.tsx";
import HistoryCard from "./HistoryCard.tsx";
import teamImage from "../../assets/teamImage.jpg";
import { historyInfo } from "../Data/historyData.ts";

interface Props {}

const HistoryPage: React.FC<Props> = () => {
  return (
    <BodyWrapper
      title={"HISTORY"}
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
          {/*2008 container*/}
          {historyInfo.map((info) => (
            <Grid2 size={{ xs: 12 }}>
              <HistoryCard
                source={info?.src}
                year={info?.year}
                isOdd={info?.isOdd}
                description={info?.description}
                trophies={info?.trophies}
              />
            </Grid2>
          ))}
        </Grid2>
      }
    />
  );
};

export default HistoryPage;
