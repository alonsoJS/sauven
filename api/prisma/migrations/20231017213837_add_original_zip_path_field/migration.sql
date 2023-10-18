/*
  Warnings:

  - Added the required column `originalZipPath` to the `Upload` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Upload" ADD COLUMN     "originalZipPath" TEXT NOT NULL;
