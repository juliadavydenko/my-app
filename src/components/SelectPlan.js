import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Toggle from "./Toggle";
import PlanIcon from "./PlanIcon";
import CardComponent from "./CardComponent";

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
          <CardComponent
            img="https://raw.githubusercontent.com/juliadavydenko/multistep-form-react-Frontend-Mentor-Challenge-/2862aa60ba7802591f315203fe2ae6e8187040f9/src/icons/icon-arcade.svg"
            title="Arcade"
            price="$9/mo"
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            img="https://raw.githubusercontent.com/juliadavydenko/multistep-form-react-Frontend-Mentor-Challenge-/2862aa60ba7802591f315203fe2ae6e8187040f9/src/icons/icon-advanced.svg"
            title="Advanced"
            price="$12/mo"
          />
        </Grid>
        <Grid item xs={4}>
          <CardComponent
            img="https://raw.githubusercontent.com/juliadavydenko/multistep-form-react-Frontend-Mentor-Challenge-/2862aa60ba7802591f315203fe2ae6e8187040f9/src/icons/icon-pro.svg"
            title="Pro"
            price="$15/mo"
          />
        </Grid>
      </Grid>
      <Toggle
        subscriptionPeriod={subscriptionPeriod}
        setSubscriptionPeriod={setSubscriptionPeriod}
      />
    </div>
  );
}
