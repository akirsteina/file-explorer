import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const FileMenu = ({
  anchorEl = Node,
  handleClose = () => {},
  handleDelete = () => {},
  label = "",
}) => {
  const handleDeleteClick = () => {
    handleDelete(
      "Delete",
      "Delete File",
      `Are you sure you want to delete ${label}?`
    );
    handleClose();
  };

  return (
    <Menu
      id="file-tree-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleDeleteClick}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Delete file" />
      </MenuItem>
    </Menu>
  );
};

export default FileMenu;
