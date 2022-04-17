/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `end` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_keeperId_fkey";

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "keeperId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_keeperId_fkey" FOREIGN KEY ("keeperId") REFERENCES "Keeper"("id") ON DELETE SET NULL ON UPDATE CASCADE;
