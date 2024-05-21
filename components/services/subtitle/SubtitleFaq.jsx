"use client"
import React, { useState } from 'react'; // Import useEffect as well
import BasicAccordion from './Accordion';

const faqs=[
  {
    id: 1,
    "question": "What is subtitling?",
    "answer": "Subtitling is the process of displaying text on a screen that translates or transcribes spoken dialogue or audio content into another language or provides captions for the hearing impaired."
  },
  {
    id: 2,
    "question": "Why would I need subtitling services?",
    "answer": "Subtitling is essential for making video content accessible to a global audience, improving content comprehension, complying with legal requirements, and enhancing search engine optimization (SEO) for video content."
  },
  {
    id: 3,
    "question": "What types of subtitling services are available?",
    "answer": "There are various types of subtitling services, including open captions (always visible), closed captions (user-selectable), and burned-in subtitles (part of the video). The choice depends on your specific needs."
  },
  {
    id: 4,
    "question": "How can I ensure accurate translations in subtitles?",
    "answer": "To ensure accuracy, it's crucial to work with professional subtitling services that employ experienced linguists fluent in both the source and target languages. They will ensure precise translations and proper synchronization."
  },
  {
    id: 5,
    "question": "Can subtitling be done for different languages and dialects?",
    "answer": "Yes, subtitling can be provided for a wide range of languages and dialects to reach diverse audiences. Professional subtitling services can accommodate various linguistic requirements."
  }
]


const SubtitleFaq = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className='w-full bg-[#100f13] py-20 '>
        <div className='w-11/12 flex flex-wrap-reverse md:flex-nowrap m-auto '>
         
          <div className='md:w-1/2 w-full'>
            {faqs.map((faq) => (
              <BasicAccordion key={faq.id} faq={faq} expanded={expanded} setExpanded={setExpanded} />
            ))}
          </div>
          <div className='w-3/4 md:w-1/2  m-auto text-left py-16'>
          
          <h1 className='w-full md:text-3xl text-2xl font-semibold text-[#ffffff] '>Frequently asked questions</h1>
        </div>
        </div>
      </div>
    </>
  );
};



export default SubtitleFaq;