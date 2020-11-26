import {
  withStyles,
  makeStyles,
  Paper,
  Typography,
  TableRow,
  TableCell,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    "& > h4": {
      marginBottom: theme.spacing(1),
    },
  },
}));

const Container = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

const DividerTableRow = withStyles((theme) => ({
  root: {
    borderBottom: "2px solid",
    borderBottomColor: theme.palette.grey[400],
  },
}))(TableRow);

const NumberCell = withStyles(() => ({
  root: {
    fontSize: "1.1rem",
  },
}))(TableCell);

export { Container, DividerTableRow, NumberCell };
