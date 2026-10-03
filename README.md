# FitProgress – Personal Fitness Progress Tracker

## Problem Statement

Many people track their fitness progress using notebooks or separate apps. This makes it difficult to keep weight, daily steps, workouts, and goals together in one place.

FitProgress is a simple web application that allows users to record and view their fitness progress in one place.

## Project Objective

The objective of FitProgress is to create a simple and responsive fitness tracking application using React and Express.js.

The application allows users to:

- View their current fitness statistics
- Record weight and daily steps
- Record whether a workout was completed
- View progress history
- Delete progress records
- Track progress toward a target weight

## Features

- Dashboard with fitness statistics
- Add Progress form
- Progress History
- Delete progress records
- Daily step tracking
- Workout tracking
- Goal Progress Calculator
- Responsive design
- React client-side routing
- Express.js REST API

## Technologies Used

### Frontend

- React
- Vite
- React Router
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- CORS

## React Concepts Used

- Functional Components
- Class Component
- Parent-Child Components
- Props
- useState
- useEffect
- Event Handling
- Form Handling
- Client-Side Routing

## Custom Modifications

### 1. Goal Progress Calculator

A goal progress feature was added to calculate how much of the user's weight-loss goal has been completed.

The application displays the progress percentage using a visual progress bar.

### 2. Daily Step Tracking

Daily step tracking was added so users can record their number of steps along with their weight and workout status.

This makes the application more useful for monitoring daily physical activity.

## Backend API

The Express.js backend provides the following endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/progress` | Get all progress records |
| POST | `/api/progress` | Add a progress record |
| DELETE | `/api/progress/:id` | Delete a progress record |

The project uses an in-memory array for storing data, so no MongoDB database is required.

## Project Structure

```text
FitProgress/
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       ├── App.css
│       └── main.jsx
│
└── backend/
    └── server.js
