import Banner from '@/components/services/interpretation/Banner'
import DomainSpecific from '@/components/services/interpretation/DomainSpecific'
import InterpretationBlog from '@/components/services/interpretation/InterpretationBlog'
import InterpretationForm from '@/components/services/interpretation/InterpretationForm'
import Interpretation_Faq from '@/components/services/interpretation/Interpretation_Faq'
import Language_Spacilist from '@/components/services/interpretation/Language_Spacilist'
import PerformanceManagement from '@/components/services/interpretation/PerformanceManagement'
import React from 'react'

const Interpretation = () => {
  return (
    <div className=''>
      <Banner />
      <DomainSpecific />
      <PerformanceManagement />
      <Language_Spacilist />
      <Interpretation_Faq />
      <InterpretationForm />
      <InterpretationBlog />
    </div>
  )
}

export default Interpretation