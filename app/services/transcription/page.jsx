import React from 'react'
import LandingPage from '@/components/services/Transcription/LandingPage'
import OurServices from '@/components/services/Transcription/OurServices'
import HowWeHelpCarousel from '@/components/services/Transcription/HowWeHelpCarousel'
import TranscriptionFaq from '@/components/services/Transcription/TranscriptionFaq'
import TranscriptionForm from '@/components/services/Transcription/TranscriptionForm'
import TranscriptionBlog from '@/components/services/Transcription/TranscriptionBlog'

const Transcription = () => {
  return (
    <div>
      <LandingPage />
      <OurServices />
      <HowWeHelpCarousel />
      <TranscriptionFaq />
      <TranscriptionForm />
      <TranscriptionBlog />
    </div>
  )
}

export default Transcription