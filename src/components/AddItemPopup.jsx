import React, { useState } from "react";
import { styled } from "@mui/material";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddItemPopup = ({
  open = false,
  handleClose = () => {},
  handleSave = () => {},
  handleValidation = () => {},
  title = "",
  placeholder = "",
}) => {
  const [itemName, setItemName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setItemName(value);
    if (error && handleValidation(value)) {
      setError("");
    }
  };

  const resetState = () => {
    setItemName("");
    setError("");
  };

  const handleSaveClick = () => {
    if (!handleValidation(itemName)) {
      setError("Invalid input. Please check the name and try again.");
      return;
    }
    try {
      handleSave(itemName);
      resetState();
      handleClose();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const handleCloseClick = () => {
    resetState();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseClick}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContentWrapper>
        <StyledHeader>
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton onClick={handleCloseClick}>
            <CloseIcon />
          </IconButton>
        </StyledHeader>
        <StyledTextField
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          value={itemName}
          onChange={handleInputChange}
          error={!!error}
          helperText={error}
        />
        <StyledActionsWrapper>
          <CancelButton variant="outlined" onClick={handleCloseClick}>
            Cancel
          </CancelButton>
          <SaveButton
            variant="contained"
            onClick={handleSaveClick}
            disabled={!itemName.trim()}
          >
            Save
          </SaveButton>
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
  color: "#173450",
});

const StyledActionsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "2rem",
  gap: "1rem",
});

const StyledTextField = styled(TextField)({
  marginTop: "2rem",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#173450",
    },
  },
});

const CancelButton = styled(Button)({
  border: "1px solid #173450",
  color: "#173450",
});

const SaveButton = styled(Button)({
  backgroundColor: "#173450",
});

export default AddItemPopup;
