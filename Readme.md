# Faculty-recruitment Portal

Welcome to the Faculty-recruitment Portal! This project is a web-based system that allows IIT Patna to manage faculty recruitment processes.

## Contributers
Harsh Dahiya - harshdahiya7766@gmail.com
Md Kamran - akhtarkamran2004@gmail.com

Project Link: [https://github.com/Coder2264/Faculty-Recruitment-Portal](https://github.com/Coder2264/Faculty-Recruitment-Portal)

## Table of Contents
- [Screenshots](#screenshots-of-the-portal)
- [Demo Video](#demo-video)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [DockerHub Images](#dockerhub-images)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Screenshots of the Portal

![Log in](https://res.cloudinary.com/dftyqcjar/image/upload/v1718346851/MyStorage/sb5tk6oem1twqqoov1co.png)

![Sign Up](https://res.cloudinary.com/dftyqcjar/image/upload/v1718346852/MyStorage/l5zuw9zwertitbluxrlk.png)

![Forgot Password](https://res.cloudinary.com/dftyqcjar/image/upload/v1718346852/MyStorage/ajwyzlovjvmpr42ocmyh.png)

![Screenshot 1](https://res.cloudinary.com/dftyqcjar/image/upload/v1718345250/MyStorage/amvimt3ecwpelmpyylqh.png)

![Screenshot 2](https://res.cloudinary.com/dftyqcjar/image/upload/v1718345250/MyStorage/egul7pzwforqxeevwxn4.png)

![Screenshot 3](https://res.cloudinary.com/dftyqcjar/image/upload/v1718345250/MyStorage/vtdla265m9eenqfam8rg.png)

![Screenshot 4](https://res.cloudinary.com/dftyqcjar/image/upload/v1718345250/MyStorage/lnem6q8np08rf7c8pwgy.png)

![Screenshot 5](https://res.cloudinary.com/dftyqcjar/image/upload/v1718345251/MyStorage/jfg0tg47vbyg23iju76l.png)

![Screenshot 6](https://res.cloudinary.com/dftyqcjar/image/upload/v1718345251/MyStorage/ejlmydqwm3euf0kbeomz.png)


## Features
- User Authentication
  - Sign Up
  - Login
  - Logout
  - Forgot Password
- Application Submission and Review
  - Submit Application
  - Generate Final Report of the Forms
- Notifications
  - Success and Error Messages
- File uploads
  - Support for image uploads
  - Support for PDF uploads

## Technologies Used


![Node.js](https://nodejs.org/static/images/logo.svg)
- Node.js

![Express.js](https://expressjs.com/images/express-facebook-share.png)
- Express.js

![MongoDB](https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png)
- MongoDB

![React.js](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
- React.js

![Cloudinary](https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png)
- Cloudinary

![Docker](https://pbs.twimg.com/profile_images/1749553035133566976/hMA0FbDk_400x400.jpg)
- Docker

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your local machine:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Coder2264/Faculty-Recruitment-Portal.git
    cd Faculty-Recruitment-Portal
    ```
2. **Install backend dependencies**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**
    ```bash
    cd ../frontend
    npm install
    ```
4. **Set up environment variables**
    Create a `.env` file in the `backend` directory and add your configuration details:
    ```env
    PORT= 8000
    MONGODB_URI=
    CORS_ORIGIN=
    ACCESS_TOKEN_SECRET=
    ACCESS_TOKEN_EXPIRY=
    REFRESH_TOKEN_SECRET=
    REFRESH_TOKEN_EXPIRY=
    
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    
    FRONTEND_URL= http://localhost:5173
    BACKEND_URL= http://localhost:8000
    
    EMAIL_ADDRESS=
    EMAIL_PASSWORD=
    
    cl=
    ```

5. **Set up environment variables**
    Create a `.env` file in the `frontend` directory and add your configuration details:
    ```env
    VITE_BACKEND_URL = http://localhost:8000
    VITE_FRONTEND_URL = http://localhost:5173
    ```
6. **Set up Docker**
    Initialise docker compose yaml file in the project directory
    ```bash
    cd ..
    docker-compose up
    ```

## DockerHub Images

You can find the Docker images for the Faculty Recruitment Portal on DockerHub. Click the link below to view the images:

[Faculty Recruitment Portal Docker Images](https://hub.docker.com/r/kamran676446/faculty-recruitment-portal/tags)


## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)