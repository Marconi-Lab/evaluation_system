const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(){
    const newUser = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    })
    
    const users = await prisma.user.findMany()  
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })