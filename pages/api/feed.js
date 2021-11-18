import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const posts = await prisma.sentences.findMany()
  res.json(posts)
}