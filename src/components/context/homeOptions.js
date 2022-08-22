import { projectsList } from "./projectsList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderIcon from "@mui/icons-material/Folder";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const homeOptions = [
  {
    id: "about-me",
    title: "A Little Bit About Me",
    Icon: AccountCircleIcon,
    img: {
      src: "images/graduation.jpg",
      alt: "Graduation Picture",
    },
    content: [],
  },
  {
    id: "cv",
    title: "Current CV",
    Icon: DescriptionIcon,
    img: {
      src: "images/resume-img.png",
      alt: "Resume Img",
    },
    content: [],
  },
  {
    id: "recent-projects",
    title: "Recent Projects",
    Icon: FolderIcon,
    img: {
      src: "images/icons/folder.png",
      alt: "Folder Icon",
    },
    content: projectsList.slice(0, 3),
  },
  {
    id: "pinned-projects",
    title: "Pinned Projects",
    Icon: PushPinIcon,
    img: {
      src: "images/icons/pin.png",
      alt: "Pin Icon",
    },
    content: projectsList.filter((p) => p.pinned),
  },
  {
    id: "contact",
    title: "Contact Me",
    Icon: LocalPhoneIcon,
    img: {
      src: "images/icons/contact.jpg",
      alt: "Contact Icon",
    },
    content: [],
  },
];
