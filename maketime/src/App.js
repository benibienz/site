import {
  Grid,
  makeStyles,
  Typography,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { EventAvailable } from "@material-ui/icons";
import React from "react";
import ActivityList from "./activities/ActivityListLayout";
import "./App.scss";
import Schedule from "./schedule/Schedule";

const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: "1.1rem",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
  },
  grid: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    "& > h3": {
      color: "white",
      margin: theme.spacing(0.5),
    },
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h3" color="textSecondary" align="center">
          Make Time
          <EventAvailable
            color="secondary"
            fontSize="large"
            className={classes.icon}
          />
        </Typography>
      </div>
      <div className={classes.grid}>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <ActivityList />
          </Grid>
          <Grid item xs={12} md={8} lg={7} xl={7}>
            <Schedule />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>
);

export default App;
