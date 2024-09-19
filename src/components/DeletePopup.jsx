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
        <StyledHeader>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </StyledHeader>
        <StyledDescription id="modal-modal-description">
          {description}
        </StyledDescription>
        <StyledActionsWrapper>
          <CancelButton variant="outlined" onClick={handleClose}>
            Cancel
          </CancelButton>
          <ActionButton
            variant="contained"
            onClick={() => handleAction(actionParams)}
          >
            {actionTitle}
          </ActionButton>
        </StyledActionsWrapper>
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

const StyledHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledActionsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "2rem",
  gap: "1rem",
});

const StyledDescription = styled(Typography)({
  marginTop: "2rem",
});

const CancelButton = styled(Button)({
  border: "1px solid #173450",
  color: "#173450",
});

const ActionButton = styled(Button)({
  backgroundColor: "#173450",
});

export default DeletePopup;
