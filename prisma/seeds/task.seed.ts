import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function main() {
  // const upsert = (data: any) => {
  //   return prisma.task.upsert({
  //     where: { productId: data.productId, keeperId: data.keeperId },
  //     update: {},
  //     create: {
  //       ...data
  //     },
  //   })
  // }
  // return await Promise.all([
  //   upsert({
  //     keeperId: 1,
  //     productId: 1,

  //   }),
  //   upsert({
  //     userId: 1,
  //     productId: 1,
  //   }),
  //   upsert({

  //   })
  // ])
}