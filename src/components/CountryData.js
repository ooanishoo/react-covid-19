import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { fetchCountryData } from "../api";
import CountUp from "react-countup";

function CountryData({ countries }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      boxShadow: "4px 4px 31px 2px rgba(0, 0, 0, 0.10)",
      backgroundColor: "#fff",
    },
    input: {
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "blue",
      },
      boxShadow: "4px 4px 31px 2px rgba(0, 0, 0, 0.10)",
    },
  }));

  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState({});
  const { confirmed = 0, deaths = 0, recovered = 0 } = country;
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (value) => {
    console.log({ value }, "selected country");
    setSearch(value);
  };

  useEffect(() => {
    console.log(search, "search is");
    if (search && search.trim !== "") {
      setIsLoading(true);

      setTimeout(() => {
        fetchCountryData(search.iso3)
          .then((data) => {
            console.log({ data });
            setCountry(data);
          })
          .finally(setIsLoading(false));
      }, 100);
    }
  }, [search]);

  useEffect(() => {
    console.log({ country });
  }, [country]);

  return (
    <Grid>
      <Grid>
        <Autocomplete
          autoSelect
          getOptionLabel={(option) => option.name}
          getOptionSelected={(option) => option.name}
          options={countries}
          value={search}
          onChange={(event, value) => handleOnChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Search"
              fullWidth
              hiddenLabel
              onClose={() => console.log("close")}
              style={{ backgroundColor: "white" }}
              InputProps={{
                ...params.InputProps,
                className: classes.input,
                disableUnderline: true,
              }}
            />
          )}
        />
      </Grid>
      <br />
      <br />
      <Paper className={classes.paper}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={4}>
            <Typography component="body1" variant="subtitle1">
              Confirmed
            </Typography>
            <br />
            <Typography component="body1" variant="h4">
              {confirmed && confirmed.value ? (
                <CountUp
                  start={0}
                  end={confirmed && confirmed.value}
                  duration={1.5}
                  separator=","
                />
              ) : (
                "0"
              )}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography component="body1" variant="subtitle1">
              Deaths
            </Typography>
            <br />
            <Typography component="body1" variant="h4">
              {deaths && deaths.value ? (
                <CountUp
                  start={0}
                  end={deaths && deaths.value}
                  duration={1.5}
                  separator=","
                />
              ) : (
                "0"
              )}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography component="body1" variant="subtitle1">
              Recovered
            </Typography>
            <br />
            <Typography component="body1" variant="h4">
              {recovered && recovered.value ? (
                <CountUp
                  start={0}
                  end={recovered && recovered.value}
                  duration={1.5}
                  separator=","
                />
              ) : (
                "0"
              )}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default CountryData;
