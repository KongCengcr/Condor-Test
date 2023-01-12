import { Button, Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SearchAutocomplete from "../components/SearchAutocomplete.jsx";
import UniversityCard from "../components/UniversityCard.jsx";
import { AuthContext } from "../context/AuthContext.js";
import { getAllUniversity } from "../services/mainService.js";
import Layout from "./layout/Layout.jsx";

const Search = () => {
  const [universities, setUniversities] = useState("");
  const [listUniversities, setListUniversities] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const resUniversities = await getAllUniversity();
      setListUniversities(resUniversities.data);
      setUniversities(resUniversities.data);
    })();
  }, []);

  useEffect(() => {
    if (universities) {
      const filterList = universities.filter((university) =>
        university.name.includes(searchValue)
      );
      setListUniversities(filterList);
    }
    !searchValue && setListUniversities(universities);
  }, [universities, searchValue]);

  return (
    <Layout>
      <Container maxWidth="sm">
        {universities && (
          <SearchAutocomplete
            valueSearch={(val) => setSearchValue(val)}
            data={universities}
          />
        )}
        {listUniversities &&
          listUniversities.map((university) => (
            <UniversityCard
              key={university.name}
              universityId={university.id}
              universityName={university.name}
              country={university.country}
              description={university.description}
              isFavority={currentUser.universityFav.includes(university.id)}
            />
          ))}
      </Container>
    </Layout>
  );
};

export default Search;
