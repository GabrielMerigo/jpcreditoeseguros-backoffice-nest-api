/*
  Warnings:

  - Added the required column `status_value` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "status_value" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "lead_status" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lead_status_pkey" PRIMARY KEY ("value")
);

-- CreateIndex
CREATE UNIQUE INDEX "lead_status_value_key" ON "lead_status"("value");

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_status_value_fkey" FOREIGN KEY ("status_value") REFERENCES "lead_status"("value") ON DELETE RESTRICT ON UPDATE CASCADE;
