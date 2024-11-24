# RxSphere (HackRx 2024)

## Description
RxSphere is a telepharmacy platform that connects patients with pharmacists for virtual consultations and prescription management. It aims to digitize pharmaceutical care, making healthcare more accessible in underserved areas while ensuring a reliable and efficient digital experience

## How to Install and Run Locally
To run this Vite app with the Express.js backend, make sure you have Node.js and npm installed.
### Part 1. Setting up Backend
1. Go into the server folder and run `npm install` to download packages and dependencies.
2. Create a .env file in the same folder and add a MongoDB Uri to it with variable name `MONGO_URI`
### Part 2: Setting up Frontend
1. Go into the rx-sphere-app folder and run `npm install` to download dependencies.
### Part 3: Running the Program
1. To run the backend, cd into the server folder and run `node server.js`.
2. To run the frontend, cd into the rx-sphere-app folder and run `npm run dev`.
3. You should now be able to access the web app on http://localhost:3000.