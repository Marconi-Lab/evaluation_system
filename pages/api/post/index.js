import prisma from '../../../lib/prisma'

// POST /api/post
// Updated fields in body: name, email, sentence, metric, comment, model
export default async function handle(req, res) {
  const { name, email, sentence, metric, comment, model, inference_time, rtf, wav_length_seconds, evaluation_time, sentence_num } = req.body
  const result = await prisma.evaluation_db_table.create({
    data: {
      model_version_id: model,
      inference_time: inference_time,
      rtf:rtf,
      wav_length_seconds:wav_length_seconds,
      evaluation_time:evaluation_time,
      rating_no:metric,
      comment: comment,
      b64_audio_string:null,
      acceptance_tag:true,
      sentences_db_table: {
        connect: { id: 1 },
      },
    },
  })
  res.json(result)
}