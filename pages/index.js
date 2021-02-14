import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { applySession } from "next-session";
import Image from "next/image";
import React from "react";
import InitialDialog from "../src/Dialog";
import Layout from "../src/Layout";
import LinkTypography from "../src/Link";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
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
    margin: theme.spacing(2, 0),
  },
  img: {
    borderRadius: "5px",
  },
}));

export default function Index({ views }) {
  const classes = useStyles();
  const openDialog = views > 1 ? false : true;
  return (
    <Layout>
      <InitialDialog firstView={openDialog} />
      <Grid container spacing={3} justify="center" className={classes.grid}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom align="center">
            Hi.
          </Typography>
          <Typography variant="body1">
            I'm a British/Swiss dual national. I have a weird Swiss name but
            grew up in the UK.
            <br />
            <br />
            I'm now in the US, finishing up a Masters in Computer Science at the
            University of Colorado Boulder. <br />
            <br />I am looking for a job in the US starting{" "}
            <strong>Summer 2021</strong>. <br />
            <br />I have applied for post-completion OPT, which with the STEM
            extension will grant me{" "}
            <strong>3 years of work authorization.</strong>
            <br />
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={5} justify="center">
          <Image
            src="/holding_dog.jpg"
            alt="Me holding a dog"
            width={225}
            height={350}
            layout="intrinsic"
            priority
            className={classes.img}
          />
        </Grid>
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
              <br />
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
              <br />
              <LinkTypography
                href="/linkedin"
                typographyProps={{ align: "center", variant: "subtitle1" }}
              >
                LinkedIn
              </LinkTypography>
              <br />
              <LinkTypography
                href="https://soundcloud.com/tundra_uk"
                typographyProps={{ align: "center", variant: "subtitle1" }}
              >
                Soundcloud
              </LinkTypography>
            </Card>
          </div>
        </Grid>
        <br />
      </Grid>

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

export async function getServerSideProps({ req, res }) {
  await applySession(req, res);
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  return {
    props: {
      views: req.session.views,
    },
  };
}
