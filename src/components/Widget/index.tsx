import { useState } from "react";


import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'

import { FeedbackTypeStep } from "./steps/feedbackTypeStep";
import { FeedbackContentStep } from "./steps/feedbackContentStep";
import FeedbackSucessStep from "./steps/feedbackSucessSTep"

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImage,
            alt: 'uma minhoca roxa',
            placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
        },
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideaImage,
            alt: 'uma lampada amarela',
            placeholder: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImage,
            alt: 'uma nuvem de pensamento',
            placeholder: 'Queremos te ouvir. O que você gostaria de nos dizer?'
        },
    },
}
export type FeedbackType = keyof typeof feedbackTypes

export default function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }
    
    return (
        <section className=" bg-zinc-900 p-4 mb-4 relative rounded-2xl flex flex-col items-center shadow-2xl w-[calc(100vw-2rem)] md:w-auto">
           
           {feedbackSent ? (<FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />) : (
               <>
                {!feedbackType ?
                (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>)
                : (<FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
                />
            )}
               </>
           )}

            <footer 
            className="text-xs text-neutral-400">
            Feito com <span className=" text-[#A1A1AA] hover:text-red-700 transition-all">♥</span> pela <a className="underline underline-offset-1" 
            target="_blank" 
            href="https://www.rocketseat.com.br">Rocketseat</a>
            </footer>
            
        </section>
    )
}