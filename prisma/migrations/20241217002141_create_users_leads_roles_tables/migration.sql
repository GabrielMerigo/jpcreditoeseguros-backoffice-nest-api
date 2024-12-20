-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT generate_ulid(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "role_value" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3),
    "contact" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" UUID NOT NULL DEFAULT generate_ulid(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "identificationDocument" TEXT NOT NULL,
    "nonCompliance" TEXT NOT NULL,
    "monthlyNetIncome" DOUBLE PRECISION NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "currentlyResideIn" TEXT NOT NULL,
    "employmentRelationship" TEXT NOT NULL,
    "timeAtCompany" TIMESTAMP(3) NOT NULL,
    "taxPayerNumber" INTEGER NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "districtName" TEXT NOT NULL,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_value_key" ON "roles"("value");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_value_fkey" FOREIGN KEY ("role_value") REFERENCES "roles"("value") ON DELETE RESTRICT ON UPDATE CASCADE;
