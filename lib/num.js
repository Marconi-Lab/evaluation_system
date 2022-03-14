import { useFetchUser } from '../lib/user'
import { useState, useEffect } from 'react'

export async function sentence_number(){
    const { user, loading } = useFetchUser({ required: true })
    var email = user.name
    var experiment = { email }
    const response_sentence_num = await fetch("/api/display", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(experiment),
    })
    const { posts } = response_sentence_num
    const sentence_info_json = await response_sentence_num.json();
    const kivy = sentence_info_json.evaluated_sentences_no
    return { kivy }
}
