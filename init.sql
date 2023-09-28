CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "Clients" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) UNIQUE,
    "phoneNumber" VARCHAR(255) UNIQUE
);

CREATE TABLE "Addresses" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "clientId" UUID REFERENCES "Clients"("id") ON DELETE CASCADE,
    "streetAddress" TEXT,
    "city" VARCHAR(255),
    "state" VARCHAR(100),
    "zipCode" VARCHAR(10),
    "initialSessionDuration" INTERVAL,
    "regularSessionDuration" INTERVAL
);

CREATE TABLE "Teams" (
    "id" SERIAL PRIMARY KEY,
    "uuid" UUID UNIQUE DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT
);

CREATE TABLE "Appointments" (
    "id" SERIAL PRIMARY KEY,
    "startDate" TIMESTAMP NOT NULL,
    "endDate" TIMESTAMP NOT NULL,
    "comments" TEXT,
    "addressId" UUID REFERENCES "Addresses"("id") ON DELETE CASCADE,
    "teamId" INTEGER REFERENCES "Teams"("id") ON DELETE CASCADE
);

CREATE TYPE week_day AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

CREATE TABLE "Availabilities" (
    "id" SERIAL PRIMARY KEY,
    "day" week_day NOT NULL,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "teamId" INTEGER REFERENCES "Teams"("id") ON DELETE CASCADE
);