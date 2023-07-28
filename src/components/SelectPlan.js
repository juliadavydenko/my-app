import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Toggle from "./Toggle";
import ArcadeIcon from "./ArcadeIcon";

export default function SelectPlan() {
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
  const CardWrapper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }));

  const CardComponent = ({ title }) => {
    const boldStyles = {
      textAlign: "center",
      fontWeight: 700,
      fontFamily: "Ubuntu, sans-serif",
    };
    return (
      <CardWrapper elevation={3}>
        <ArcadeIcon width="40" height="40" />
        <Typography variant="h5" color="rgb(2,30,78)">
          {title}
        </Typography>
        <Typography variant="body1">9$/mo {title}</Typography>
      </CardWrapper>
    );
  };

  const [subscriptionPeriod, setSubscriptionPeriod] = React.useState("monthly");

  return (
    <div>
      <Typography sx={boldStyles} variant="h4" color="rgb(2,30,78)">
        Select your plan
      </Typography>
      <Typography variant="body1" color="hsl(231, 11%, 63%)">
        You have the option of monthly or yearly billing.
      </Typography>
      {/* ... (rest of the code) */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardComponent title="Arcade" />
        </Grid>
        <Grid item xs={4}>
          <CardComponent title="Advance" />
        </Grid>
        <Grid item xs={4}>
          <CardComponent title="Pro" />
        </Grid>
      </Grid>
      <Toggle
        subscriptionPeriod={subscriptionPeriod}
        setSubscriptionPeriod={setSubscriptionPeriod}
      />
    </div>
  );
}
