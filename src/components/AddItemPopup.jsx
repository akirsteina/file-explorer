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
    setItemName(event.target.value);
    if (error && handleValidation(event.target.value)) {
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "#173450" }}
          >
            {title}
          </Typography>
          <IconButton onClick={handleCloseClick}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          value={itemName}
          onChange={handleInputChange}
          error={!!error}
          helperText={error}
          sx={{
            mt: "2rem",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#173450",
              },
            },
          }}
        />
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ mt: "2rem", gap: "1rem" }}
        >
          <Button
            variant="outlined"
            onClick={handleCloseClick}
            sx={{ border: "1px solid #173450", color: "#173450" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSaveClick}
            sx={{ backgroundColor: "#173450" }}
            disabled={!itemName.trim()}
          >
            Save
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

export default AddItemPopup;
