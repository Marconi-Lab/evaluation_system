export default async function handle(req, res) {
    let { body_three } = req.body
    let route = 'http://34.132.72.167:5005/api/evalstats?text=' + body_three
    const response = await fetch(route)
    const posts = await response.json()
    res.status(200).json({ route })
}