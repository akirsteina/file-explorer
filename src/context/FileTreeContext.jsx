import React, { createContext, useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fileAdded, folderAdded } from "../slice/filePathsSlice";

export const FileTreeContext = createContext();

export const FileTreeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const initialPopupState = useMemo(
    () => ({
      isOpen: false,
      title: "",
      placeholder: "",
      handleSave: () => {},
      handleValidation: () => true,
    }),
    []
  );
  const [popupState, setPopupState] = useState(initialPopupState);

  const validateFilename = useCallback((filename) => {
    const regex =
      /^(?=.{1,255}$)([a-zA-Z0-9_-]+\.[a-zA-Z0-9]{1,12}|(\.[a-zA-Z0-9]{1,12}))$/;
    return regex.test(filename) && !/\s/.test(filename);
  }, []);

  const validateFolderName = useCallback((folderName) => {
    const regex = /^[^\\/:*?"<>|]{1,255}$/;
    return regex.test(folderName) && !/\s/.test(folderName);
  }, []);

  const handleAddFile = useCallback(
    (id, label) => {
      dispatch(fileAdded({ id, label }));
    },
    [dispatch]
  );

  const handleAddFolder = useCallback(
    (id, label) => {
      dispatch(folderAdded({ id, label }));
    },
    [dispatch]
  );

  const openAddFileModal = useCallback(
    (parentId) => {
      setPopupState({
        isOpen: true,
        title: "Add New File",
        placeholder: "Enter file name",
        handleSave: (fileName) => {
          handleAddFile(parentId, fileName);
        },
        handleValidation: validateFilename,
      });
    },
    [handleAddFile, validateFilename]
  );

  const openAddFolderModal = useCallback(
    (parentId) => {
      setPopupState({
        isOpen: true,
        title: "Add New Folder",
        placeholder: "Enter folder name",
        handleSave: (folderName) => {
          handleAddFolder(parentId, folderName);
        },
        handleValidation: validateFolderName,
      });
    },
    [handleAddFolder, validateFolderName]
  );

  const closeModal = useCallback(() => {
    setPopupState(initialPopupState);
  }, [initialPopupState]);

  const contextValues = {
    validateFilename,
    validateFolderName,
    popupState,
    openAddFileModal,
    openAddFolderModal,
    closeModal,
  };

  return (
    <FileTreeContext.Provider value={contextValues}>
      {children}
    </FileTreeContext.Provider>
  );
};
