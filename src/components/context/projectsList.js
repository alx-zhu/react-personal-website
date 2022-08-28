export const projectsList = [
  {
    id: 8,
    pinned: true,
    img: {
      src: "images/projects/react-personal-website.png",
      alt: "React Personal Website Home Page",
    },
    title: "React Personal Website",
    date: "08/05/2022",
    languages: "JavaScript, React, Styled Components",
    github: "https://github.com/alx-zhu/react-personal-website",
    text: [
      "Personal portfolio and website created using React and Styled Components. This project is still currently in progress and will continue to be maintained and updated over time. The website is optimized for full-screen viewing, with smaller window sizes being incorporated. All designs and structures on the website were created by Alexander Zhu with inspiration from https://material.io/design/color/dark-theme.html for colors and themes.",
    ],
    clickable: true,
  },
  {
    id: 7,
    pinned: true,
    img: {
      src: "images/icons/folder.png",
      alt: "Folder Icon",
    },
    title: "Studyind File Processor",
    date: "08/01/2022",
    languages: "Python, Python OS, Pandas, Google Drive API",
    github: "https://github.com/alx-zhu-studyfind/file-processor",
    text: [
      "Created as a part of the Business Intelligence team at Studyfind, this application allows users to process files downloaded from the clinicaltrials.gov website to prepare for emailing. The application uses the Python os library to create folders and files, as well as move files into organized folders. The file processor allows for multiple files to be processed at once, and gives users several customizable options that enable file splitting, file deletion, automatic emailing, and webscraping. I actively used this file processor at Studyfind to process files and send emails to lists of researchers scraped from these files, with the goal of expanding the emailing list of Studyfind and reaching potentially interested groups.",
    ],
    clickable: true,
  },
  {
    id: 6,
    pinned: true,
    img: {
      src: "images/projects/react-todo-list.png",
      alt: "React Todo List",
    },
    title: "React Todo List",
    date: "06/14/2022",
    languages: "JavaScript, CSS, React",
    github: "https://github.com/alx-zhu/todo-list",
    text: [
      "The React To-do List was created as a part of the Studyfind curriculum to learn and practice using React in frontend web applications, and was my first experience creating my own React app.",
      "The to-do list requirements were as follows: application must be able to 1) Add tasks to list, 2) Add deadline for each task, 3) Check off tasks, 4) Sort tasks by name, 5) Sort tasks by deadline, 6) Toggle visibility of completed tasks, 7) Filter tasks by day. Design inspired by Traversy Media's Expense Tracker: https://www.youtube.com/watch?v=XuFDcZABiDQ.",
    ],
    clickable: true,
  },
  {
    id: 5,
    img: {
      src: "images/projects/js-todo-list.png",
      alt: "JS Todo List",
    },
    title: "JS Todo List",
    date: "05/24/2022",
    languages: "HTML, JavaScript, CSS",
    github: "https://github.com/alx-zhu/todo-list",
    text: [
      "To-do list created using HTML, CSS, and Javascript as a part of the Studyfind curriculum. This project marked my first time combining JavaScript with HTML and CSS and opened a window into more interactive websites. This to-do list was inspired by Kevin Powell's collaboration with Web Dev Simplified: https://github.com/kevin-powell/todo-list-collab. The to-do list allows users to create multiple lists as well as add tasks and deadlines.",
      "The to-do list requirements were as follows: application must be able to 1) Add tasks to list, 2) Add deadline for each task, 3) Check off tasks, 4) Sort tasks by name, 5) Sort tasks by deadline, 6) Toggle visibility of completed tasks, 7) Filter tasks by day.",
    ],
    clickable: true,
  },
  {
    id: 4,
    img: {
      src: "images/projects/html-css-website.png",
      alt: "HTML Personal Website Home Page",
    },
    title: "HTML/CSS Personal Website",
    date: "05/09/2022",
    languages: "HTML, CSS",
    github: "https://github.com/alx-zhu/html-personal-website",
    text: [
      "This HTML/CSS Personal Website was created as a part of the Studyfind Curriculum, and was my very first experience coding a full website. The project required the creation of a Home, About, and Contact page that incorporate elements we had learned including Flexbox and Grid elements, links, inputs, buttons, and images. The initial design was inspired by Traversy Media's Responsive Website video: https://www.youtube.com/watch?v=p0bGHP-PXD4.",
    ],
    clickable: true,
  },
  {
    id: 3,
    img: {
      src: "images/projects/cave-generator.png",
      alt: "Cave Generator",
    },
    title: "Cell Automata Cave Generator",
    date: "05/06/2022",
    languages: "Python, CMU Graphics",
    github: "https://github.com/alx-zhu/CaveGenerator",
    text: [
      "After a semester away from programming in Python, this project was my first step back into Python in the spring semester. Inspired by my friend's 15-112 Term Project game which used procedural cave generation, I spent time researching Conway's Game of Life and the implementation of Cellular Automata. Following articles about Cellular Automata, I coded this cave-generator and created an animation using the CMU Graphics package. The code in this project was not copied, and was instead, written from scratch as I followed instructional articles about cell automata.",
    ],
    clickable: true,
  },
  {
    id: 2,
    pinned: true,
    img: {
      src: "images/projects/labyrinth-thumbnail.png",
      alt: "Andy's Labyrinth Thumbnail",
    },
    title: "Andy's Labyrinth",
    date: "12/02/2021",
    languages: "Python, CMU Graphics",
    github: "https://github.com/alx-zhu/AndysLabyrinth",
    text: [
      "Andy's Labyrinth was created for my 15-112 Term Project at CMU. The game was inspired by Rogue-like games such as Dungreed and Hades that have become increasingly popular over the last few years. Using Python and the CMU Graphics package, I created from scratch a dungeon crawler game that incorporated platforming into the gameplay. All motion/physics/gravity was coded from scratch, and I implemented Prim's Algorithm to generate randomized mazes for players to navigate through. The central goal of the game is to progress through the maze by defeating enemies and platforming. After each death, or completion of the maze, the game scales in difficulty and the player continues to play.",
    ],
    clickable: true,
  },
  {
    id: 1,
    pinned: true,
    img: {
      src: "images/projects/pgpatch-thumbnail.png",
      alt: "The Pacific Garbage Patch",
    },
    title: "The Pacific Garbage Patch",
    date: "06/22/2021",
    languages: "Unity Game Engine, C#",
    github: "https://github.com/alx-zhu/ThePacificGarbagePatch",
    text: [
      "This large-scale project was created as a part of the Xylem Ignite Program. Alongside 1 other student, our goal was to 'gamify' water data in order to make the data more interactive and easier to understand. The process of creating this project began in March of 2020, limited to remote meetings due to COVID-19, and required us to meet with Xylem mentors 1-2 times a week to discuss our development process. Beginning in August 2020, we decided on creating a water-conservation video game and began following an agile development process in which we created Figma wireframes and Google presentations to discuss ideas in weekly Xylem meetings. Through administration of surveys, we were able to gather information about the most effective features and information to include in the game. Before beginning development, we decided that I would handle programming the game, while my partner would handle creating all of the artwork. To do so, I learned C# and the Unity Game Engine in September-October of 2020 and began development of the game in November 2020.",
      "The final game was targeted towards a middle-school aged audience and incorporated an evolving marine-habitat that users could progress and evolve over time by saving water in the real world. Users are able to record their water usage and set water usage limits in the app (added with a 3rd student's help) and could purchase a variety of fish and new marine environments. Users could also earn progression points by playing minigames that included facts about plastic pollution and oil spills. The project was completed in June 2021, and was presented to the Executive Board at Xylem.",
    ],
    clickable: true,
  },
];
