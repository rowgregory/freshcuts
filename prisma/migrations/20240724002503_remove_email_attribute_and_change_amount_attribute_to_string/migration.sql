/*
  Warnings:

  - You are about to drop the column `email` on the `Invoice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "email",
ALTER COLUMN "amount" SET DATA TYPE TEXT;
