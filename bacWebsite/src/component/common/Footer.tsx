import React from "react";
import { Grid2, IconButton, Typography } from "@mui/material";
import logo from "../../assets/bacLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import { facebookLink, instagramLink } from "../Data/socialMediaLinks";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, sm: 4 }}>
        <Grid2 container sx={{ textAlign: "left", justifyContent: "center" }}>
          <Grid2>
            <img
              style={{ width: "80px", height: "80px" }}
              src={logo}
              alt="Logo"
            />
          </Grid2>

          <Grid2 sx={{ marginLeft: "5px", marginTop: "8px" }}>
            <Typography
              variant={"body1"}
              sx={{ fontWeight: 600, color: "#FFFFFF" }}>
              BAC
            </Typography>
            <Typography
              variant={"body2"}
              sx={{
                marginTop: "0.5px",
                fontSize: "12px",
                color: "#FFFFFF",
              }}>
              BALTIMORE ATHLETIC CLUB
            </Typography>
            <Typography
              variant={"body2"}
              sx={{
                fontWeight: 400,
                fontSize: "9px",
                color: "#FFFFFF",
              }}>
              EST. 2008
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 4 }}
        sx={{
          textAlign: "center",
          marginTop: { xs: "30px", sm: "0px", md: "0px", lg: "0px" },
        }}>
        <Typography
          variant={"body1"}
          sx={{ fontWeight: 600, color: "#FFFFFF" }}>
          Contact
        </Typography>
        {/* <a href={"tel:+14109674095"} style={{ textDecoration: "none" }}>
          <Typography variant={"body2"} sx={{ color: "#FFFFFF" }}>
            +1 (410) 967-4095
          </Typography>
        </a> */}
        <a
          href="mailto:baltimoreathleticclub@gmail.com"
          style={{ textDecoration: "none" }}>
          <Typography variant={"body2"} sx={{ color: "#FFFFFF" }}>
            baltimoreathleticclub@gmail.com
          </Typography>
        </a>
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 4 }}
        sx={{ marginTop: { xs: "30px", sm: "0px", md: "0px", lg: "0px" } }}>
        <Grid2 container>
          <Grid2
            size={{ xs: 12 }}
            sx={{ justifyContent: "center", display: "flex" }}>
            <Typography
              variant={"body1"}
              sx={{ fontWeight: 600, color: "#FFFFFF" }}>
              Social Media
            </Typography>
          </Grid2>

          <Grid2
            size={{ xs: 12 }}
            sx={{ justifyContent: "center", display: "flex" }}>
            <Grid2 container spacing={2}>
              <Grid2>
                <IconButton onClick={() => window.open(facebookLink, "_blank")}>
                  <FacebookIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
              </Grid2>
              <Grid2>
                <IconButton
                  onClick={() => window.open(instagramLink, "_blank")}>
                  <InstagramIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        size={{ xs: 12 }}
        sx={{ justifyContent: "center", display: "flex", marginTop: "40px" }}>
        <Typography variant={"body2"} sx={{ color: "#FFFFFF" }}>
          Copyright © 2020 All Right Reserved.
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default Footer;
