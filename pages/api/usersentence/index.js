import prisma from '../../../lib/prisma'

// POST /api/post
// Updated fields in body: name, email, sentence, metric, comment, model
export default async function handle(req, res) {
  const { name, email, sentence, metric, comment, model, inference_time, rtf, wav_length_seconds, evaluation_time} = req.body
  const result = await prisma.user_input_sentences_db_table.create({
    data: {
      model_version_id: model,
      text:sentence,
      inference_time: inference_time,
      rtf:rtf,
      wav_length_seconds:wav_length_seconds,
      evaluation_time:evaluation_time,
      rating_no:metric,
      comment: comment,
      b64_audio_string:null,
      acceptance_tag:true,
      individuals_data_db_table:{
        connectOrCreate: {
          where:  { email: email },
          create: {
            email: email,
            name: name,
            evaluated_sentences_no:0,
            evaluated_models_array:"['v2']",
            total_evaluated_models:1,
            evaluation_status:false,
          },
        }
      },
    },
  })
  res.json(result)
}