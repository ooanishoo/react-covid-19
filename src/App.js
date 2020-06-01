import React, { useState, useEffect } from "react";
import { fetchData } from "./api";
import {
  Container,
  Typography,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  Grid,
} from "@material-ui/core";
import OverviewData from "./components/OverviewData";
import CountryData from "./components/CountryData";

function App() {
  const [state, setState] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    countries: [],
  });
  useEffect(() => {
    fetchData().then(({ confirmed, deaths, recovered, countries }) => {
      setState({
        confirmed,
        deaths,
        recovered,
        countries,
      });
    });
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      height: "100vh",
    },
    title: {
      fontSize: "72px",
      color: "#404040",
    },
  }));
  const classes = useStyles();
  let theme = createMuiTheme({
    typography: {
      fontFamily: "Spartan, sans-serif",
    },
  });
  theme = responsiveFontSizes(theme);
  // fetch a country's data on search

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          style={{
            minHeight: "100vh",
            fontFamily: "Jost",
          }}
        >
          <Title />
          <br />
          <OverviewData {...state} />
          <br />
          <br />
          <CountryData {...state} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
const Title = () => (
  <Typography
    variant="h1"
    component="h2"
    style={{
      fontSize: "72px",
      color: "#404040",
    }}
  >
    COVID-19
  </Typography>
);

export default App;
