export default async function handle(req, res) {
    let { sentence } = req.body
    let route = 'http://34.132.72.167:5002/api/evalstats?text=' + sentence
    let response = await fetch(route)
    let sentence_info1 = await response.json()
    let sentence_info = JSON.stringify(sentence_info1)
    res.status(200).json({ sentence_info })
}