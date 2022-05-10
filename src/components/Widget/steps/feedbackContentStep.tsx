import { ArrowLeft,} from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

import ScreenshotButton from './ScreenshotButton'


interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
    } : FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null >(null)
    const [comment, setComment] = useState('')
    
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        console.log({screenshot, comment})

        onFeedbackSent()
    }


    return (
        <>
            <header className="flex gap-1 items-center ">
                <button className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft 
                    onClick={onFeedbackRestartRequested} 
                />
                </button>
                    <span className="text-xl leading-6 flex items-center">
                        <img 
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6 m-[2px]" 
                        /> 
                        {feedbackTypeInfo.title}
                    </span>
                    <CloseButton />
            </header>

            <form 
            onSubmit={handleSubmitFeedback} 
            className="my-4 w-full">
                <textarea
                className="min-w-[304px] min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 border-1 p-3 bg-transparent rounded-md resize-none focus:outline-none focus:ring-brand-500 focus:border-brand-500  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                placeholder={feedbackTypeInfo.image.placeholder}
                onChange={event => setComment(event.target.value)}
                >
                </textarea>
            

                <footer className="flex gap-2 mt-2 w-full">
                    <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot} 
                    />
                    
                    <button
                    disabled={comment.length === 0}
                    type="submit" 
                    className="p-2 w-full bg-brand-500 rounded-md border-transparent hover:bg-brand-300 flex flex-1 justify-center items-center text-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 "
                    >
                    Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}