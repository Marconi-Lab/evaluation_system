import prisma from '../../../lib/prisma'

// POST /api/post
// Updated fields in body: name, email, sentence, metric, comment, model
export default async function handle(req, res) {
  const { name, email, sentence, metric, comment, model, inference_time, rtf, wav_length_seconds, evaluation_time, sentence_num, newv } = req.body
  const result = await prisma.evaluation_db_table.create({
    data: {
      model_version_id: model,
      inference_time: inference_time,
      rtf:rtf,
      wav_length_seconds:wav_length_seconds,
      evaluation_time:evaluation_time,
      rating_no:metric,
      comment: newv,
      b64_audio_string:null,
      acceptance_tag:true,
      sentences_db_table: {
        connect: { id: sentence_num },
      },
      individuals_data_db_table:{
        connectOrCreate: {
          where:  { email: email },
          create: {
            email: email,
            name: name,
            evaluated_sentences_no:1,
            evaluated_models_array:"['v2']",
            total_evaluated_models:1,
            evaluation_status:false,
          },
        }
      },
    },
    include: {
      individuals_data_db_table: true,
      sentences_db_table:true,
    },
  })
  res.json(result)
}