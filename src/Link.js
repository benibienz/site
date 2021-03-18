import { Typography, withStyles } from "@material-ui/core";
import Link from "next/link";

const styles = {
  link: {
    color: "#030f8f",
    cursor: "pointer",
    transition: "color 1s",
    "&:hover": {
      color: "blueviolet",
    },
  },
  anchor: {
    textDecoration: "none",
  },
};

const LinkTypography = ({ href, classes, children, typographyProps }) => {
  return (
    <Link href={href}>
      <Typography {...typographyProps} className={classes.link}>
        {children}
      </Typography>
    </Link>
  );
};

const AnchorTypography = ({ href, classes, children, typographyProps }) => {
  return (
    <a
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      className={classes.anchor}
    >
      <Typography {...typographyProps} className={classes.link}>
        {children}
      </Typography>
    </a>
  );
};

export const StyledLink = withStyles(styles)(LinkTypography);
export const StyledAnchor = withStyles(styles)(AnchorTypography);
