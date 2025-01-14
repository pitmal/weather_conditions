# Weather API

A simple CRUD API for weather data using Express.js and MongoDB Atlas.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
- Rename `.env.example` to `.env`
- Replace `your_mongodb_atlas_connection_string_here` with your MongoDB Atlas connection string

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

- GET `/api/weather` - Get all weather records
- GET `/api/weather/:id` - Get a specific weather record
- POST `/api/weather` - Create a new weather record
- PUT `/api/weather/:id` - Update a weather record
- DELETE `/api/weather/:id` - Delete a weather record


```
