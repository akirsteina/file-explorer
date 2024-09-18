import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { fetchFilePathsExtraReducers } from "./thunks/fetchFilePaths";
import initialState from "./initialState";

const filePathsSlice = createSlice({
  name: "filePaths",
  initialState,
  reducers,
  extraReducers: (builder) => {
    fetchFilePathsExtraReducers(builder);
  },
});

export const selectAllTreeElements = (state) => state.filePaths;

export const { itemDeleted, fileAdded, folderAdded, stateReset } =
  filePathsSlice.actions;

export default filePathsSlice.reducer;
