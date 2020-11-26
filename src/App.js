import {
  Grid,
  makeStyles,
  Typography,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { EventAvailable } from "@material-ui/icons";
import { useState } from "react";
import ActivityList from "./activities/ActivityList";
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
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [activities, setActivities] = useState();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Typography
            variant="h3"
            display="inline"
            align="center"
            style={{ color: "white" }}
          >
            Make Time
          </Typography>
          <EventAvailable
            color="secondary"
            fontSize="large"
            className={classes.icon}
          />
        </Grid>
      </div>
      <div className={classes.grid}>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <ActivityList />
          </Grid>
          <Grid item xs={12} md={8} lg={7} xl={7}>
            <Schedule />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Go to{" "}
              <a
                href="https://github.com/benibienz/site/tree/project2"
                target="_blank"
                rel="noreferrer"
              >
                the repo
              </a>{" "}
              to see the mockup and discussion
            </Typography>
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