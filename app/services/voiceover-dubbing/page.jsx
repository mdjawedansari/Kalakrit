import React from 'react'
import "./Category.css"
import VoiceoverAndDubbing from '@/components/services/voiceover/VoiceoverAndDubbing'
import UseCase from '@/components/services/voiceover/UseCase'
import Category from '@/components/services/voiceover/Category'
import Hwch from '@/components/services/voiceover/Hwch'
import VoiceoverFaq from '@/components/services/voiceover/VoiceoverFaq'
import VoiceoverForm from '@/components/services/voiceover/VoiceoverForm'

const VoiceoverDubbing = () => {
  return (
    <div>
      <VoiceoverAndDubbing />
      <UseCase />
      <Category />
      <Hwch />
      <VoiceoverFaq />
      <VoiceoverForm />
    </div>
  )
}

export default VoiceoverDubbing