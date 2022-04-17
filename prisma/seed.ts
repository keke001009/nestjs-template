import { PrismaClient } from '@prisma/client'
import * as Member from './seeds/Member.seed'
import * as Product from './seeds/product.seed'
import * as Location from './seeds/location.seed'
import * as Task from './seeds/task.seed'
const prisma = new PrismaClient()

async function main() {
  await Product.default()
  await Member.default()
  await Location.default()
  await Task.default()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })