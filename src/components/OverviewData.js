import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import CountUp from "react-countup";

function OverviewData({ confirmed, deaths, recovered }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      boxShadow: "4px 4px 31px 2px rgba(0, 0, 0, 0.10)",
      backgroundColor: "#fff",
    },
    confirmed: {
      color: "#FAC651",
    },
    deaths: {
      color: "#F55661",
    },
    recovered: {
      color: "#02D463",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={classes.paper}>
          <Typography component="body1" variant="subtitle1">
            Confirmed
          </Typography>
          <br />
          <Typography component="body1" variant="h4">
            <CountUp
              start={0}
              end={confirmed}
              duration={1.5}
              separator=","
              className={classes.confirmed}
            />
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={classes.paper}>
          <Typography component="body1" variant="subtitle1">
            Deaths
          </Typography>
          <br />
          <Typography component="body1" variant="h4">
            <CountUp
              start={0}
              end={deaths}
              duration={1.5}
              separator=","
              className={classes.deaths}
            />
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={classes.paper}>
          <Typography component="body1" variant="subtitle1">
            Recovered
          </Typography>
          <br />
          <Typography component="body1" variant="h4">
            <CountUp
              start={0}
              end={recovered}
              duration={1.5}
              separator=","
              className={classes.recovered}
            />
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default OverviewData;
