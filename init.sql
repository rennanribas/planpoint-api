CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Clients table
CREATE TABLE "Clients" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "phoneNumber" VARCHAR(255)
);

-- Create Addresses table
CREATE TABLE "Addresses" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "clientId" UUID REFERENCES "Clients"("id") ON DELETE CASCADE,  -- Corrigido para UUID
    "streetAddress" TEXT,
    "city" VARCHAR(255),
    "state" VARCHAR(100),
    "zipCode" VARCHAR(10)
);

CREATE TABLE "Teams" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT
);

-- Create Appointments table
CREATE TABLE "Appointments" (
    "id" SERIAL PRIMARY KEY,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "comments" TEXT,
    "addressId" UUID REFERENCES "Addresses"("id") ON DELETE CASCADE,
    "teamId" UUID REFERENCES "Teams"("id") ON DELETE CASCADE
);
