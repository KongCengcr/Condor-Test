import React from "react";
import {
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

import { yellow, grey } from "@mui/material/colors";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";

const UniversityCard = ({ universityName, country, description }) => {
  const cardContentStyle = {
    paddingTop: 10,
    paddingBottom: 10,
  };

  const cardStyle = {
    width: "100%",
    mb: 1,
  };

  return (
    <Card sx={cardStyle}>
      <CardHeader
        style={cardContentStyle}
        action={
          <>
            <IconButton aria-label="settings">
              <StarIcon fontSize="small" sx={{ color: yellow[700] }} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <OpenInNewIcon fontSize="small" sx={{ color: grey[500] }} />
            </IconButton>
          </>
        }
        title={
          <div style={{ fontSize: 16 }}>
            <b>{universityName}</b> {country}
          </div>
        }
      />
      <CardContent style={cardContentStyle}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UniversityCard;
