// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ff71ce, #01cdfe	, #05ffa1	, #b967ff	, #fffb96",
  firstName: "Ayush",
  middleName: "",
  lastName: "Chakraborty",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/aiy-wish",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ayush-chakraborty/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/aiy_wish",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/About2.png"),
  imageSize: 375,
  message:
    "My name is Ayush Chakraborty. I’m a graduate of 2021 from the University of Maryland - College Park with a degree in Computer Science. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "aiy-wish", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['stockets', 'musico-flask-app', 'Chord-Dictionary','HealthApp','VR_Locomotion'],
};

const career = {
  show: true,
  heading: "Career",
  lists: [
    {
      CompanyName: "flydubai",
      Address: "Dubai, United Arab Emirates",
      Title: "DevOps/Big Data Intern",
      Time: "June 2019 - August 2019",
      Descriptions: ['Built a statistical model using Python to compare competitor’s performance for airline market research and worked on intelligence gathering tool to analyze competitor’s performance.'],
      TechStack: ["Python, R Azure DevOps, Jenkins, Cloudera"]
    }
  ]
};
const education = {
  show: true,
  heading: "Education",
  lists: [
    {
      university: "Dartmouth College",
      degree: "Master of Science in Quantitative Biomedical Sciences",
      time: "August 2021 - December 2022",
      description:"Incoming Student"
    },
    {
      university: "University of Maryland - College Park",
      degree: "Bachelor of Science in Computer Science",
      time: "August 2017 - May 2021",
      description:"Graduated with a minor in Statistics"
    }]
  };


// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for zyyy! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "c_ayush@outlook.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'DevOps/Big Data Intern',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    }
  ]
}

// Blog SECTION
const blog = {
   show: true,
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog , career, education};
