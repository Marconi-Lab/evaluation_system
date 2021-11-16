import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: name, email
export default async function handle(req, res) {
  const { name, email, sentence, metric, comment, model } = req.body
  const result = await prisma.user.create({
    data: {
      name: name,
      email: email,
      sentence: sentence,
      metric: metric,
      comment: comment,
      model: model,
    },
  })
  res.json(result)
}