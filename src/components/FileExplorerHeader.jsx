import React, { useContext, useState } from "react";
import { Box, IconButton, styled, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import RefreshIcon from "@mui/icons-material/Refresh";
import { FileTreeContext } from "../context/FileTreeContext";
import DeletePopup from "./DeletePopup";
import { useDispatch } from "react-redux";
import { stateReset } from "../slice/filePathsSlice";
import fetchFilePaths from "../slice/thunks/fetchFilePaths";

const FileExplorerHeader = ({ loading = false, error = null }) => {
  const dispatch = useDispatch();
  const { openAddFileModal, openAddFolderModal } = useContext(FileTreeContext);
  const [resetPopupOpen, setResetPopupOpen] = useState(false);

  const toggleResetPopup = () => {
    setResetPopupOpen(!resetPopupOpen);
  };

  const resetAndFetchFilePaths = () => {
    dispatch(stateReset());
    dispatch(fetchFilePaths()).then(({ error }) => {
      if (error?.message) {
        error = ("Failed to fetch file paths:", error.message);
      }
    });
    toggleResetPopup(!resetPopupOpen);
  };

  return (
    <StyledHeader>
      <Typography variant="h5" sx={{ color: "#173450" }}>
        File Explorer
      </Typography>
      <Box>
        <Tooltip title="Add file">
          <StyledIconButton
            onClick={() => openAddFileModal()}
            disabled={loading || error}
          >
            <AddIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Add folder">
          <StyledIconButton
            onClick={() => openAddFolderModal()}
            disabled={loading || error}
          >
            <FolderIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Reset File Explorer">
          <StyledIconButton
            onClick={toggleResetPopup}
            disabled={loading || error}
          >
            <RefreshIcon />
          </StyledIconButton>
        </Tooltip>
      </Box>
      <DeletePopup
        open={resetPopupOpen}
        handleClose={toggleResetPopup}
        handleAction={resetAndFetchFilePaths}
        actionTitle="Reset"
        title="Reset File Explorer"
        description="Are you sure you want to reset File Explorer? This will delete all files and reload the file tree."
        actionParams=""
      />
    </StyledHeader>
  );
};

const StyledHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
});

const StyledIconButton = styled(IconButton)({
  color: "#173450",
});

export default FileExplorerHeader;
