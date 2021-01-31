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

export default withStyles(styles)(LinkTypography);
