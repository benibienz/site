import "./App.css";
import {
  makeStyles,
  Card,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

// Material UI styles hook
const useStyles = makeStyles({
  root: {
    width: "20%",
    margin: "3em",
    padding: "2em",
  },
});

// TODO item with checkbox, text and delete icon
const TodoItem = ({ itemText }) => (
  <ListItem>
    <ListItemIcon>
      <Checkbox edge="start" />
    </ListItemIcon>
    <ListItemText primary={itemText} />
    <DeleteIcon />
  </ListItem>
);

// Text field to add a new item
const AddItemField = () => (
  <TextField variant="filled" label="Add new item"></TextField>
);

// Item count display
const ItemCount = () => <p>Item count: 3</p>;

// Main container for TODO list
const TodoList = () => {
  const classes = useStyles();
  return (
    <Card maxWidth="sm" className={classes.root}>
      <h1>TODO List</h1>
      <TodoItem itemText="Make mockup" />
      <TodoItem itemText="Make static app" />
      <TodoItem itemText="Represent state" />
      <AddItemField />
      <ItemCount />
    </Card>
  );
};

const App = () => (
  <>
    <TodoList />
    <p style={{ padding: "2em" }}>
      Go to <a href="https://github.com/benibienz/site">the repo</a> to see the
      mockup and discussion and{" "}
      <a href="https://github.com/benibienz/site/blob/master/fwd/src/App.js">
        App.js
      </a>{" "}
      to see the source code
    </p>
  </>
);

export default App;
