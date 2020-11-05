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

const useStyles = makeStyles({
  root: {
    width: "20%",
    margin: "3em",
    padding: "2em",
  },
});

const TodoItem = ({ itemText }) => (
  <ListItem>
    <ListItemIcon>
      <Checkbox edge="start" />
    </ListItemIcon>
    <ListItemText primary={itemText} />
    <DeleteIcon />
  </ListItem>
);

const AddItemField = () => (
  <TextField variant="filled" label="Add new item"></TextField>
);

const ItemCount = () => <p>Item count: 3</p>;

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

const App = () => <TodoList></TodoList>;

export default App;
