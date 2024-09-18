import React from "react";
import { styled } from "@mui/material";
import { Box, Typography, Modal, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DeletePopup = ({
  open = false,
  handleClose = () => {},
  handleAction = () => {},
  actionTitle = "",
  title = "",
  description = "",
  actionParams = "",
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentWrapper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography id="modal-modal-description" sx={{ mt: "2rem" }}>
          {description}
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ mt: "2rem", gap: "1rem" }}
        >
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ border: "1px solid #173450", color: "#173450" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => handleAction(actionParams)}
            sx={{ backgroundColor: "#173450" }}
          >
            {actionTitle}
          </Button>
        </Box>
      </ModalContentWrapper>
    </Modal>
  );
};

const ModalContentWrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#ffffff",
  border: "2px solid #173450",
  boxShadow: 24,
  padding: "2rem",
});

export default DeletePopup;
