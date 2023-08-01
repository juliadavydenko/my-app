import React from "react";
import CardWrapper from "./CardWrapper";
import Typography from "@mui/material/Typography";

function CardComponent({ title, img }) {
  return (
    <CardWrapper elevation={3}>
      <Typography variant="h5" color="rgb(2,30,78)">
        <img src={img} alt="Card Image" />
        {title}
      </Typography>
      <Typography variant="body1">9$/mo {title}</Typography>
    </CardWrapper>
  );
}

export default CardComponent;
