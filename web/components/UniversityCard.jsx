import React, { useContext } from "react";
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
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { AuthContext } from "../context/AuthContext";

const UniversityCard = ({
  universityId,
  universityName,
  country,
  description,
  isFavority,
}) => {
  const { selectFavority } = useContext(AuthContext);
  const cardContentStyle = {
    paddingTop: 10,
    paddingBottom: 10,
  };

  const cardStyle = {
    width: "100%",
    mb: 1,
  };

  const handleFavority = () => {
    selectFavority(universityId);
  };

  return (
    <Card sx={cardStyle}>
      <CardHeader
        style={cardContentStyle}
        action={
          <>
            {isFavority ? (
              <IconButton onClick={handleFavority} aria-label="favorite">
                <StarIcon fontSize="small" sx={{ color: yellow[700] }} />
              </IconButton>
            ) : (
              <IconButton onClick={handleFavority} aria-label="favorite">
                <StarOutlineIcon fontSize="small" sx={{ color: grey[500] }} />
              </IconButton>
            )}
            <IconButton aria-label="open">
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
