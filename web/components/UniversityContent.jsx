import React from "react";
import { Typography, Card, CardHeader, CardContent } from "@mui/material";

const UniversityContent = ({
  universityName,
  country,
  description,
  website,
  location,
  currency,
  language,
  population,
}) => {
  const cardContentStyle = {
    paddingTop: 10,
    paddingBottom: 10,
  };

  const cardStyle = {
    width: "100%",
    minHeight: "60vh",
    mb: 1,
  };

  return (
    <Card sx={cardStyle}>
      <CardHeader
        style={cardContentStyle}
        title={
          <div style={{ fontSize: 16 }}>
            <b>{universityName}</b>
          </div>
        }
      />
      <CardContent style={cardContentStyle}>
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>

        <Typography mt={2} variant="body2" color="text.primary">
          Website: {website}
        </Typography>

        <Typography mt={2} variant="body2" color="text.primary">
          Location: {location}
        </Typography>

        <Typography mt={2} variant="body2" color="text.primary">
          Country´s: {country}
        </Typography>

        <Typography mt={2} variant="body2" color="text.primary">
          Currency: {currency}
        </Typography>

        <Typography mt={2} variant="body2" color="text.primary">
          Language: {language}
        </Typography>

        <Typography mt={2} variant="body2" color="text.primary">
          Population: {population}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UniversityContent;
