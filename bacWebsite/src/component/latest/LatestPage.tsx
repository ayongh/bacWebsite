import React from "react";
import { Grid2 } from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import BodyWrapper from "../common/BodyWarpper.tsx";

interface Props {}

const LatestPage: React.FC<Props> = () => {
  return (
    <BodyWrapper
      title={"Latest"}
      body={
        <></>
      }
    />
  );
};

export default LatestPage;
