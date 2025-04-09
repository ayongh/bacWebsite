import { Grid2, Typography } from "@mui/material";
import React from "react";
import ImageCard from "../common/ImageCard.tsx";

interface Props {
  title: String;
  date: string;
  poster: string;
  onClick: Function;
}

const SmallNewsDisplay: React.FC<Props> = ({
  title,
  date,
  poster,
  onClick,
}) => {
  return (
    <Grid2
      container
      onClick={onClick}
      sx={{ "&:hover": { color: "rgb(177, 0, 0)", cursor: "pointer" } }}>
      <Grid2 size={{ xs: 12 }}>
        <ImageCard source={poster} width={"100%"} height={"198px"}></ImageCard>
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <Grid2 container>
          <Grid2 sx={{ display: "flex" }}>
            <Typography
              variant={"h6"}
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}>
              {title}{" "}
            </Typography>
          </Grid2>
        </Grid2>

        <Typography variant={"caption"} color={"textSecondary"}>
          Published: {date}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default SmallNewsDisplay;
