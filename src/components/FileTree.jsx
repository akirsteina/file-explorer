import React from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import FileTreeItem from "./FileTreeItem";

export default function FileTree({ treeData = [] }) {
  const renderTree = (nodes) =>
    nodes.map((node) => (
      <FileTreeItem
        key={node.itemId}
        itemId={node.itemId}
        label={node.label}
        type={node.type}
      >
        {node.children && renderTree(node.children)}
      </FileTreeItem>
    ));

  return (
    <SimpleTreeView
      sx={{
        height: "fit-content",
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      {treeData && renderTree(treeData)}
    </SimpleTreeView>
  );
}
