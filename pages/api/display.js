import prisma from '../../lib/prisma'

export default async function handle(req, res) {
    const { email } = req.body
    const post = await prisma.individuals_data_db_table.findUnique({
        where: { email: email }
    })
    res.json(post)
}