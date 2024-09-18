import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

const FolderMenu = ({
  anchorEl = Node,
  handleClose = () => {},
  handleDelete = () => {},
  handleAddFile = () => {},
  handleAddFolder = () => {},
  id = "",
  label = "",
}) => {
  const handleDeleteClick = () => {
    handleDelete(
      "Delete",
      "Delete Folder",
      `Are you sure you want to delete folder ${label} and all its files?`
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
        <ListItemText primary="Delete" />
      </MenuItem>
      <MenuItem onClick={() => handleAddFile(id)}>
        <ListItemIcon>
          <NoteAddIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Add new file" />
      </MenuItem>
      <MenuItem onClick={() => handleAddFolder(id)}>
        <ListItemIcon>
          <CreateNewFolderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Add new folder" />
      </MenuItem>
    </Menu>
  );
};

export default FolderMenu;
