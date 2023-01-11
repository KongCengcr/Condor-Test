import React from "react";
import {
  Grid,
  Paper,
  Button,
  FormLabel,
  FormControl,
  OutlinedInput,
} from "@mui/material";

import EastIcon from "@mui/icons-material/East";

const LoginForm = () => {
  const paperStyle = {
    padding: 20,
    width: "80%",
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <FormControl margin="dense" fullWidth>
          <FormLabel>Username</FormLabel>
          <OutlinedInput required placeholder="Enter username" />
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <FormLabel>Password</FormLabel>
          <OutlinedInput
            required
            type="password"
            placeholder="Enter password"
          />
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          style={btnstyle}
          fullWidth
          endIcon={<EastIcon />}
        >
          Login
        </Button>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
