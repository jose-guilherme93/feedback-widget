import { FeedbackType, feedbackTypes } from ".."
import CloseButton from "../../CloseButton"

interface feedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void 
}

export function FeedbackTypeStep(props: feedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <section className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) => (
                    <button
                        onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
                        key={key}
                        className='bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none ease-in transition'
                        type='button'>
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                ))
            }   
            </section>
        </>
    )
}