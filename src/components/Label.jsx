import React from "react";
import { Box, Typography } from "@mui/material";
import { TreeItem2Label } from "@mui/x-tree-view/TreeItem2";

const Label = ({ icon = null, size = "", children }) => {
  return (
    <TreeItem2Label sx={{ display: "flex", alignItems: "center" }}>
      {icon && (
        <Box
          component={icon}
          sx={{ mr: 1, fontSize: "1.2rem", size, width: size, height: size }}
        />
      )}
      <Typography variant="body2">{children}</Typography>
    </TreeItem2Label>
  );
};

export default Label;
