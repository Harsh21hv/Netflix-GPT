<h1>Netflix-GPT</h1> 
<br/>
Netflix-GPT is a movie search application that leverages React.js, Redux Toolkit, Firebase, OpenAI API, and TMDB API for an immersive movie search experience. The project is styled using Tailwind CSS to ensure a clean and responsive user interface.

Table of Contents
Features
Installation
Usage
Technologies Used
Project Structure
Contributing
License
Features
Movie Search: Utilizes the power of OpenAI API and TMDB API for intelligent and context-aware movie searches.
User Authentication: Firebase authentication ensures secure user authentication.
User Validation: Implements user validation to ensure a secure and authorized user experience.
Language Selection: Allows users to change the language of the application for a personalized experience.
Redux State Management: Employs Redux Toolkit for efficient state management in the application.
Responsive Design: The application is designed to be responsive using Tailwind CSS, providing a seamless experience across devices.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Harsh21hv/Netflix-GPT.git
cd Netflix-GPT
Install dependencies:

bash
Copy code
npm install
Set up Firebase:

Create a Firebase project on the Firebase Console.

Add a web app to your project.

Copy the configuration object from the Firebase project settings.



-API key from the OpenAI API.


Get TMDB API key:

Sign up on TMDB to get an API key.

Add the TMDB API key to your .env file:

env
Copy code
REACT_APP_TMDB_API_KEY=your-tmdb-api-key
Start the development server:

bash
Copy code
npm start
Usage
Visit http://localhost:3000 in your browser to use the Netflix-GPT application. Sign in or create an account to start searching for movies. Use the language selection feature to personalize your experience.

Technologies Used
React.js
Redux Toolkit
Firebase (Authentication)
OpenAI API
TMDB API
Tailwind CSS
Project Structure
lua
Copy code
Netflix-GPT/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- containers/
|   |-- features/
|   |-- services/
|   |-- App.js
|   |-- index.js
|-- .env
|-- .gitignore
|-- package.json
|-- README.md
|-- ...
Contributing
Contributions are welcome! If you would like to contribute to the project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.
