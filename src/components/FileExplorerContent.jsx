import React, { useContext } from "react";
import { Box, CircularProgress, styled, Typography } from "@mui/material";
import { FileTreeContext } from "../context/FileTreeContext";
import FileTree from "./FileTree";
import AddItemPopup from "./AddItemPopup";

const FileExplorerContent = ({ loading = false, error = null, data = [] }) => {
  const { popupState, closeModal } = useContext(FileTreeContext);

  return (
    <StyledContent>
      {loading && (
        <StyledLoadingBox>
          <StyledCircularProgress />
        </StyledLoadingBox>
      )}
      {error && <Typography variant="body2">{error}</Typography>}
      {!loading && !error && data && <FileTree treeData={data} />}
      {!loading && !error && !data.length && (
        <Typography variant="body2">No files or folders to show</Typography>
      )}
      <AddItemPopup
        open={popupState.isOpen}
        handleClose={closeModal}
        handleSave={popupState.handleSave}
        handleValidation={popupState.handleValidation}
        title={popupState.title}
        placeholder={popupState.placeholder}
      />
    </StyledContent>
  );
};

const StyledContent = styled(Box)({
  padding: "1rem",
  flex: 1,
  overflowY: "auto",
  scrollbarColor: "#173450 #f5f5f5",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f5f5f5",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#173450",
    borderRadius: "10px",
    border: "2px solid #f5f5f5",
  },
});

const StyledLoadingBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  margin: "1rem",
});

const StyledCircularProgress = styled(CircularProgress)({
  color: "#173450",
});

export default FileExplorerContent;
