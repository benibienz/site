import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import React from "react";
import FirstVisitContext from "./Context";
import { StyledAnchor } from "./Link";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const { visited, setVisited } = React.useContext(FirstVisitContext);

  const handleClose = () => {
    setVisited(true);
  };

  return (
    <Dialog
      open={!visited}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">Welcome to Beni Bienz dot com</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          This site is intentionally minimalist. <br />
          <br />
          If you want a better example of my frontend skills, check out:
          <br />
          <br />
        </DialogContentText>
        <StyledAnchor
          href="https://www.maketime.site/"
          typographyProps={{ align: "center", variant: "subtitle1" }}
        >
          www.maketime.site
        </StyledAnchor>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
