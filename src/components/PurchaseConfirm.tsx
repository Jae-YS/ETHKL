import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

type PurchaseConfirmProps = {
  open: boolean;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onClose: () => void;
  onConfirm: () => void;
};

const PurchaseConfirm: React.FC<PurchaseConfirmProps> = ({
  open,
  title = "Are you sure?",
  description = "Please confirm your action.",
  confirmLabel = "Yes",
  cancelLabel = "Cancel",
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          {cancelLabel}
        </Button>
        <Button onClick={onConfirm} variant="contained" color="primary">
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseConfirm;
