import { Typography } from "@material-ui/core";
import Layout from "../src/Layout";

export default function Success() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom align="center">
        Message recieved
      </Typography>
      <Typography align="center" variant="body1">
        I'll get back to you soon!
        <br />
        <br />
      </Typography>
    </Layout>
  );
}
