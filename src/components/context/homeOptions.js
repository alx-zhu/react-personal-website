import { projectsList } from "./projectsList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderIcon from "@mui/icons-material/Folder";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const AboutMeCards = [
  {
    id: 1,
    images: [
      { src: "images/studyfind-logo.png", alt: "Studyfind Logo" },
      { src: "images/cmu-cs-academy.png", alt: "SCS Logo" },
    ],
    title: "My Current Affiliations",
    text: [
      "Currently, I am working as a part of the CMU CS Academy Outreach team, and am also a Software Developer Intern on the Business Intelligence team at Studyfind. At CS Academy, I help answer helpdesk and teacher account request tickets, create projects for teacher materials and new exercises for students, and co-teach professional development sessions for teachers using CS Academy.",
      "At Studyfind, I work as a part of the Business Intelligence team, in which we work to automate workflows for other Studyfind teams; more specifically, I am currently working on sending automated emails to researchers to improve the marketing team's workflow, and have been working on a file-processor to handle the webscraping and emailing.",
    ],
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
    text: [
      "At Carnegie Mellon, I currently a part of the Information Systems program, and am seeking to complete an additional minor in Computer Science as well. Ultimately, I hope to use my technical education at CMU to address real world issues such as water pollution and accessibility of computer science education.",
      "Though short, my journey has been far from straightforward; as a first-year, I struggled to find passion for my studies as a chemistry major and frequently considered transferring out of CMU. Over my first two semesters, I vacillated between possibilities of transferring to countless different universities, and 5 different majors. However, much to my surprise, I discovered an interest in computer science and found a place as a part of the IS program at Carnegie Mellon. This year, I look forward to beginning a new chapter at CMU, taking classes I am passionate about, and working towards a career that excites me.",
    ],
  },
  {
    id: 3,
    images: [
      {
        src: "images/soccer-team.jpg",
        alt: "Alex's Soccer Team",
      },
      {
        src: "images/all-state-picture.png",
        alt: "NYSSMA Conference All State 2019",
      },
    ],
    title: "My Hobbies",
    text: [
      "Outside of my education, I have always enjoyed playing sports and classical music. For most of my life, I have had the privilege of playing soccer with some of my best friends. Throughout high school, I played soccer as a part of the varsity team for four years -- an experience I will always miss in the coming years. At CMU, I try to play pick-up and intramural soccer as often as possible, and have even found a new interest in volleyball and ultimate frisbee.",
      "Especially in high school, music was a way for me to connect with others in orchestra, and to escape from the stress in the other parts of my life. One of the most important experiences in my life so far, was being a part of the NYSSMA Conference All State Orchestra, which brought about my love for orchestra and gave me some of my most cherished memories and friendships. Some of my favorite classical pieces are Rachmaninoff's Piano Concerto No. 2, Tchaikovsky's Serenade for Strings, and Dvorak's Symphony No. 9.",
    ],
  },
];

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
    content: AboutMeCards,
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
        text: [],
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
    content: [
      {
        id: 1,
        title: "My Contact Information",
        text: [
          "Please contact me for any personal inquiries or job opportunities!",
        ],
        phone: "(919) 610-8845",
        email: "alexanderzhu07@gmail.com",
        linkedin: "https://www.linkedin.com/in/alexander-zhu-129b49237/",
        github: "https://github.com/alx-zhu",
      },
    ],
  },
];
