import prisma from '../../lib/prisma'

export default async function handle(req, res) {
    const { email2 } = req.body
    const data_res_too = await prisma.evaluation_db_table.findMany({
        where: { individuals_data_db_table: {
          email: email2 }
        }
      })
    res.json(data_res_too)
}