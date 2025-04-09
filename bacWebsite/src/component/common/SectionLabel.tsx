import React from "react";
import { Grid2, Typography } from "@mui/material";

interface Props {
  title: String;
  isWhiteBackgrond: boolean;
}

const SectionLabel: React.FC<Props> = ({ title, isWhiteBackgrond }) => {
  return (
    <Grid2 container>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#b10000",
            width: "5px",
            height: "15px",
            marginRight: "5px",
          }}
        ></div>
        <Typography variant={"h6"}>{title}</Typography>
      </Grid2>
    </Grid2>
  );
};

export default SectionLabel;
