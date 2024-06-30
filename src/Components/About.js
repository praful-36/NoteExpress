import React from 'react';

const About = () => {

  const mystyle = {
       backgroundColor: "rgb(50 58 66)",
    borderRadius: "23px",
    color: "white",
    padding: "20px",
    margin: "20px auto",
    width: "70%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  };

  return (
    <div className='container' style={mystyle}>
      <h1 className="display-4 text-center mb-4">About NoteExpress App</h1>

      <section>
        <h2>Overview</h2>
        <p>This project is a comprehensive and interactive notebook application built using modern web technologies, including React, MongoDB, Express, and Bootstrap. It offers users an efficient way to manage their notes and ideas.</p>
      </section>
      <hr className="my-4" />

      <section>
        <h2>Purpose</h2>
        <p>The purpose of this project is to provide a seamless and user-friendly notebook experience. Users can create, read, update, and delete notes effortlessly, making it a perfect tool for organizing thoughts, writing code snippets, and managing tasks.</p>
      </section>
      <hr className="my-4" />

      <section>
        <h2>Key Features</h2>
        <ul className="list-group">
          <li className="list-group-item"><strong>Note Management:</strong> The application allows users to create, read, update, and delete notes. This ensures that users can keep their notes organized and up-to-date.</li>
          <li className="list-group-item"><strong>Markdown Support:</strong> Users can write notes using Markdown, which enables them to format text easily, include links, images, and code snippets. Markdown enhances the readability and structure of notes.</li>
          <li className="list-group-item"><strong>Code Snippets:</strong> Users can save and manage code snippets, making it an ideal tool for developers who need to keep track of reusable code or fragments they are working on.</li>
          <li className="list-group-item"><strong>User Authentication:</strong> The application features a secure sign-up and login system, ensuring that user data is protected. Only authenticated users can access their personalized notes.</li>
          <li className="list-group-item"><strong>Responsive Design:</strong> Built with Bootstrap, the application has a fully responsive layout, providing an optimal viewing experience on any device, whether it's a desktop, tablet, or smartphone.</li>
          <li className="list-group-item"><strong>Personalized Experience:</strong> Each user has a personalized dashboard where they can manage their notes. This feature helps users to have a clutter-free and organized workspace.</li>
        </ul>
      </section>
      <hr className="my-4" />

      <section>
        <h2>Technologies Used</h2>
        <ul className="list-group">
          <li className="list-group-item"><strong>React:</strong> A powerful JavaScript library for building user interfaces. React enables the creation of reusable UI components, making the application more modular, maintainable, and efficient. React’s state management and lifecycle methods help in building dynamic and interactive user experiences.</li>
          <li className="list-group-item"><strong>MongoDB:</strong> A NoSQL database that stores data in flexible, JSON-like documents. MongoDB is used for its scalability and performance, allowing the application to handle large amounts of data efficiently. It supports indexing, querying, and aggregation of data, providing a robust backend for the application.</li>
          <li className="list-group-item"><strong>Express:</strong> A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express is used to build the server-side logic of the application, handling API requests, middleware, and routing.</li>
          <li className="list-group-item"><strong>Bootstrap:</strong> A popular CSS framework for developing responsive and mobile-first websites. Bootstrap is used to style the application, providing a clean and modern look. Its grid system and pre-built components help in designing a consistent and responsive user interface.</li>
        </ul>
      </section>
      <hr className="my-4" />

      <section>
        <h2>Author</h2>
        <p>
          <strong>Name:</strong> Praful Ramesh Gosavi<br />
          <strong>Email:</strong> <a href="mailto:gosavipraful2@gmail.com">gosavipraful2@gmail.com</a><br />
          <strong>GitHub:</strong> <a href="https://github.com/praful-36" target='_blank' rel='noopener noreferrer'>https://github.com/praful-36</a>
        </p>
      </section>
    </div>
  );
};

export default About;
