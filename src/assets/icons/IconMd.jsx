import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const IconReadme = ({ size = "", ...props }) => (
  <SvgIcon {...props} style={{ fontSize: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="info">
      <g fill="#231f20">
        <path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"></path>
        <path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"></path>
      </g>
    </svg>
  </SvgIcon>
);

export default IconReadme;
