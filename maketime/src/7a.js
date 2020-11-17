import React from "react";
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
    <Card maxwidth="sm" className={classes.root}>
      <h1>TODO List - 7a</h1>
      <TodoItem itemText="Make mockup" />
      <TodoItem itemText="Make static app" />
      <TodoItem itemText="Represent state" />
      <AddItemField />
      <ItemCount />
      <a
        href="https://github.com/benibienz/site/blob/master/fwd/src/7a.js"
        target="_blank"
        rel="noreferrer"
      >
        See source code
      </a>
    </Card>
  );
};

export default TodoList;
