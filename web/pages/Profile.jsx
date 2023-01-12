import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import UniversityCard from "../components/UniversityCard.jsx";
import UniversityContent from "../components/UniversityContent.jsx";
import Layout from "./layout/Layout.jsx";

const Profile = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={6}>
              <Grid alignItems="left">
                <Grid item sx={{ mb: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    My Favorites
                  </Typography>
                </Grid>

                <Grid item>
                  <UniversityCard
                    universityName={"University Name"}
                    city={"city"}
                    description={
                      "This impressive paella is a perfect party dish"
                    }
                    isFavority={true}
                  />
                  <UniversityCard
                    universityName={"University Name"}
                    city={"city"}
                    description={
                      "This impressive paella is a perfect party dish"
                    }
                    isFavority={true}
                  />
                  <UniversityCard
                    universityName={"University Name"}
                    city={"city"}
                    description={
                      "This impressive paella is a perfect party dish"
                    }
                    isFavority={true}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
              <Grid alignItems="left">
                <Grid item sx={{ mb: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Selected University
                  </Typography>
                </Grid>

                <Grid item>
                  <UniversityContent
                    universityName={"University Name"}
                    city={"city"}
                    description={
                      "This impressive paella is a perfect party dish"
                    }
                    website={"website.com"}
                    location={"location"}
                    country={"country"}
                    currency={"name (symbol)"}
                    language={"language"}
                    population={"999999"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
