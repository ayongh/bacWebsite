import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid2, Typography } from "@mui/material";

export default function BANAElectioninfo({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ zIndex: 10000000000000 }}>
        <Grid2 container sx={{ marginTop: "30px" }}>
          <Grid2
            item
            size={{ xs: 12 }}
            sx={{ justifyContent: "center", display: "flex" }}>
            <img
              style={{ width: "150px" }}
              src="https://bac-media-storage.s3.us-east-1.amazonaws.com/BANA-LOGO-FINAL-300x300.png"
            />
          </Grid2>
        </Grid2>
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
          BANA Election
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The Baltimore Athletic Club extends its best wishes to all running
            teams for the upcoming BANA election.{" "}
          </DialogContentText>
          <Grid2 container sx={{ margin: "10px 0px" }}>
            <Grid2 item size={{ xs: 12 }} sx={{ marginBottom: "5px" }}>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Election Details:
              </Typography>
            </Grid2>
            <Grid2 item size={{ xs: 12 }}>
              <Typography variant="body2">
                <span style={{ fontWeight: 700 }}>Date:</span> Sunday, April 6,
                2025
              </Typography>
            </Grid2>
            <Grid2 item size={{ xs: 12 }}>
              <Typography variant="body2">
                <span style={{ fontWeight: 700 }}>Time:</span> 8:00 Am - 5:00 PM
              </Typography>
            </Grid2>
            <Grid2 item size={{ xs: 12 }}>
              <Typography variant="body2">
                <span style={{ fontWeight: 700 }}>Location:</span> 2501 Putty
                Hill Ave, Parkville, MD 21234
              </Typography>
            </Grid2>
          </Grid2>
          <DialogContentText id="alert-dialog-description">
            Best of luck to all candidates!{" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
