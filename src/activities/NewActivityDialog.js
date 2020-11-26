import { makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  addField: {
    margin: theme.spacing(0),
  },
}));

// Note: WIP
// TODO: use Dialog component
const NewActivityDialog = ({ addActivity }) => {
  const [itemText, setItemText] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.addField}
        variant="filled"
        size="small"
        label="Activity name"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
    </form>
  );
};

export default NewActivityDialog;
