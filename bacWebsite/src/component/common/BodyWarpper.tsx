import { Grid2, Typography } from "@mui/material";
import React from "react";
import { maxWidth } from "../home/homePageConstant.js.js";
import Footer from "./Footer.tsx";

interface Props {
  title: string;
  body: React.ReactNode;
}

const BodyWrapper: React.FC<Props> = ({ title, body }) => {
  return (
    <Grid2
      container
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
        background: "#f6f6f6",
      }}>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          height: "150px",
        }}></Grid2>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          maxWidth: maxWidth,
        }}>
        <Typography
          variant={"h6"}
          sx={{
            fontSize: "35px",
            fontWeight: 700,
            color: "#c61d23",
            marginBottom: "20px",
          }}>
          {title}
        </Typography>
      </Grid2>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          maxWidth: maxWidth,
        }}>
        {body}
      </Grid2>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          padding: "60px 0px",
          background: "#14213D",
          marginTop: "60px",
        }}>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            padding: { xs: "0px 20px", sm: "0px 15px", md: "0px 10px" },
          }}>
          <Footer />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default BodyWrapper;
