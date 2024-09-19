import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { TreeItem2Label } from "@mui/x-tree-view/TreeItem2";

const Label = ({ icon = null, size = "", children }) => {
  return (
    <StyledTreeItemLabel>
      {icon && <StyledIcon component={icon} size={size} />}
      <StyledTypography variant="body2">{children}</StyledTypography>
    </StyledTreeItemLabel>
  );
};

const StyledTreeItemLabel = styled(TreeItem2Label)({
  display: "flex",
  alignItems: "center",
});

const StyledIcon = styled(Box)(({ size }) => ({
  marginRight: "1rem",
  fontSize: size || "1.2rem",
}));

const StyledTypography = styled(Typography)({
  variant: "body2",
});

export default Label;
