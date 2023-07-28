import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const Toggle = ({ subscriptionPeriod, setSubscriptionPeriod }) => {
  const handleSubscriptionPeriodChange = (event, newPeriod) => {
    if (newPeriod !== null) {
      setSubscriptionPeriod(newPeriod);
    }
  };

  return (
    <div>
      <ToggleButtonGroup
        value={subscriptionPeriod}
        exclusive
        onChange={handleSubscriptionPeriodChange}
        sx={{ mt: 2 }}
      >
        <ToggleButton value="monthly">Monthly</ToggleButton>
        <ToggleButton value="yearly">Yearly</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Toggle;
