# 🎬 Movie Search App

The **Movie Search App** is a simple web application that allows users to search for movies using the Open Movie Database (OMDb) API. It fetches and displays detailed information about movies, including their title, genre, cast, plot, and poster image, based on the user’s input.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

Check out the live demo of the app here:

🔗 [Movie Search App Demo](https://ayuxh-movie-finder.pages.dev/)

---

## Features

- **Movie Search**: Allows users to search for any movie by its title.
- **Detailed Movie Information**: Displays key information such as:
  - Movie Title
  - Genre
  - Cast
  - Plot Summary
  - Movie Poster
- **Error Handling**: Shows an error message when a movie is not found.

## Technologies

This project is built using the following technologies:

- **HTML5**: Structure of the web page.
- **CSS3**: Styling and layout.
- **JavaScript (ES6)**: Logic for fetching data from the OMDb API and rendering the movie information.
- **OMDb API**: A third-party API used to fetch movie data.

---

## Installation

To get this project up and running locally, follow these steps:

### Prerequisites

Make sure you have a modern browser installed.

### Steps

1. **Clone the repository**:
   Open your terminal and run:
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd movie-search-app
   ```

3. **Open the app**:
   Simply open `index.html` in your browser to run the app locally.

---

## Usage

1. When the app is launched, you will see a search bar where you can enter the title of any movie.
2. Type the name of the movie and press the "Search" button.
3. If the movie is found, the following details will be displayed:
   - **Title**
   - **Genre**
   - **Cast**
   - **Plot Summary**
   - **Poster Image**
4. If the movie is not found, an error message will appear.

---

## Project Structure

Here's an overview of the project files:

```bash
Movie Search App/
│
├── index.html       # Main HTML file that structures the app's layout.
├── style.css        # Stylesheet for the app's design and layout.
├── app.js           # JavaScript file for the app's logic and API calls.
└── README.md        # Documentation of the project.
```

### File Descriptions:

- **index.html**: The HTML file defines the app's basic structure, such as the input field, search button, and the section where movie details will be displayed.
- **style.css**: The CSS file styles the app, giving it a clean look with a dark theme, rounded input boxes, and shadow effects.
- **app.js**: This JavaScript file handles user interactions, makes API requests, and dynamically updates the page with the movie details.

---

## API

This app uses the **OMDb API** to fetch movie details.

### OMDb API Key

You'll need an API key from OMDb to fetch movie data. To get your own API key, visit [OMDb API](http://www.omdbapi.com/) and sign up for free.

### Example API Call:

```bash
http://www.omdbapi.com/?apikey=your-api-key&t=Inception
```

- Replace `your-api-key` with your OMDb API key.
- Replace `Inception` with any movie title you want to search for.

---

## Contributing

Contributions are welcome! If you'd like to contribute, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m "Add some feature"
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature-branch
   ```
6. **Open a pull request**.

---

With this **Movie Search App**, you can easily find detailed information about any movie, all in a clean, easy-to-use interface!

---
