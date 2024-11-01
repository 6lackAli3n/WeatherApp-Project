# Weather App

Welcome to the Weather App! This app allows users to search for current weather and forecast details for any city worldwide. Built with a focus on usability and responsive design, the app provides real-time weather data, hourly forecasts, and weather conditions in an easy-to-navigate interface.

![Weather App Demo]

![Weather App - Google Chrome 31_10_2024 21_36_00](https://github.com/user-attachments/assets/dbb418e3-6629-4986-982a-3b4a83f111e7)


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Weather Data**: Get the current temperature, weather conditions, and an hourly forecast.
- **Responsive Design**: Optimized for desktop and mobile devices with a scrollable forecast.
- **Error Handling**: Displays helpful messages for invalid city names or connectivity issues.
- **Clean UI**: Easy-to-use interface with intuitive navigation and clear visual representation of weather data.

## Technologies Used

- **HTML5** and **CSS3**: Structure and styling.
- **JavaScript (ES6)**: Dynamic behavior and data fetching.
- **Weather API**: Retrieves real-time weather data and forecast information.
- **Version Control**: Managed using Git and GitHub for versioning and collaboration.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/6lackAli3n/weather-app.git
   cd weather-app
2. Open index.html in your browser to launch the app locally.

## API Key Setup
- Replace any placeholder API key or add your API key directly in script.js:
  ```bash
  const apiKey = 'MY_API_KEY';
- Note: Register for an API key from the weather API provider to access weather data.

## Usage
- Enter the name of a city in the search box.
- Click the "Search" button to display current weather data and a scrollable hourly forecast.
- Scroll through the forecast to view upcoming weather conditions.
  
## Project Structure
- weather-app
  ```bash
  index.html           # Main HTML file
  style.css            # CSS styles
  script.js            # JavaScript logic
  README.md            # Project documentation
  
## Challenges and Learnings
- API Integration: Implemented and handled asynchronous data fetching, including error handling.
- Responsive Design: Adjusted elements to ensure they appear correctly across different screen sizes.
- Error Handling: Improved user experience by displaying relevant error messages.

## Future Improvements
- Local Storage: Store recent searches to allow users to quickly re-select previous cities.
- Additional Data: Include extra information such as air quality, wind speed, and humidity.
- Dark Mode: Provide a dark mode option for better user experience at night.

## Contributing
- Contributions are welcome! Feel free to submit a pull request or open an issue to discuss potential changes.
