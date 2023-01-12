import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import UniversityCard from "../components/UniversityCard.jsx";
import UniversityContent from "../components/UniversityContent.jsx";
import Layout from "./layout/Layout.jsx";
import { getAllUniversity } from "../services/mainService.js";
import { AuthContext } from "../context/AuthContext.js";

const Profile = () => {
  const [listFavorityUniversities, setListFavorityUniversities] = useState("");
  const [university, setUniversity] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const resUniversities = await getAllUniversity();
      const search = [1, 2];

      const filterList = resUniversities.data.filter((university) =>
        currentUser.universityFav.includes(university.id)
      );

      const selectedUniversity = resUniversities.data.find(
        (university) => currentUser.universitySelect == university.id
      );

      setUniversity(selectedUniversity);
      setListFavorityUniversities(filterList);
    })();
  }, []);

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
                  {listFavorityUniversities &&
                    listFavorityUniversities.map((university) => (
                      <UniversityCard
                        key={university.name}
                        universityId={university.id}
                        universityName={university.name}
                        country={university.country}
                        description={university.description}
                        isFavority={true}
                      />
                    ))}
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
                  {university && (
                    <UniversityContent
                      universityName={university.name}
                      description={university.description}
                      website={university.website}
                      location={university.location}
                      country={university.country}
                      currency={university.currency}
                      language={university.language}
                      population={university.population}
                    />
                  )}
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
