import { useState } from "react";

import {Camera, Trash} from "phosphor-react";
import html2canvas from 'html2canvas'
import { Loading } from "../../Loading";

interface screenShotButtonProps {
    screenshot: string | null
    onScreenshotTook: (screenshot: string | null ) => void
    
}

export default function ScreenShotButton({screenshot, onScreenshotTook}: screenShotButtonProps ) {
    const [isTakingScreeshot, setIsTakingScreeshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakingScreeshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png')

        onScreenshotTook(base64Image)
        
        setIsTakingScreeshot(false)
    }
    if (screenshot) {
        return (
            <button
            type="button" 
            className="p-1 w-10 h-10 rounded-md border-transparent flex items-end justify-end text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => onScreenshotTook(null)}
            style={{
                backgroundImage: `url(${screenshot})`
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    }
    return (
        <button type="button" onClick={handleTakeScreenshot} className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
        {isTakingScreeshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100 "/>}
        </button>
        
    )
}