import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function main() {
  const upsert = (data: any) => {
    return prisma.product.upsert({
      where: { name: data.name },
      update: {},
      create: {
        ...data
      },
    })
  }
  return await Promise.all([
    upsert({
      type: 'SMALL',
      name: '상품1',
      weight: 100,
      price: 1000,
    }),
    upsert({
      type: 'SMALL',
      name: '상품SMALL1',
      weight: 100,
      price: 2000,
    }),
    upsert({
      type: 'SMALL',
      name: '상품SMALL2',
      weight: 100,
      price: 3000,
    })
  ])
}