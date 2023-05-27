# Todo API Project

This repository contains the code for the Todo API project. The project aims to provide a RESTful API for managing todo items. It allows users to create, update, delete, and retrieve todo items.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
Before running the project, ensure that you have the following prerequisites installed:
- Node.js (version >= 16.0.0)
- npm (Node Package Manager)
- MongoDB (or a MongoDB instance to connect to)

## Installation
1. Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/Aashish-Kaushik/Todo-app.git
   ```
2. Navigate to the project directory:
   ```
   cd todo-app
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

## Usage
To start the API server, use the following command:
```
npm start
```
The API server will start running on `http://localhost:3000`.

Make sure to update the MongoDB connection settings in the `config.js` file to match your MongoDB instance.

## API Endpoints
The following are the available API endpoints:

| Endpoint            | Method | Description                         |
|---------------------|--------|-------------------------------------|
| `/api/v1/tasks/`    | GET    | Get a list of all todo items        |
| `/api/v1/tasks/`    | POST   | Create a new todo item              |
| `/api/v1/tasks/:id` | GET    | Get details of a specific todo item |
| `/api/v1/tasks/:id` | PATCH   | Update a specific todo item        |
| `/api/v1/tasks/:id` | DELETE | Delete a specific todo item         |

Please refer to the API documentation or the source code for detailed information on request and response payloads.

## Contributing
Contributions to the Todo API project are welcome. To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request describing your changes.
