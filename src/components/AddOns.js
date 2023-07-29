import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const AddOnsRoot = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
}));

const AddOns = ({ plan, price, features, buttonText }) => {
  const boldStyles = {
    textAlign: "center",
    fontWeight: 700,
    fontFamily: "Ubuntu, sans-serif",
  };
  return (
    <AddOnsRoot>
      <Typography sx={boldStyles} variant="h4" color="rgb(2,30,78)">
        Pick add-ons
      </Typography>
      <Typography variant="body1" color="hsl(231, 11%, 63%)">
        Add-ons help enhance your gaming experience.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {plan}
      </Typography>
      <Typography variant="h3" component="h3" gutterBottom>
        ${price}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {features}
      </Typography>
      <Button variant="contained" color="primary">
        {buttonText}
      </Button>
    </AddOnsRoot>
  );
};

export default AddOns;
