/*
  Warnings:

  - You are about to drop the column `birthDate` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `currentlyResideIn` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `districtName` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `employmentRelationship` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `identificationDocument` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `maritalStatus` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyNetIncome` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `nonCompliance` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `taxPayerNumber` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `timeAtCompany` on the `leads` table. All the data in the column will be lost.
  - Added the required column `birth_date` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currently_reside_in` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district_name` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment_relationship` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identification_document` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marital_status` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthly_net_income` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `non_compliance` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax_payer_number` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_at_company` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "leads" DROP COLUMN "birthDate",
DROP COLUMN "currentlyResideIn",
DROP COLUMN "districtName",
DROP COLUMN "employmentRelationship",
DROP COLUMN "firstName",
DROP COLUMN "fullName",
DROP COLUMN "identificationDocument",
DROP COLUMN "lastName",
DROP COLUMN "maritalStatus",
DROP COLUMN "monthlyNetIncome",
DROP COLUMN "nonCompliance",
DROP COLUMN "taxPayerNumber",
DROP COLUMN "timeAtCompany",
ADD COLUMN     "birth_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "currently_reside_in" TEXT NOT NULL,
ADD COLUMN     "district_name" TEXT NOT NULL,
ADD COLUMN     "employment_relationship" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "identification_document" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "marital_status" TEXT NOT NULL,
ADD COLUMN     "monthly_net_income" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "non_compliance" TEXT NOT NULL,
ADD COLUMN     "tax_payer_number" TEXT NOT NULL,
ADD COLUMN     "time_at_company" TIMESTAMP(3) NOT NULL;
