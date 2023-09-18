CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Clients table
CREATE TABLE "Clients" (
    "id" SERIAL PRIMARY KEY,
    "uid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "phoneNumber" VARCHAR(255)
);

-- Create Addresses table
CREATE TABLE "Addresses" (
    "id" SERIAL PRIMARY KEY,
    "clientId" INTEGER REFERENCES "Clients"("id") ON DELETE CASCADE,
    "streetAddress" TEXT,
    "city" VARCHAR(255),
    "state" VARCHAR(100),
    "zipCode" VARCHAR(10)
);

-- Create Slots table
CREATE TABLE "Slots" (
    "id" SERIAL PRIMARY KEY,
    "start_time" TIMESTAMP NOT NULL,
    "end_time" TIMESTAMP NOT NULL,
    "addressId" INTEGER REFERENCES "Addresses"("id") ON DELETE CASCADE
);

-- Create Appointments table
CREATE TABLE "Appointments" (
    "id" SERIAL PRIMARY KEY,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "slotId" INTEGER,
    FOREIGN KEY ("slotId") REFERENCES "Slots"("id")
);