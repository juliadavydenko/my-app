import React from "react";
import CardWrapper from "./CardWrapper";
import Typography from "@mui/material/Typography";

function CardComponent({ title, img, price }) {
  return (
    <CardWrapper elevation={3}>
      <Typography>
        <img
          sx={{ padding: "50px 10px 10px 50px" }}
          src={img}
          alt="Card Image"
        />
        <Typography variant="h5" color="rgb(2,30,78)">
          {title}
        </Typography>
      </Typography>
      <Typography variant="body1" color="hsl(231, 11%, 63%)">
        {price}
      </Typography>
    </CardWrapper>
  );
}

export default CardComponent;
