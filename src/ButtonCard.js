import { Card, makeStyles, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import Link from "../src/Link";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const hues = {
  hue1: "linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%)",
  hue2: "linear-gradient( 135deg, #FFA8A8 10%, #FCFF00 100%)",
  hue3: "linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)",
  hue4: "linear-gradient( 135deg, #FFF720 10%, #3CD500 100%)",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "20ch",
    height: "100%",
    padding: theme.spacing(1),
    cursor: "pointer",
    background: (props) => hues[props.hue],
  },
  text: {
    // color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
  },
  icon: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonCard({ children, link, hue }) {
  const classes = useStyles({ hue: hue });
  return (
    <Link href={link}>
      <Card className={classes.root}>
        <div className={classes.text}>
          <Typography variant="h5" align="center">
            {children}
          </Typography>
        </div>
        <ArrowForwardIcon className={classes.icon} />
      </Card>
    </Link>
  );
}

ButtonCard.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  hue: PropTypes.string,
};
