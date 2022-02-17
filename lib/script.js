const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
export async function main(some_work) {
  // ... you will write your Prisma Client queries here
  const user_one = await prisma.user.create({
    data: {
      name: "user.nickname",
      email: "user.name",
      model: 'v1',
      sentence: "sentence",
      metric: 5,
      comment: some_work,
    },
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
