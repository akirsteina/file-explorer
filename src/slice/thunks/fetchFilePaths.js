import { createAsyncThunk } from "@reduxjs/toolkit";
import getFilePaths from "../../services/getFilePaths";
import utils from "../../helpers/utils";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchFilePaths = createAsyncThunk(
  "filePaths/fetchFilePaths",
  async () => {
    const filepaths = await getFilePaths();
    const treeData = utils.buildTree(filepaths);
    await delay(3000); // Delay for 3 seconds to show loading state, just for demo purposes
    return treeData;
  }
);
export const fetchFilePathsExtraReducers = (builder) => {
  builder.addCase(fetchFilePaths.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchFilePaths.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.data = payload;
    state.initialLoad = true;
  });
  builder.addCase(fetchFilePaths.rejected, (state, { error }) => {
    state.loading = false;
    state.error = String(error.message);
    state.initialLoad = false;
  });
};

export default fetchFilePaths;
