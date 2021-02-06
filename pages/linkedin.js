import { Container, makeStyles, Typography } from "@material-ui/core";
import ContactForm from "../src/ContactForm";
import Layout from "../src/Layout";
import LinkTypography from "../src/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    minWidth: "40vw",
    maxWidth: "40ch",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.root}>
        <Typography variant="h4" gutterBottom align="center">
          I'm not on LinkedIn much
        </Typography>
        <Typography variant="body1" align="center">
          I'm not really a fan of the site and I have notifications turned off.
          <br />
          <br />
          If you mesage me on there, I'll probably miss it.
          <br />
          <br />
        </Typography>
        <LinkTypography
          href="https://www.linkedin.com/in/benibienz/"
          typographyProps={{ align: "center", variant: "body1" }}
        >
          But here's my profile if you want to take a look.
        </LinkTypography>
        <br />
        <br />
      </Container>
      <ContactForm />
    </Layout>
  );
}
