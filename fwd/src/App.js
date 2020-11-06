import React, { useState } from "react";
import "./App.css";
import {
  makeStyles,
  Button,
  Card,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
const TodoItem = ({ itemText, handleDelete }) => {
  return (
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
};

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
  const [id, setId] = useState(0);

  const addItem = (text) => {
    setItems((items) => [
      ...items,
      <TodoItem
        itemText={text}
        key={id}
        id={id}
        handleDelete={() =>
          setItems((items) => items.filter((item) => item.props.id !== id))
        }
      />,
    ]);
    setId((id) => id + 1);
  };

  return (
    <Card maxwidth="sm" className={classes.root}>
      <h1>TODO List</h1>
      {items}
      <AddItemField addItem={addItem} />
      <ItemCount count={items.length} />
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
