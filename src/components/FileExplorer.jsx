import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, styled } from "@mui/material";
import { fetchFilePaths } from "../slice/thunks/fetchFilePaths";
import { selectAllTreeElements } from "../slice/filePathsSlice";
import FileExplorerHeader from "./FileExplorerHeader";
import FileExplorerContent from "./FileExplorerContent";

const FileExplorer = () => {
  const dispatch = useDispatch();
  const { data, loading, error, initialLoad } = useSelector(
    selectAllTreeElements
  );

  useEffect(() => {
    if (initialLoad === false) {
      dispatch(fetchFilePaths()).then(({ error }) => {
        if (error?.message) {
          error = ("Failed to fetch file paths:", error.message);
        }
      });
    }
  }, [initialLoad, dispatch]);

  return (
    <StyledWrapper>
      <FileExplorerHeader loading={loading} error={error} />
      <FileExplorerContent data={data} loading={loading} error={error} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)({
  maxWidth: "400px",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
});

export default FileExplorer;
