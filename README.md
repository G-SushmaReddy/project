# Donato - Food Waste Reduction Platform

Donato is a platform designed to reduce food waste by connecting individuals and organizations with surplus food to food banks and charity organizations. This README provides an overview of the platform, its features, and the technologies used in its development.

## Features

### User Authentication
- Users can create an account or log in to an existing account.
- Authentication ensures that only registered users can access certain features of the platform.

### Posting System
- Users can create posts to share information about surplus food they have.
- Posts include details such as the type of food, quantity available, and location.
- Users can also browse and respond to posts from others to request or offer food.

### Food Request Form
- Users in need of food can fill out a request form specifying their requirements.
- This form helps match individuals or organizations with surplus food to those who need it.

### Chat Functionality
- Users can communicate with each other through a chat feature.
- This allows for real-time communication and coordination between users regarding food sharing.

### User Profiles
- Each user has a profile where they can manage their posts, requests, and chat history.
- Profiles provide a centralized location for users to track their activity on the platform.

## Technologies Used

### Frontend
- React: A JavaScript library for building user interfaces.
- HTML/CSS: Standard web technologies for structuring and styling the user interface.
- Redux: A state management library for managing application state in React applications.

### Backend
- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A web application framework for Node.js, used for building RESTful APIs.
- MongoDB: A NoSQL database used to store user data, posts, and other information.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, used to simplify interactions with the database.

## Getting Started

To run the Donato Food Waste Reduction Platform locally, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/Madhunicka/Donato-FoodWaste_Reduction_platform.git`
2. Navigate to the project directory: `cd Donato-FoodWaste_Reduction_platform`
3. Install dependencies for both the frontend and backend:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
4. Set up the MongoDB database:
   - Create a MongoDB database and obtain the connection URI.
   - Update the `.env` file in the `frontend` directory with your MongoDB connection URI.
5. Start the backend server: `cd backend && npm start`
6. Start the frontend development server: `cd frontend && npm start`
7. Access the platform in your web browser at `http://localhost:3000`

## Contributing

Contributions to the Donato Food Waste Reduction Platform are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code for both commercial and non-commercial purposes.
