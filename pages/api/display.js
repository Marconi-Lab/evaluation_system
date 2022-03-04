import prisma from '../../lib/prisma'

export default async function handle(req, res) {
    const post = await prisma.individuals_data_db_table.findUnique({
        where: { email: req }
    })
    res.json(post)
}