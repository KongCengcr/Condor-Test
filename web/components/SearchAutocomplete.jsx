import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Autocomplete, Button, Grid, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchAutocomplete = ({ data, valueSearch }) => {
  const [listUniversities, setListUniversities] = useState(data);
  const [search, setSearch] = useState("");

  const Wrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10} lg={10}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={listUniversities.map((option) => option.name)}
            defaultValue={!search ? "" : search}
            onChange={(event, newValue) => {
              setSearch(newValue);
            }}
            renderInput={(params) => (
              <TextField
                style={{ backgroundColor: "#fff" }}
                {...params}
                label="University Name"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2} lg={2}>
          <Button
            onClick={() => valueSearch(search)}
            style={{ height: "100%", width: "100%" }}
            variant="contained"
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SearchAutocomplete;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "L??on: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
];
