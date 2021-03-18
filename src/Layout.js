import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { StyledLink } from "./Link";

const useStyles = makeStyles((theme) => ({
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  root: {
    background: "linear-gradient(-30deg, #ffffff, #edfaff, #e9f2ff)",
    backgroundSize: "400% 400%",
    animation: "$gradient 20s ease infinite",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
  },
  copyright: {
    margin: theme.spacing(1),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <StyledLink
          href="/"
          typographyProps={{ variant: "h2", align: "center" }}
        >
          Beni Bienz dot com
        </StyledLink>
        <br />
        <div className={classes.content}>{children}</div>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          className={classes.copyright}
        >
          Copyright © Benjamin Bienz {new Date().getFullYear()}
        </Typography>
      </Container>
    </div>
  );
};

export default Layout;
