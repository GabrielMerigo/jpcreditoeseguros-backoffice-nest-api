/*
  Warnings:

  - Added the required column `owner` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "owner" TEXT NOT NULL;
