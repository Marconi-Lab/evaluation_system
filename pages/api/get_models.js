export default async function handle(req, res) {
  const fs = require('fs');
  let models = require('../../models.json');
  res.json(models)
}