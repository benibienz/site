import {
  Button,
  Card,
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";

// Material UI styles hook
const useStyles = makeStyles({
  root: {
    width: "20em",
    margin: "3em",
    padding: "2em",
  },
  add: {
    margin: "1em",
  },
});

// TODO item with checkbox, text and delete icon
const TodoItem = ({ itemText, handleDelete }) => (
  <ListItem>
    <ListItemIcon>
      <Checkbox edge="start" />
    </ListItemIcon>
    <ListItemText primary={itemText} />
    <IconButton onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

// Text field to add a new item
const AddItemField = ({ addItem }) => {
  const [itemText, setItemText] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="filled"
        label="Add new item"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
      <Button
        className={classes.add}
        type="submit"
        variant="contained"
        color="primary"
        disabled={!itemText}
      >
        Add
      </Button>
    </form>
  );
};

// Item count display
const ItemCount = ({ count }) => <p>Item count: {count}</p>;

// Main container for TODO list
const TodoList = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  const addItem = (text) => {
    setItems((items) => [
      ...items,
      <TodoItem
        itemText={text}
        key={currentId}
        id={currentId}
        // pass in a delete function initiliazed to the current id
        handleDelete={() =>
          setItems((items) =>
            // Note: we use filter() because we need to return a new state object
            items.filter((item) => item.props.id !== currentId)
          )
        }
      />,
    ]);
    setCurrentId((currentId) => currentId + 1);
  };

  return (
    <Card maxwidth="sm" className={classes.root}>
      <h1>TODO List - 7b</h1>
      {items}
      <AddItemField addItem={addItem} />
      <ItemCount count={items.length} />
      <a
        href="https://github.com/benibienz/site/blob/master/fwd/src/7b.js"
        target="_blank"
        rel="noreferrer"
      >
        See source code
      </a>
    </Card>
  );
};

export default TodoList;
