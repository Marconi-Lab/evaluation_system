import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const info = await prisma.evaluation_db_table.findMany()
  res.json(info)
}