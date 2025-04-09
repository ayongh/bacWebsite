import { Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ImageCard from "../common/ImageCard.tsx";

interface Props {
  title: String;
  date: boolean;
  poster: string;
  onClick: Function;
}

const LargeNewsDisplay: React.FC<Props> = ({
  title,
  date,
  poster,
  onClick,
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid2
      container
      sx={{ "&:hover": { color: "rgb(177, 0, 0)", cursor: "pointer" } }}
      onClick={onClick}>
      <Grid2 size={{ xs: 12 }}>
        <ImageCard
          source={poster}
          width={"100%"}
          height={isMd ? "500px" : isSm ? "200px" : "500px"}
          style={{ objectFit: "cover" }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{ marginTop: "10px" }}>
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
              {title}
            </Typography>
          </Grid2>
        </Grid2>

        <Typography variant={"body1"} color={"textSecondary"}>
          Published: {date}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default LargeNewsDisplay;
