import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productTitle: string;
  price: number;
};

const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
  productTitle,
  price,
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            px: 2,
            py: 2,
          },
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.5rem" }}>
        Confirm Purchase
      </DialogTitle>

      <DialogContent>
        <Typography sx={{ fontSize: "1rem", color: "text.primary" }}>
          Are you sure you want to purchase{" "}
          <Box component="span" sx={{ fontWeight: 600 }}>
            {productTitle}
          </Box>{" "}
          for{" "}
          <Box component="span" sx={{ fontWeight: 600 }}>
            ${price.toFixed(2)}
          </Box>
          ?
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          px: 2,
          pb: 2,
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            fontWeight: 500,
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            fontWeight: 600,
            textTransform: "uppercase",
            px: 2,
            py: 1,
            borderRadius: 2,
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
