import prisma from '../../../lib/prisma'

// POST /api/post
// Updated fields in body: name, email, sentence, metric, comment, model
export default async function handle(req, res) {
  const { name, email, sentence, metric, comment, model, evaluation_time, sentence_num} = req.body
  //const all_sentence_info = JSON.parse(sentence_info)
  //const total_acceptance_time_req = all_sentence_info["process_t"] + all_sentence_info["wav_length"]
  const total_acceptance_time_req = 0
  if (evaluation_time >= total_acceptance_time_req){
    var accept_tag = true
  }else{
    var accept_tag = false
  }
  const result = await prisma.evaluation_db_table.create({
    data: {
      model_version_id: model,
      inference_time: 0,
      rtf:0,
      wav_length_seconds:0,
      evaluation_time:evaluation_time,
      rating_no:metric,
      comment: comment,
      b64_audio_string:null,
      acceptance_tag:accept_tag,
      sentences_db_table: {
        connect: { id: sentence_num },
      },
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
    include: {
      individuals_data_db_table: true,
      sentences_db_table:true,
    },
  })

  const result_to_update = await prisma.individuals_data_db_table.findUnique({
    where: {
      email: email,
    },
  })

  var updated_qns = result_to_update.evaluated_sentences_no + 1

  if (updated_qns >= 10 ){
    var evaluation_status_tag = true
  }else{
    var evaluation_status_tag = false
  }

  const user = await prisma.evaluation_db_table.update({
    where: { id: result.id },
    data: {
      individuals_data_db_table: {
        upsert: {
          create: {
            email: email,
            name: name,
            evaluated_sentences_no:1,
            evaluated_models_array:"['v2']",
            total_evaluated_models:1,
            evaluation_status:evaluation_status_tag,
          },
          update: {
            evaluated_sentences_no:updated_qns,
            evaluated_models_array:"['v2']",
            total_evaluated_models:1,
            evaluation_status:evaluation_status_tag,
          }
        },
      },
    },
  })

  res.json(result)
}