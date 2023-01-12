import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import UniversityContent from "../components/UniversityContent.jsx";
import Layout from "./layout/Layout.jsx";
import { useParams } from "react-router-dom";
import { getUniversity } from "../services/mainService.js";

const Profile = () => {
  const [university, setUniversity] = useState("");
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const resUniversity = await getUniversity(id);
      setUniversity(resUniversity.data);
      console.log(resUniversity);
    })();
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 8 }}>
          <Grid container>
            <Grid alignItems="left">
              <Grid item sx={{ mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  University
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
        </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
