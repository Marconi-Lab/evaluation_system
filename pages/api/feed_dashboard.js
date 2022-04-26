import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const res_c = await prisma.individuals_data_db_table.aggregate({
    _count:{
      name: true,
    },
  })

  const resp = await prisma.evaluation_db_table.aggregate({
    _avg: {
      rating_no: true,
      rtf: true,
    },
    _count:{
      rating_no: true,
    },
    where: {
      acceptance_tag: true,
    },
  })

  const res1 = JSON.stringify(resp._avg.rating_no)
  const average = JSON.parse(res1)

  const res1_rtf = JSON.stringify(resp._avg.rtf)
  const average_rtf = JSON.parse(res1_rtf)

  const res1_count = JSON.stringify(resp._count.rating_no)
  const total_count = JSON.parse(res1_count)

  const res1_eval = JSON.stringify(res_c._count.name)
  const evaluators = JSON.parse(res1_eval)

  const bespoke = { evaluators, average, total_count, average_rtf }

  res.json(bespoke)
}