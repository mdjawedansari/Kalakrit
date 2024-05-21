import React from 'react'
import TranslationLandingPage from '@/components/services/translation/TranslationLandingPage'
import OurClients from '@/components/services/translation/OurClients'
import ServiceCarousel from '@/components/services/translation/ServiceCarousel'
import HelpingHand from '@/components/services/translation/HelpingHand'
import TranslationFaqs from '@/components/services/translation/TranslationFaqs'
import TranslationForm from '@/components/services/translation/TranslationForm'
import CategoryCarousel from '@/components/services/translation/TranslationCarousel'



const TranslationLocalization = () => {
  return (
    <>
      <div>
        <TranslationLandingPage />
        <OurClients />
        <ServiceCarousel />
        <HelpingHand />
        <TranslationFaqs />
        <TranslationForm />
        <div className="w-full bg-[#100f13] h-20">

        </div>
        <CategoryCarousel />

        <div className="w-full bg-[#ffffff] h-32">

        </div>
      </div>
    </>
  )
}

export default TranslationLocalization