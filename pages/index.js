import { Card, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../src/Layout";
import LinkTypography from "../src/Link";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(1),
  },
  card: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 2),
    maxWidth: "27ch",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <Typography align="center" variant="body1">
        <br />
        Hi. <br />
        I'm a British/Swiss dual national. I have a weird Swiss name but grew up
        in the UK.
        <br />
        <br />
        I'm now in the US, finishing up a Masters in Computer Science at the
        University of Colorado Boulder. <br />
        <br />I am looking for a job in the US starting{" "}
        <strong>Summer 2021</strong>. <br />
        <br />I will be applying for post-completion OPT, which with the STEM
        extension will grant me <strong>
          3 years of work authorization
        </strong>{" "}
        before I require visa sponsorship. <br />
        <br />
      </Typography>
      <Divider />
      <Grid
        container
        className={classes.grid}
        justify="space-evenly"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <div className={classes.center}>
            <Typography align="center" variant="subtitle2">
              Sites I have made
            </Typography>
            <Card className={classes.card}>
              <LinkTypography
                href="https://www.maketime.site/"
                typographyProps={{ align: "center", variant: "subtitle1" }}
              >
                Make Time
              </LinkTypography>
              <LinkTypography
                href="https://www.playmaker.team/"
                typographyProps={{ align: "center", variant: "subtitle1" }}
              >
                Playmaker
              </LinkTypography>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.center}>
            <Typography align="center" variant="subtitle2">
              Sites I am on
            </Typography>
            <Card className={classes.card}>
              <LinkTypography
                href="https://github.com/benibienz"
                typographyProps={{ align: "center", variant: "subtitle1" }}
              >
                Github
              </LinkTypography>
              <LinkTypography
                href="/linkedin"
                typographyProps={{ align: "center", variant: "subtitle1" }}
              >
                LinkedIn
              </LinkTypography>
            </Card>
          </div>
        </Grid>
        <br />
      </Grid>

      <Divider />
      <LinkTypography
        href="/contact"
        typographyProps={{ align: "center", variant: "subtitle1" }}
      >
        <br />
        Contact me
      </LinkTypography>
    </Layout>
  );
}
