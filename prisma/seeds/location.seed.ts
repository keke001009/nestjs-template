import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function main() {
  const upsert = (data: any) => {
    return prisma.location.upsert({
      where: { name: data.name },
      update: {},
      create: {
        ...data
      },
    })
  }
  return await Promise.all([
    upsert({
        name: '공간1',
        address: '공간1주소',
        lat: 123.123,
        lng: 123.123,
    }),
    upsert({
        name: '공간2',
        address: '공간2주소',
        lat: 123.123,
        lng: 123.123,
    })
  ])
}