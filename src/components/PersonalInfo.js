import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../index.css";

export default function PersonalInfo() {
  const boldStyles = {
    textAlign: "center",
    fontWeight: 700,
    fontFamily: "Ubuntu, sans-serif",
  };
  const mediumStyles = {
    textAlign: "center",
    fontWeight: 500,
    fontFamily: "Ubuntu, sans-serif",
  };
  const normalStyles = {
    textAlign: "center",
    fontWeight: 400,
    fontFamily: "Ubuntu, sans-serif",
  };
  return (
    <React.Fragment>
      <Typography sx={boldStyles} variant="h4" color="rgb(2,30,78)">
        Personal Info
      </Typography>
      <Typography variant="body1" color="hsl(231, 11%, 63%)">
        Please provide your name, email address and phone number.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Vanessa Mint"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="vanessamint@"
            fullWidth
            autoComplete="personal info-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phonenumber"
            name="phonenumber"
            label="e.g. +1 234 567 890"
            fullWidth
            autoComplete="personal info--line2"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
