Cleaning Schedule API
Overview
A simple API for managing cleaning schedules. This API allows you to create, read, update, and delete clients, addresses, teams, and appointments for scheduling cleaning sessions. It also provides endpoints for managing team availabilities for different days of the week.

Getting Started
To get started with this API, follow the steps below:

Clone the Repository:

bash
Copy code
git clone https://github.com/seu-usuario/cleaning-schedule-api.git
Install Dependencies:

bash
Copy code
cd cleaning-schedule-api
npm install
Set Environment Variables:
Create a .env file in the project root directory and configure the following environment variables:

bash
Copy code
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
Database Setup:
This API uses PostgreSQL as the database. You can use Docker Compose to set up a PostgreSQL database for development purposes. Run the following commands:

bash
Copy code
npm run db:start   # Starts the PostgreSQL container
npm run db:init    # Initializes the database with seed data
npm run db:stop    # Stops the PostgreSQL container
Start the API:

bash
Copy code
npm run start:dev
The API should now be running and accessible at http://localhost:3000. You can explore the API endpoints using tools like Postman or curl.

API Endpoints
GET /clients: Retrieve a list of all clients.

POST /clients: Create a new client.

GET /clients/{id}: Retrieve a specific client by ID.

PUT /clients/{id}: Update a specific client by ID.

DELETE /clients/{id}: Delete a specific client by ID.

GET /appointments: Retrieve a list of all appointments.

POST /appointments: Create a new appointment.

GET /appointments/{id}: Retrieve a specific appointment by ID.

PUT /appointments/{id}: Update a specific appointment by ID.

DELETE /appointments/{id}: Delete a specific appointment by ID.

GET /appointments/address/{id}: Retrieve appointments for a specific address.

GET /appointments/address/{addressId}/team/{teamId}: Retrieve appointments for a specific address and team.

GET /teams: Retrieve a list of all teams.

POST /teams: Create a new team.

GET /teams/{id}: Retrieve a specific team by ID.

PUT /teams/{id}: Update a specific team by ID.

DELETE /teams/{id}: Delete a specific team by ID.

GET /availabilities: Retrieve a list of all team availabilities.

POST /availabilities: Create a new team availability.

GET /availabilities/{id}: Retrieve a specific team availability by ID.

PUT /availabilities/{id}: Update a specific team availability by ID.

DELETE /availabilities/{id}: Delete a specific team availability by ID.

Dependencies
NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
TypeORM: An Object-Relational Mapping (ORM) library for TypeScript and JavaScript.
PostgreSQL: A powerful, open-source relational database system.
Contributing
If you would like to contribute to this project, please open an issue or submit a pull request on the GitHub repository.

License
This project is licensed under the UNLICENSED license.