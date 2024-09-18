import IconEditorConfig from "../assets/icons/IconEditorconfig";
import IconMd from "../assets/icons/IconMd";
import IconJs from "../assets/icons/IconJs";
import IconJson from "../assets/icons/IconJson";
import IconTs from "../assets/icons/IconTs";
import IconJsx from "../assets/icons/IconJsx";
import IconTxt from "../assets/icons/IconTxt";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import IconImage from "../assets/icons/IconImage";
import IconCsv from "../assets/icons/IconCsv";
import IconLock from "../assets/icons/IconLock";
import IconPdf from "../assets/icons/IconPdf";
import IconLog from "../assets/icons/IconLog";
import IconXml from "../assets/icons/IconXml";
import IconPrettierrc from "../assets/icons/IconPrettierrc";
import IconGitignore from "../assets/icons/IconGitignore";
import FolderRounded from "@mui/icons-material/FolderRounded";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const fileIcons = {
  editorconfig: { icon: IconEditorConfig },
  md: { icon: IconMd },
  js: { icon: IconJs },
  json: { icon: IconJson },
  ts: { icon: IconTs },
  tsbuildinfo: { icon: IconTs },
  jsx: { icon: IconJsx },
  txt: { icon: IconTxt },
  cmd: { icon: KeyboardCommandKeyIcon },
  png: { icon: IconImage },
  jpeg: { icon: IconImage },
  csv: { icon: IconCsv },
  lock: { icon: IconLock },
  pdf: { icon: IconPdf },
  log: { icon: IconLog },
  xml: { icon: IconXml },
  prettierrc: { icon: IconPrettierrc },
  gitignore: { icon: IconGitignore },
  folder: { icon: FolderRounded },
  default: { icon: InsertDriveFileIcon },
};

export default fileIcons;
