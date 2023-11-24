import mydiary from "../assets/img/mydiary-project.webp";
import todo from "../assets/img/simple-todoList.webp";
import kuliner from "../assets/img/kuliner.webp";
const projectData = [
  {
    id: 1,
    title: "MyDiary",
    image: mydiary,
    description:
      "MyDiary is a web application project that I built with the main function of storing user's daily notes. this project is my first React project when I learned in dicoding, this project used to be called catatan-pribadi-app and now I rebuild this catatan-pribadi-app project with a little adjustment from what I learned. \n\n In this MyDiary project, users can record activities or events that occur every day and store them in the MyDiary web application. Then, the daily notes can be accessed again in the future. All of this is designed to help users rec.ord every precious moment of their lives and keep it easily accessible in the future. \n\n I think this project may not be perfect, so I would like to invite you to visit this MyDiary project and provide feedback or constructive criticism and suggestions to improve this MyDiary project and the way I work in building future projects. Thank you for your time, I hope you enjoy looking at my MyDiary project.",
    url: "http://arif3ana.github.io/MyDiary/#/",
  },
  {
    id: 2,
    title: "To-Do List",
    image: todo,
    description:
      "The 'simple-todoList' project is a simple web application designed to help users create and organize daily to-do lists. This web application is designed to increase user productivity in an efficient and easy-to-use way. \n\n I developed this web application using localstorage, a browser feature that allows users to store data on the client side without the need for an external server or database. Thus, the data entered by the user, including the daily to-do list in this project, is stored locally on the user's device or browser. \n\n This project is built using only HTML, CSS, and JavaScript, making it a simple yet effective way to help users manage their daily tasks. Despite its simplicity, I hope this project will provide significant benefits to users. \n\n I urge you to take a look at this project and provide valuable feedback. Constructive opinions, criticism, and suggestions will be greatly appreciated as they will help me improve this project and my development skills. Thank you for your time and I hope you enjoy viewing my project. \n\n User Guide : \n\n# Adding a new task : \n\n - Click on the line to the left of the 'Submit' button. \n\n - Type the task you want to add. \n\n - Click the Submit button. \n\n # Mark a Task Complete : \n\n - Click the task you want to mark as complete. \n\n # Delete all completed tasks : \n\n - When all tasks have been completed or checked off, the 'All Tasks List is Complete' button will appear, click the button to delete all tasks. \n\n Usage Tips : \n\n # Prioritize tasks : \n\n Use this application to prioritize your daily tasks by entering the most important tasks or those that should be completed first. \n\n # Consistently mark completed : \n\n Marking completed tasks helps you track your progress and feel good about your accomplishments.",
    url: "http://arif3ana.github.io/simple-todoList",
  },
  {
    id: 3,
    title: "Kreatif Kuliner",
    image: kuliner,
    description:
      "The Kreatif Kuliner project is my personal journey in developing web development skills. Starting with the desire to create a simple blog, this project has evolved into a platform focused on food recipes. My main goal is to improve my web development skills, with the hope that this project can be a concrete proof of this development. \n\n In designing this project, I chose not to get too hung up on specific details, leaving room for exploration and discovery. The use of Mongodb, Expressjs, Reactjs (for the frontend) and Nodejs technologies shows my commitment to a holistic understanding of web technologies. \n\n As a web development project, challenges arose in implementing key features such as the JWT token-based authentication system and image upload to Cloudinary. These obstacles were not only a test of my technical skills, but also valuable opportunities to learn and grow. \n\n In this project, I have tried to provide tangible benefits, especially for those who are interested in cooking. Through the discussion of food recipes, this project hopes to provide inspiration and guidance for those who want to expand their cooking skills. \n\n The 'Kreatif Kuliner' project is the result of individual work without the involvement of external parties. I measure the success metrics with a score of 6 or 7 on a scale of 10, reflecting the minimum viable product concept as a first step that can be improved. \n\n Although the project planning still needs to be evaluated and improved, I feel that this project has made a positive contribution to my web development portfolio. I hope that this project will not only be a testament to my expertise in web development, but also a source of inspiration for those with similar interests.",
    url: "https://kreatifkuliner.vercel.app",
  },
];

const reviewer = [
  {
    id: "",
    name: "",
    position: "",
    content: "",
    image: "",
  },
];

export { projectData, reviewer };
