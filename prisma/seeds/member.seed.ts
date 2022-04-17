import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function main() {
  const upsert = (data: any) => {
    return prisma.member.upsert({
      where: { 
          username: data.username
        },
      update: {},
      create: {
        ...data
      },
    })
  }
  return await Promise.all([
    upsert({
      username: 'user1',
      password: 'user1',
      email: 'user1',
      user: {
        create: {

        }
      }
    }),
    upsert({
        username: 'keeper1',
        password: 'keeper1',
        email: 'keeper1',
        keeper: {
            create: {
                
            }
          }
      }),
  ])
}