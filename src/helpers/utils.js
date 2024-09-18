import { v4 as uuidv4 } from "uuid";

// Recursively finds a node by its ID in a tree structure
const findNodeById = (node, id) => {
  if (node.itemId === id) return node;
  if (node.children) {
    for (let child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
  }
  return null;
};

// Converts a nested object structure into a tree structure with unique IDs
const convertToTree = (node) => {
  return Object.entries(node)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Sort entries alphabetically by key
    .map(([key, value]) => {
      const id = uuidv4();
      const hasExtension = key.includes(".");
      const isFolder = value !== null || !hasExtension;
      const type = isFolder ? "folder" : key.split(".").pop();
      const treeNode = {
        itemId: id,
        label: key,
        type,
      };
      if (isFolder) {
        treeNode.children = value ? convertToTree(value) : [];
      }
      return treeNode;
    });
};

// Adds an item to the tree at the specified parent ID, or at the root if no parent ID is provided
export const addItemToTree = (tree, parentId, item) => {
  const parentNode = parentId
    ? findNodeById({ children: tree }, parentId)
    : null;
  const target = parentNode ? parentNode.children : tree;

  target.push(item);
  target.sort((a, b) => a.label.localeCompare(b.label)); // Sort items alphabetically by label

  return tree;
};

// Recursively removes items from the tree by their ID
export const removeItemsRecursively = (items, id) => {
  return items
    .map((item) => {
      if (item.itemId === id) {
        return null;
      }
      if (item.children) {
        item.children = removeItemsRecursively(item.children, id);
      }
      return item;
    })
    .filter((item) => item !== null);
};

// Builds a tree structure from an array of file paths
export const buildTree = (paths) => {
  const root = {};

  paths.forEach((path) => {
    const parts = path.split("/");
    let current = root;

    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = index === parts.length - 1 ? null : {};
      }
      current = current[part];
    });
  });

  return convertToTree(root);
};

export default { addItemToTree, removeItemsRecursively, buildTree };
