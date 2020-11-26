import {
  Grid,
  Chip,
  makeStyles,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import CheckCircle from "@material-ui/icons/CheckCircle";
import purple from "@material-ui/core/colors/purple";
import { useState } from "react";
import { NumberCell } from "../components";

const useStyles = makeStyles((theme) => ({
  inputHours: {
    margin: theme.spacing(1),
    width: "9ch",
  },
  // TODO: assign different colors to each new chip
  chip: {
    backgroundColor: purple[700],
    "&:focus": {
      backgroundColor: purple[500],
    },
  },
  check: {
    marginLeft: theme.spacing(1),
    color: theme.palette.success.main,
  },
}));

const Activity = ({ name, handleDelete }) => {
  const [hours, setHours] = useState(56);
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell align="center">
        <Chip
          label={name}
          onDelete={handleDelete}
          color="primary"
          className={classes.chip}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          className={classes.inputHours}
          variant="outlined"
          type="number"
          size="small"
          label="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </TableCell>
      <NumberCell align="center">
        <Grid container direction="row" alignItems="center" justify="center">
          56
          <CheckCircle className={classes.check} />
        </Grid>
      </NumberCell>
    </TableRow>
  );
};

export default Activity;
