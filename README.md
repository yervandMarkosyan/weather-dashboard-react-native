# 🌦️ Weather Dashboard

A full-stack weather dashboard built using React Native for the mobile frontend and Node.js with Express in TypeScript for the backend. It fetches real-time weather data from external APIs and displays it in a clean, responsive mobile interface. This project was developed to practice modern cross-platform development with a focus on API integration, component-based architecture, and backend data handling.

## 🚀 Technologies Used

- React Native (Expo or CLI)
- TypeScript
- Node.js + Express
- Axios
- OpenWeatherMap API

## 📦 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yervandMarkosyan/weather-dashboard-react-native.git
cd weather-dashboard-react-native
```

### 2. Install dependencies for frontend

```bash
cd Weather
npm install
```

### 3. Install dependencies for backend

```bash
cd ../Weather_Backend
npm install
```

### 4. Start the backend server

```bash
npm run dev
```

### 5. Start the React Native app

```bash
npx react-native start
npx react-native run-android
```
## 🔗 API Integration

The app communicates with the backend to fetch weather data from the OpenWeatherMap API. The backend handles API requests, caching, and error management to ensure smooth performance.
