# Blog-App

This is a blog application developed using React and Ruby. It allows users to create, read, update, and delete blog posts. The application provides a user-friendly interface for managing blog content.

# Features

User Authentication: Users can register, log in, and log out to manage their own blog posts.

Create and Edit Posts: Users can create new blog posts and edit existing ones. They can add a title, content, category, and upload images for their posts.

Categorization: Each blog post can be assigned to a specific category for better organization and navigation.

Search Functionality: Users can search for blog posts using keywords or categories to quickly find relevant content.

Responsive Design: The application is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.

# Technologies Used

The application is built using the following technologies:

Frontend: React, HTML, CSS, JavaScript

Backend: Ruby, Ruby on Rails

Database: SQLITE3

API Integration: Fetch API for making requests to the backend API endpoints.

Routing: React Router for handling client-side routing and navigation.

State Management: React's useState and useEffect hooks for managing component state and side effects.

Authentication: JSON Web Tokens (JWT) for user authentication and authorization.

Image Upload: Integration with a cloud storage service like AWS S3 for handling image uploads.

Styling: CSS and CSS frameworks like Bootstrap or Tailwind CSS for styling the application.

# Getting Started

To run the blog application locally, follow these steps:

Clone the repository: git clone <repository-url>

Navigate to the project directory: cd blog-application

Install dependencies: npm install

Start the development server: npm start

Open your browser and access the application at http://localhost:3000

Note: The frontend is configured to connect to the backend API running on http://localhost:9292. Make sure to set up the backend API
and update the API endpoint accordingly.

# Backend API

The backend API for the blog application is built using Ruby on Rails. It provides the necessary endpoints for managing blog posts, user authentication, and other functionalities. The API follows RESTful principles and supports CRUD operations on blog posts.

# To set up and run the backend API, follow the instructions in the backend repository's README.

## Deployment

The blog application can be deployed to various hosting platforms such as Heroku, AWS, or Netlify. Before deploying, make sure to update the API endpoint in the frontend configuration to match the production backend URL.

Follow the deployment guides provided by the hosting platform of your choice to deploy both the frontend and backend components.

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request. Make sure to follow the project's code of conduct and guidelines for contributing.

# License

The blog application is open-source and released under the MIT License. You are free to use, modify, and distribute the codebase as per the terms of the license.

# Acknowledgements

The blog application was developed as a project for learning purposes, taking inspiration from various online resources and tutorials.
Special thanks to the open-source community for creating and maintaining the libraries and tools used in this project.

# Author

Morris Gitonga.
