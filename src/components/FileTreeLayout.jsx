import React from "react";
import { GlobalStyles, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FileTreeProvider } from "../context/FileTreeContext";
import FileExplorer from "./FileExplorer";

const FileTreeLayout = () => (
  <FileTreeProvider>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <Grid container>
      <Grid size={{ xs: 12, md: 4, lg: 3 }}>
        <FileExplorer />
      </Grid>
      <Grid size={{ xs: 12, md: 8, lg: 9 }}>
        <Box />
      </Grid>
    </Grid>
  </FileTreeProvider>
);

export default FileTreeLayout;
