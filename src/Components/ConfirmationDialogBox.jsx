import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const style = {
  "& .MuiDialog-paper": {
    backgroundColor: "primary.main",

    "& button": {
      color: "primary.orange",
      fontWeight: "600",

      "&: hover": {
        backgroundColor: "rgba(255, 236, 209, 0.1)",
      },
    },
  },

  "& .MuiDialogContentText-root": {
    color: "primary.text",
    fontFamily: "Poppins",
  },
};

export default function ConfirmationDialogBox({ open, setOpen, handleQuit }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={style}>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to quit the Quiz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleQuit} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
