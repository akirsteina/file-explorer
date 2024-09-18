import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { FileTreeContext } from "../context/FileTreeContext";
import clsx from "clsx";
import { styled } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { unstable_useTreeItem2 as useTreeItem2 } from "@mui/x-tree-view/useTreeItem2";
import {
  TreeItem2Checkbox,
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Root,
} from "@mui/x-tree-view/TreeItem2";
import { TreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";
import { TreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";
import Label from "./Label";
import fileIcons from "../constants/fileIcons";
import FolderMenu from "./FolderMenu";
import FileMenu from "./FileMenu";
import { itemDeleted } from "../slice/filePathsSlice";
import DeletePopup from "./DeletePopup";

const FileTreeItem = ({ itemId = "", label = "", type = "", children }) => {
  const dispatch = useDispatch();
  const { openAddFileModal, openAddFolderModal } = useContext(FileTreeContext);

  const [folderMenuAnchor, setFolderMenuAnchor] = useState(null);
  const [fileMenuAnchor, setFileMenuAnchor] = useState(null);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [deletePopupParams, setDeletePopupParams] = useState({
    actionTitle: "",
    title: "",
    description: "",
  });

  const {
    getContentProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ itemId, children, label });

  const getIconFromFileType = (type) => {
    return fileIcons[type] ? fileIcons[type].icon : fileIcons.default.icon;
  };

  const isFolder = type === "folder";
  const icon = getIconFromFileType(type);

  const handleOpenFolderMenu = (event) => {
    event.preventDefault();
    setFolderMenuAnchor(event.currentTarget);
  };

  const handleCloseFolderMenu = () => {
    setFolderMenuAnchor(null);
  };

  const handleOpenFileMenu = (event) => {
    event.preventDefault();
    setFileMenuAnchor(event.currentTarget);
  };

  const handleCloseFileMenu = () => {
    setFileMenuAnchor(null);
  };

  const handleDeleteItem = (itemId) => {
    dispatch(itemDeleted({ id: itemId }));
  };

  const openDeletePopup = (actionTitle, title, description) => {
    setDeletePopupParams({ actionTitle, title, description });
    setDeletePopupOpen(true);
  };

  const closeDeletePopup = () => {
    setDeletePopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (folderMenuAnchor && !folderMenuAnchor.contains(event.target)) {
        event.preventDefault();
        handleCloseFolderMenu();
      }
      if (fileMenuAnchor && !fileMenuAnchor.contains(event.target)) {
        event.preventDefault();
        handleCloseFileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [folderMenuAnchor, fileMenuAnchor]);

  return (
    <TreeItem2Provider itemId={itemId}>
      <StyledTreeItemRoot onContextMenu={(event) => event.preventDefault()}>
        <CustomTreeItemContent
          {...getContentProps({
            className: clsx("content", {
              "Mui-selected": status.selected,
              "Mui-focused": status.focused,
            }),
            onContextMenu: isFolder ? handleOpenFolderMenu : handleOpenFileMenu,
          })}
        >
          <TreeItem2IconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </TreeItem2IconContainer>
          <TreeItem2Checkbox {...getCheckboxProps()} />
          <Label
            {...getLabelProps({
              icon,
            })}
            size="1.2rem"
          >
            {label}
          </Label>
        </CustomTreeItemContent>
        {isFolder && (
          <Collapse {...getGroupTransitionProps()}>{children}</Collapse>
        )}
        <FolderMenu
          anchorEl={folderMenuAnchor}
          handleClose={handleCloseFolderMenu}
          handleDelete={openDeletePopup}
          handleAddFile={() => openAddFileModal(itemId)}
          handleAddFolder={openAddFolderModal}
          id={itemId}
          label={label}
        />
        <FileMenu
          anchorEl={fileMenuAnchor}
          handleClose={handleCloseFileMenu}
          handleDelete={openDeletePopup}
          label={label}
        />
      </StyledTreeItemRoot>
      <DeletePopup
        open={deletePopupOpen}
        actionTitle={deletePopupParams.actionTitle}
        title={deletePopupParams.title}
        description={deletePopupParams.description}
        handleClose={closeDeletePopup}
        handleAction={handleDeleteItem}
        actionParams={itemId}
      />
    </TreeItem2Provider>
  );
};

const StyledTreeItemRoot = styled(TreeItem2Root)({
  color: "#173450",
  position: "relative",
});

const CustomTreeItemContent = styled(TreeItem2Content)({
  flexDirection: "row-reverse",
  borderRadius: "0.35rem",
  marginBottom: "0.25rem",
  marginTop: "0.25rem",
  padding: "0.25rem",
  paddingRight: "0.5rem",
  fontWeight: 500,
  "&:hover": {
    color: "#2B5F94",
  },
  [`&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused`]: {
    backgroundColor: "#2B5F94",
    color: "#ffffff",
  },
});

export default FileTreeItem;
