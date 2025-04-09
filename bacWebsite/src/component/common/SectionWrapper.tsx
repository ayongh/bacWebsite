import React from "react";
import { Grid2 } from "@mui/material";
import { maxWidth } from "../home/homePageConstant.js.js";
import SectionLabel from "./SectionLabel.tsx";
import sectionBackground from "../../assets/backgroundWhite.png";

interface Props {
  title: String;
  isWhiteBackground: boolean;
  sectionComponent: React.ReactNode;
}

const SectionWrapper: React.FC<Props> = ({
  title,
  isWhiteBackground,
  sectionComponent,
  style = {},
}) => {
  return (
    <Grid2
      size={{ xs: 12 }}
      sx={{
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        padding: "60px 0px",
        ...style,
      }}>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          maxWidth: maxWidth,
          padding: { xs: "0px 20px", sm: "0px 15px", md: "0px 10px" },
        }}>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }}>
            <SectionLabel title={title} isWhiteBackgrond={isWhiteBackground} />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>{sectionComponent}</Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SectionWrapper;
