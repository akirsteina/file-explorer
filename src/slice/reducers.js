import { v4 as uuidv4 } from "uuid";
import utils from "../helpers/utils";

const reducers = {
  itemDeleted: (state, { payload }) => {
    const { id } = payload;
    state.data = utils.removeItemsRecursively(state.data, id);
  },
  fileAdded: (state, { payload }) => {
    const { id, label } = payload;
    const newFile = {
      itemId: uuidv4(),
      label: label,
      type: label.split(".").pop(),
    };
    state.data = utils.addItemToTree(state.data, id, newFile);
  },
  folderAdded: (state, { payload }) => {
    const { id, label } = payload;
    const newFolder = {
      itemId: uuidv4(),
      label: label,
      type: "folder",
      children: [],
    };
    state.data = utils.addItemToTree(state.data, id, newFolder);
  },
  stateReset: (state) => {
    state.data = [];
    state.loading = false;
    state.error = null;
    state.initialLoad = false;
  },
};

export default reducers;
