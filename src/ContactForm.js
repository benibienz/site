import {
  Button,
  Grid,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(1),
    minWidth: "40vw",
    maxWidth: "40ch",
  },
  msg: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    width: "100%",
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMsg, setIsMsg] = useState(false);

  return (
    <form
      name="contact"
      action="/success"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="age"
    >
      <input type="hidden" name="form-name" value="contact" />

      <Typography variant="h4" gutterBottom align="center">
        Contact me
      </Typography>
      <Grid
        container
        spacing={2}
        className={classes.grid}
        justify="space-evenly"
      >
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="name"
            label="Name"
            variant="filled"
            onChange={(e) => setIsName(!!e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="filled"
            onChange={(e) => setIsEmail(!!e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            name="message"
            placeholder="Message"
            rowsMin={4}
            className={classes.msg}
            onChange={(e) => setIsMsg(!!e.target.value)}
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          disabled={!isName || !isEmail || !isMsg}
        >
          Send
        </Button>
      </Grid>
    </form>
  );
}
