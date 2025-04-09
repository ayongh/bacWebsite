import { motion } from "framer-motion";
import React from "react";
import { Card, Grid2, Typography } from "@mui/material";
import SectionLabel from "../common/SectionLabel.tsx";
import ImageCard from "../common/ImageCard.tsx";

interface Props {
  source: string;
  header: string;
  description: string;
}
const TrophiesCard: React.FC<Props> = ({ source, header, description }) => {
  return (
    <Grid2 container direction={"column"}>
      <Grid2 size={{ xs: 12 }}>
        <ImageCard
          source={source}
          width={"100%"}
          height={"150px"}
          style={{ objectFit: "cover" }}
        />
      </Grid2>
      <Card sx={{ background: "#FFFFFF" }}>
        <Grid2 size={{ xs: 12 }} sx={{ padding: "10px" }}>
          <Typography variant={"h6"}>{header}</Typography>
        </Grid2>
      </Card>
    </Grid2>
  );
};

export default TrophiesCard;
