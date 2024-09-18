import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const IconGitignore = ({ size = "", ...props }) => (
  <SvgIcon {...props} style={{ fontSize: size }}>
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2500"
    >
      <path
        d="M12.7 4.7L16 8l-8 8-2-2v-2.6zM4 4v8L0 8zm7.3-.7L6 8.6V2l2-2z"
        fill="#f60"
      />
    </svg>
  </SvgIcon>
);

export default IconGitignore;
