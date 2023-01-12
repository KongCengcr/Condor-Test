import React, { useContext, useState } from "react";

import {
  Grid,
  Paper,
  Button,
  FormLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Alert,
  CircularProgress,
} from "@mui/material";

import ContainerStyled from "../components/Container.jsx";
import Layout from "./layout/Layout.jsx";

import EastIcon from "@mui/icons-material/East";
import { validateEmail } from "../utils/validate.js";
import { getAllUsers } from "../services/mainService.js";
import { AuthContext } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formLogin, setFormLogin] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [credentialError, setCredentialError] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    width: "80%",
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
    setEmailError(false);
    setPasswordError(false);
    setCredentialError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formLogin?.password ? setPasswordError(false) : setPasswordError(true);

    formLogin?.email
      ? setEmailError(!validateEmail(formLogin.email))
      : setEmailError(true);

    if (!emailError && !passwordError) {
      setFormSubmited(true);
      const users = await getAllUsers();
      const user = users.data.find((val) => val.email === formLogin.email);
      setFormSubmited(false);
      console.log(formSubmited);

      if (user?.password === formLogin.password && user) {
        loginUser(user);
        navigate("/");
      } else {
        setCredentialError(true);
      }
    }
  };

  return (
    <Layout>
      <ContainerStyled>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            {credentialError && (
              <Alert severity="error">
                Something is wrong in your credentials!
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <FormControl margin="dense" fullWidth>
                <FormLabel error={emailError}>Email</FormLabel>
                <OutlinedInput
                  error={emailError}
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
                {emailError && (
                  <FormHelperText error>
                    Incorrect entry and is required
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl margin="dense" fullWidth>
                <FormLabel error={passwordError}>Password</FormLabel>
                <OutlinedInput
                  error={passwordError}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={(e) => handleChange(e)}
                />
                {passwordError && (
                  <FormHelperText error>Is required</FormHelperText>
                )}
              </FormControl>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                disabled={formSubmited}
                style={btnstyle}
                fullWidth
                endIcon={
                  formSubmited ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <EastIcon />
                  )
                }
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </ContainerStyled>
    </Layout>
  );
};

export default Login;
