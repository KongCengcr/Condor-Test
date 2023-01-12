import { Container } from "@mui/material";
import React from "react";
import SearchAutocomplete from "../components/SearchAutocomplete.jsx";
import UniversityCard from "../components/UniversityCard.jsx";
import Layout from "./layout/Layout.jsx";

const Search = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <SearchAutocomplete />
        <UniversityCard
          universityName={"University Name"}
          city={"city"}
          description={"This impressive paella is a perfect party dish"}
          isFavority={false}
        />
        <UniversityCard
          universityName={"University Name"}
          city={"city"}
          description={"This impressive paella is a perfect party dish"}
          isFavority={false}
        />
      </Container>
    </Layout>
  );
};

export default Search;
