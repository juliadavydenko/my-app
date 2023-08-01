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

const CardWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));
export default CardWrapper;
