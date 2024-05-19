import reactLoogo from "../assets/Images/reactLogo.png";
import dsaLogo from "../assets/Images/dsaLogo.png";
import nodejsLogo from "../assets/Images/nodejsLogo.png";
import databaseLogo from "../assets/Images/databaseLogo.png";
import javascriptLogo from "../assets/Images/jsLogo.png";
import nextjsLogo from "../assets/Images/nextjsLogo.png";
// import javascript from "../assets/Images/javascript.png";


export const questionBankData = [
  {
    categoryId: 1,
    categoryName: "Javascript",
    categoryIcon: javascriptLogo,
    disabled: false,
    questionAnswers: [
      {
        questionId: 1,
        question: "What is Javascript?",
        answer: "Javascript is a high-level, interpreted programming language. It is a client-side scripting language that allows you to add interactivity to web pages. ",
        image: ""
      },
      {
        questionId: 2,
        question: "What is a function in Javascript?",
        answer: "A function in Javascript is a block of code that performs a specific task. It is reusable and can be called multiple times.",
        image: ""
      },
      {
        questionId: 3,
        question: "What is the difference between let and var in Javascript?",
        answer: "The main difference between let and var in Javascript is the scope of the variables. Let has block scope, while var has function scope. ",
        image: ""
      }
    ]
  },
  {
    categoryId: 2,
    categoryName: "React",
    categoryIcon:reactLoogo,
    disabled: false,
    questionAnswers: [
      {
        questionId: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
        image: ""
      },
      {
        questionId: 2,
        question: "What are components in React?",
        answer: "Components in React are reusable UI elements.",
        image: ""
      },
      {
        questionId: 3,
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.",
        image: ""
      }
    ]
  },
  {
    categoryId: 3,
    categoryName: "Data Structures",
    categoryIcon: dsaLogo,
    disabled: true,
    questionAnswers: [
      {
        questionId: 1,
        question: "What is a stack?",
        answer: "A stack is a data structure that follows the Last In, First Out (LIFO) principle.",
        image: ""
      },
      {
        questionId: 2,
        question: "What is a queue?",
        answer: "A queue is a data structure that follows the First In, First Out (FIFO) principle.",
        image: ""
      },
      {
        questionId: 3,
        question: "What is a binary search tree?",
        answer: "A binary search tree is a data structure that allows efficient searching, insertion, and deletion of elements.",
        image: ""
      }
    ]
  },
  {
    categoryId: 4,
    categoryName: "Node.js",
    categoryIcon: nodejsLogo,
    disabled: true,
    questionAnswers: [
      {
        questionId: 1,
        question: "What is Node.js?",
        answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server.",
        image: ""
      },
      {
        questionId: 2,
        question: "What is the difference between Node.js and browser JavaScript?",
        answer: "Node.js allows you to run JavaScript on the server, while browser JavaScript is executed in the browser.",
        image: ""
      },
      {
        questionId: 3,
        question: "What is npm?",
        answer: "npm is the package manager for Node.js that allows you to install and manage third-party libraries and modules.",
        image: ""
      }
    ]
  },
  {
    categoryId: 5,
    categoryName: "Database",
    categoryIcon: databaseLogo,
    disabled: true,
    questionAnswers: [
      {
        questionId: 1,
        question: "What is a database?",
        answer: "A database is a collection of organized data that is used to store and manage information.",
        image: ""
      },
      {
        questionId: 2,
        question: "What is SQL?",
        answer: "SQL stands for Structured Query Language and is a programming language used to interact with databases.",
        image: ""
      },
      {
        questionId: 3,
        question: "What is indexing in a database?",
        answer: "Indexing is a technique used to speed up the retrieval of data from a database by creating a data structure that allows for efficient searching.",
        image: ""
      }
    ]
  },
  {
    categoryId: 6,
    categoryName: "Next.js",
    categoryIcon: nextjsLogo,
    disabled: true,
    questionAnswers: [
      {
        questionId: 1,
        question: "What is Next.js?",
        answer: "Next.js is a popular framework for building server-rendered React applications.",
        image: ""
      },
      {
        questionId: 2,
        question: "What are the advantages of using Next.js?",
        answer: "Next.js provides powerful features such as server-side rendering, static site generation, and automatic code splitting.",
        image: ""
      },
      {
        questionId: 3,
        question: "What is the difference between a page and a component in Next.js?",
        answer: "A page is a server-rendered component that is responsible for rendering the initial HTML of a web page, while a component is a reusable UI element that can be used within a page.",
        image: ""
      }
    ]
  }
];
