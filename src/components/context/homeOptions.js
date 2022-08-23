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
    iconColor: "#6495ED",
    img: {
      src: "images/graduation.jpg",
      alt: "Graduation Picture",
    },
    content: [],
  },
  {
    id: "resume",
    title: "Current Resume",
    Icon: DescriptionIcon,
    iconColor: "#925d7b",
    content: [
      {
        id: 1,
        title: "05/04/2022 Resume",
        link: "https://drive.google.com/file/d/1aXwuas3yNbge5hBYlKARo-02s4dp7PLo/preview",
        text: "",
      },
    ],
  },
  {
    id: "recent-projects",
    title: "Recent Projects",
    Icon: FolderIcon,
    iconColor: "#f1d592",
    content: projectsList.slice(0, 3),
  },
  {
    id: "pinned-projects",
    title: "Pinned Projects",
    Icon: PushPinIcon,
    iconColor: "#ea4335",
    content: projectsList.filter((p) => p.pinned),
  },
  {
    id: "contact",
    title: "Contact Me",
    Icon: LocalPhoneIcon,
    iconColor: "#77dd77",
    content: [],
  },
];

const AboutMeCards = [
  {
    id: 1,
    images: [
      { src: "images/studyfind-logo.png", alt: "Studyfind Logo" },
      { src: "images/cmu-cs-academy.png", alt: "SCS Logo" },
    ],
    title: "My Current Affiliations",
    text: "I love to play soccer, and spent several years playing with my closest friends in high school. Music is also especially important in my life, as I have played piano and violin since elementary school.",
    vertical: true,
  },
  {
    id: 2,
    images: [
      {
        src: "images/cmu-logo-filled.jpg",
        alt: "Carnegie Mellon University Logo",
      },
    ],
    title: "My Education",
    text: "I am currently a part of the Information Systems at Carnegie Mellon University, with the goal of applying my computer science education to solving real-world issues that I am passionate about, such as increasing the availability of computer science education in primary and secondary schools. To fulfill these goals, I am currently working as a part of the CMU Computer Science Academy Outreach Team",
  },
  {
    id: 3,
    images: [
      {
        src: "images/soccer-team.jpg",
        alt: "Alex's Soccer Team",
      },
    ],
    title: "My Hobbies",
    text: "I love to play soccer, and spent several years playing with my closest friends in high school. Music is also especially important in my life, as I have played piano and violin since elementary school.",
  },
];
