# React Movie App

Welcome to the **React Movie App** repository! This project is a fully functional movie browsing application built using React. It allows users to search for movies, view movie details, and manage a personal watch list. Additionally, users can register and log in to save their watch list across sessions. 

## Features

- **Movie Browsing**: Display a list of movies with their titles and descriptions.
- **Search Functionality**: Search for movies by title.
- **Watch List Management**: Add and remove movies from your watch list.
- **User Authentication**: Register and log in using Redux for state management.
- **Routing**: Navigate through different pages using React Router.
- **Code Splitting**: Improve performance with React Lazy and Suspense.

## Technologies Used

- **React**: Front-end library for building the user interface.
- **Axios**: For making HTTP requests to the movie database API.
- **React Router**: For handling navigation between different components and pages.
- **React Lazy and Suspense**: For code splitting and lazy loading of components.
- **Redux**: For managing the application state, including user authentication.
- **Context API**: For managing global state across components without prop drilling.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/RannaEhab/React-Movie-App.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd react-movie-app
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the App

1. **Start the development server**:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `src/`: Main source directory
  - `components/`: Contains all the React components
  - `redux/`: Redux store, actions, and reducers
  - `context/`: Context API providers and hooks
  - `pages/`: Different page components for routing
  - `App.js`: Main App component
  - `index.js`: Entry point of the application

## Usage

- **Browsing Movies**: Browse the list of available movies on the home page.
- **Searching**: Use the search bar at the top to find specific movies by their title.
- **Adding to Watch List**: Click the "Add to Watch List" button on a movie card to add it to your personal watch list.
- **Managing Watch List**: View and manage your watch list by navigating to the "Watch List" page.
- **User Registration**: Register a new account by filling out the registration form.
- **User Login**: Log in to your account to save and retrieve your watch list.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the existing code style and include relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Special thanks to the contributors of the open-source libraries and APIs used in this project.

## Contact

For any questions or suggestions, please open an issue or contact the repository owner.

---
