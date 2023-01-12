import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar.jsx";
import SearchAutocomplete from "../components/SearchAutocomplete.jsx";
import UniversityCard from "../components/UniversityCard.jsx";

const Search = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Search;
