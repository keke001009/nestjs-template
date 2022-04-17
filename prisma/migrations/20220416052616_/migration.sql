/*
  Warnings:

  - You are about to drop the column `keeperId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Member` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memberId]` on the table `Keeper` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[memberId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memberId` to the `Keeper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_keeperId_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_userId_fkey";

-- DropIndex
DROP INDEX "Member_keeperId_key";

-- DropIndex
DROP INDEX "Member_userId_key";

-- AlterTable
ALTER TABLE "Keeper" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "keeperId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Keeper_memberId_key" ON "Keeper"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "User_memberId_key" ON "User"("memberId");

-- AddForeignKey
ALTER TABLE "Keeper" ADD CONSTRAINT "Keeper_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
