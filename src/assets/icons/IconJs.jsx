import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const IconJs = ({ size = "", ...props }) => (
  <SvgIcon {...props} style={{ fontSize: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="js">
      <g>
        <path fill="#985a23" d="M11 3h46v54H11z"></path>
        <path fill="#f7fcff" d="M53 17v44H7V7h36l10 10z"></path>
        <path fill="#facf5b" d="M7 7v18h46v-8L43 7H7z"></path>
        <path fill="#cb782e" d="M53 17h-8a2 2 0 0 1-2-2V7Z"></path>
        <g fill="#1e120b">
          <path d="M24 10a1 1 0 0 0-1 1v7a2 2 0 0 1-4 0 1 1 0 0 0-2 0 4 4 0 0 0 8 0v-7a1 1 0 0 0-1-1zm19 32a2 2 0 0 1-2-2v-2a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v2a3.99 3.99 0 0 0 1.357 3A3.99 3.99 0 0 0 39 46v2a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-2a2 2 0 0 1 2-2 1 1 0 0 0 0-2zm-22-4a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v2a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v2a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-2a3.99 3.99 0 0 0-1.357-3A3.99 3.99 0 0 0 21 40z"></path>
          <circle cx="30" cy="40" r="1"></circle>
          <path d="M30 45a1 1 0 0 0-1 1 1 1 0 0 1-1 1 1 1 0 0 0 0 2 3 3 0 0 0 3-3 1 1 0 0 0-1-1zm.5-33H32a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-1.5a3.5 3.5 0 0 0 0 7h1a1.5 1.5 0 0 1 0 3H30a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3h1.5a3.5 3.5 0 0 0 0-7h-1a1.5 1.5 0 0 1 0-3z"></path>
          <circle cx="53" cy="43" r="1"></circle>
          <path d="M57 2H11a1 1 0 0 0-1 1v3H7a1 1 0 0 0-1 1v54a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM8 8h34v7a3 3 0 0 0 3 3h7v6H8Zm36 7V9.414L50.586 16H45a1 1 0 0 1-1-1Zm12 41h-2v-9a1 1 0 0 0-2 0v13H8V26h44v13a1 1 0 0 0 2 0V17a1 1 0 0 0-.293-.707l-10-10A1 1 0 0 0 43 6H12V4h44Z"></path>
        </g>
      </g>
    </svg>
  </SvgIcon>
);

export default IconJs;
